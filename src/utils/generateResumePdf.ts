import { jsPDF } from "jspdf";
import { resumeData } from "../static/resumeData";

// ============================================================
// COLORS
// ============================================================

const COLORS = {
  black: [0, 0, 0] as const,
  accent: [0, 120, 140] as const,
  muted: [80, 80, 80] as const,
};

// ============================================================
// PAGE / LAYOUT
// ============================================================

const PAGE_W = 210;
const PAGE_H = 297;

const MARGIN_LEFT = 14;
const MARGIN_RIGHT = 14;
const MARGIN_TOP = 13;
const MARGIN_BOTTOM = 12;

const CONTENT_W = PAGE_W - MARGIN_LEFT - MARGIN_RIGHT;

const BODY_FONT_SIZE = 9.2;
const SMALL_FONT_SIZE = 8.6;
const SECTION_FONT_SIZE = 10;

const LINE_HEIGHT = 3.9;
const BULLET_GAP = 0.6;

// ============================================================
// HELPERS
// ============================================================

function ensurePageSpace(
  doc: jsPDF,
  y: number,
  requiredHeight: number
): number {
  if (y + requiredHeight > PAGE_H - MARGIN_BOTTOM) {
    doc.addPage();
    return MARGIN_TOP;
  }

  return y;
}

/**
 * Render inline **bold** markdown text.
 */
function renderMarkdownLine(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  fontSize: number,
  color: readonly [number, number, number] = COLORS.black,
  maxWidth: number = CONTENT_W
): number {
  doc.setFontSize(fontSize);

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  let curX = x;

  for (const part of parts) {
    if (!part) continue;

    const isBold = part.startsWith("**") && part.endsWith("**");

    const cleanText = isBold ? part.slice(2, -2) : part;

    doc.setFont("helvetica", isBold ? "bold" : "normal");
    doc.setTextColor(...color);

    const textW = doc.getTextWidth(cleanText);

    const remainingWidth = x + maxWidth - curX;

    if (textW > remainingWidth) {
      const wrapped = doc.splitTextToSize(cleanText, remainingWidth);

      if (wrapped.length > 0) {
        doc.text(wrapped[0], curX, y);
      }
    } else {
      doc.text(cleanText, curX, y);
    }

    curX += Math.min(textW, remainingWidth);
  }

  return curX;
}

/**
 * Draw a section header with an accent underline.
 */
function drawSectionHeader(
  doc: jsPDF,
  title: string,
  y: number
): number {
  y = ensurePageSpace(doc, y, 10);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(SECTION_FONT_SIZE);
  doc.setTextColor(...COLORS.black);

  doc.text(title, MARGIN_LEFT, y);

  const lineY = y + 1.5;

  doc.setDrawColor(...COLORS.accent);
  doc.setLineWidth(0.35);

  doc.line(
    MARGIN_LEFT,
    lineY,
    PAGE_W - MARGIN_RIGHT,
    lineY
  );

  return y + 5;
}

/**
 * Draw bullet with proper wrapping.
 */
function drawBullet(
  doc: jsPDF,
  text: string,
  y: number,
  indent: number = MARGIN_LEFT + 3.5,
  fontSize: number = BODY_FONT_SIZE
): number {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(fontSize);
  doc.setTextColor(...COLORS.black);

  const maxW =
    CONTENT_W -
    (indent - MARGIN_LEFT) -
    1;

  const cleanText = text.replace(/\*\*/g, "");

  const lines = doc.splitTextToSize(
    cleanText,
    maxW
  );

  const requiredHeight =
    Math.max(1, lines.length) * LINE_HEIGHT + BULLET_GAP;

  y = ensurePageSpace(doc, y, requiredHeight);

  // Bullet
  doc.setFillColor(...COLORS.black);

  doc.circle(
    indent - 2.5,
    y - 1.1,
    0.55,
    "F"
  );

  // First line with markdown support
  renderMarkdownLine(
    doc,
    text,
    indent,
    y,
    fontSize,
    COLORS.black,
    maxW
  );

  // Remaining lines
  for (let i = 1; i < lines.length; i++) {
    y += LINE_HEIGHT;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    doc.setTextColor(...COLORS.black);

    doc.text(
      lines[i],
      indent,
      y
    );
  }

  return y + LINE_HEIGHT + BULLET_GAP;
}

/**
 * Draw project title with optional clickable URL.
 */
function drawProjectTitle(
  doc: jsPDF,
  name: string,
  link: string,
  y: number
): number {
  y = ensurePageSpace(doc, y, 8);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(BODY_FONT_SIZE);
  doc.setTextColor(...COLORS.black);

  doc.text(
    name,
    MARGIN_LEFT,
    y
  );

  const nameWidth =
    doc.getTextWidth(name);

  if (link) {
    const displayUrl = link.replace(
      /^https?:\/\//,
      ""
    );

    const linkDisplay =
      `  |  ${displayUrl}`;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(SMALL_FONT_SIZE);
    doc.setTextColor(...COLORS.accent);

    doc.text(
      linkDisplay,
      MARGIN_LEFT + nameWidth,
      y
    );

    const linkWidth =
      doc.getTextWidth(linkDisplay);

    doc.link(
      MARGIN_LEFT + nameWidth,
      y - 3.2,
      linkWidth,
      4,
      {
        url: link,
      }
    );
  }

  return y + 4.2;
}

/**
 * Draw compact project tech line.
 */
function drawTechLine(
  doc: jsPDF,
  tech: string,
  y: number
): number {
  y = ensurePageSpace(doc, y, 6);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(SMALL_FONT_SIZE);
  doc.setTextColor(...COLORS.black);

  const label = "Tech: ";

  doc.text(
    label,
    MARGIN_LEFT + 3.5,
    y
  );

  const labelWidth =
    doc.getTextWidth(label);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.muted);

  const maxWidth =
    CONTENT_W - 3.5;

  const techLines =
    doc.splitTextToSize(
      tech,
      maxWidth - labelWidth
    );

  doc.text(
    techLines[0],
    MARGIN_LEFT + 3.5 + labelWidth,
    y
  );

  for (let i = 1; i < techLines.length; i++) {
    y += LINE_HEIGHT;

    doc.text(
      techLines[i],
      MARGIN_LEFT + 3.5,
      y
    );
  }

  return y + LINE_HEIGHT;
}

// ============================================================
// MAIN PDF GENERATOR
// ============================================================

export function generateResumePdf(): void {
  const doc = new jsPDF({
    unit: "mm",
    format: "a4",
  });

  let y = MARGIN_TOP;

  // ==========================================================
  // HEADER
  // ==========================================================

  // Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...COLORS.black);

  doc.text(
    resumeData.name,
    PAGE_W / 2,
    y,
    {
      align: "center",
    }
  );

  y += 5.5;

  // Professional title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...COLORS.black);

  doc.text(
    "Software Engineer | Backend / Full Stack Developer",
    PAGE_W / 2,
    y,
    {
      align: "center",
    }
  );

  y += 4.5;

  // Contact
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.7);
  doc.setTextColor(...COLORS.black);

  const contactLine =
    `${resumeData.contact.location}  |  ` +
    `${resumeData.contact.phone}  |  ` +
    `${resumeData.contact.email}`;

  doc.text(
    contactLine,
    PAGE_W / 2,
    y,
    {
      align: "center",
    }
  );

  y += 4;

  // Links
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.accent);

  const linksLine =
    resumeData.links
      .map((link) => link.label)
      .join("  |  ");

  doc.text(
    linksLine,
    PAGE_W / 2,
    y,
    {
      align: "center",
    }
  );

  // Clickable link annotations
  const fullLinksWidth =
    doc.getTextWidth(linksLine);

  let linkStartX =
    PAGE_W / 2 -
    fullLinksWidth / 2;

  for (const link of resumeData.links) {
    const labelWidth =
      doc.getTextWidth(link.label);

    doc.link(
      linkStartX,
      y - 3,
      labelWidth,
      4,
      {
        url: link.url,
      }
    );

    linkStartX +=
      labelWidth +
      doc.getTextWidth("  |  ");
  }

  y += 5.5;

  // ==========================================================
  // SUMMARY
  // ==========================================================

  y = drawSectionHeader(
    doc,
    "SUMMARY",
    y
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(BODY_FONT_SIZE);
  doc.setTextColor(...COLORS.black);

  const summaryLines =
    doc.splitTextToSize(
      resumeData.summary,
      CONTENT_W
    );

  y = ensurePageSpace(
    doc,
    y,
    summaryLines.length *
      LINE_HEIGHT +
      3
  );

  doc.text(
    summaryLines,
    MARGIN_LEFT,
    y
  );

  y +=
    summaryLines.length *
      LINE_HEIGHT +
    2.5;

  // ==========================================================
  // SKILLS
  // ==========================================================

  y = drawSectionHeader(
    doc,
    "SKILLS",
    y
  );

  for (const skill of resumeData.skills) {
    y = ensurePageSpace(
      doc,
      y,
      5
    );

    // Bullet
    doc.setFillColor(...COLORS.black);

    doc.circle(
      MARGIN_LEFT + 0.6,
      y - 1.1,
      0.55,
      "F"
    );

    // Category
    doc.setFont("helvetica", "bold");
    doc.setFontSize(BODY_FONT_SIZE);
    doc.setTextColor(...COLORS.black);

    const categoryText =
      `${skill.category}: `;

    doc.text(
      categoryText,
      MARGIN_LEFT + 3.5,
      y
    );

    const categoryWidth =
      doc.getTextWidth(categoryText);

    // Items
    doc.setFont("helvetica", "normal");

    doc.text(
      skill.items,
      MARGIN_LEFT +
        3.5 +
        categoryWidth,
      y
    );

    y += LINE_HEIGHT + 0.3;
  }

  y += 1.5;

  // ==========================================================
  // EXPERIENCE
  // ==========================================================

  y = drawSectionHeader(
    doc,
    "EXPERIENCE",
    y
  );

  for (const exp of resumeData.experiences) {
    y = ensurePageSpace(
      doc,
      y,
      8
    );

    // Job title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(BODY_FONT_SIZE);
    doc.setTextColor(...COLORS.black);

    doc.text(
      exp.title,
      MARGIN_LEFT,
      y
    );

    // Company
    doc.text(
      exp.company,
      PAGE_W / 2,
      y,
      {
        align: "center",
      }
    );

    // Duration
    doc.text(
      exp.duration,
      PAGE_W - MARGIN_RIGHT,
      y,
      {
        align: "right",
      }
    );

    y += 4.2;

    // Bullets
    for (const bullet of exp.bullets) {
      y = drawBullet(
        doc,
        bullet,
        y,
        MARGIN_LEFT + 3.5,
        BODY_FONT_SIZE
      );
    }

    y += 1.2;
  }

  // ==========================================================
  // PROJECTS
  // ==========================================================

  y = drawSectionHeader(
    doc,
    "PROJECTS",
    y
  );

  for (const proj of resumeData.projects) {
    y = drawProjectTitle(
      doc,
      proj.name,
      proj.link,
      y
    );

    // Project bullets
    for (const bullet of proj.bullets) {
      y = drawBullet(
        doc,
        bullet,
        y,
        MARGIN_LEFT + 3.5,
        BODY_FONT_SIZE
      );
    }

    // Tech
    y = drawTechLine(
      doc,
      proj.tech,
      y
    );

    y += 1;
  }

  // ==========================================================
  // ACHIEVEMENTS
  // ==========================================================

  y = drawSectionHeader(
    doc,
    "ACHIEVEMENTS",
    y
  );

  for (const achievement of resumeData.achievements) {
    y = drawBullet(
      doc,
      achievement,
      y,
      MARGIN_LEFT + 3.5,
      BODY_FONT_SIZE
    );
  }

  y += 1.5;

  // ==========================================================
  // EDUCATION
  // ==========================================================

  y = drawSectionHeader(
    doc,
    "EDUCATION",
    y
  );

  y = ensurePageSpace(
    doc,
    y,
    10
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(BODY_FONT_SIZE);
  doc.setTextColor(...COLORS.black);

  doc.text(
    resumeData.education.degree,
    MARGIN_LEFT,
    y
  );

  doc.text(
    resumeData.education.duration,
    PAGE_W - MARGIN_RIGHT,
    y,
    {
      align: "right",
    }
  );

  y += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(SMALL_FONT_SIZE);
  doc.setTextColor(...COLORS.black);

  const universityLines =
    doc.splitTextToSize(
      resumeData.education.university,
      CONTENT_W
    );

  doc.text(
    universityLines,
    MARGIN_LEFT,
    y
  );

  // ==========================================================
  // SAVE
  // ==========================================================

  doc.save(
    "Resume_Ramprosad_Gharami.pdf"
  );
}