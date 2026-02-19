import { jsPDF } from "jspdf";
import { resumeData } from "../static/resumeData";

// --- Color palette ---
const COLORS = {
  black: [0, 0, 0] as const,
  accent: [0, 120, 140] as const, // teal accent for links & rules
  ruleDark: [60, 60, 60] as const,
};

// --- Layout constants ---
const PAGE_W = 210; // A4 mm
const MARGIN_LEFT = 14;
const MARGIN_RIGHT = 14;
const CONTENT_W = PAGE_W - MARGIN_LEFT - MARGIN_RIGHT;
const LINE_HEIGHT = 4.2;


/**
 * Render text with inline **bold** markdown segments.
 * Returns the x position after the last segment.
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

    // Word-wrap awareness: if text would exceed maxWidth, we just let jsPDF handle it
    const textW = doc.getTextWidth(cleanText);
    if (curX + textW > x + maxWidth) {
      // Simple approach: just print at current position, jsPDF won't auto-wrap inline
      // so we truncate gracefully
      doc.text(cleanText, curX, y, { maxWidth: x + maxWidth - curX });
    } else {
      doc.text(cleanText, curX, y);
    }
    curX += textW;
  }
  return curX;
}

/**
 * Draw a section header with an underline rule.
 */
function drawSectionHeader(doc: jsPDF, title: string, y: number): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.black);
  doc.text(title, MARGIN_LEFT, y);

  // Underline
  y += 1;
  doc.setDrawColor(...COLORS.accent); // Accent color for the section line looks good
  doc.setLineWidth(0.4);
  doc.line(MARGIN_LEFT, y, PAGE_W - MARGIN_RIGHT, y);

  return y + 4.5;
}

/**
 * Draw a bullet point with markdown-styled text.
 */
function drawBullet(
  doc: jsPDF,
  text: string,
  y: number,
  indent: number = MARGIN_LEFT + 3,
  fontSize: number = 10
): number {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(fontSize);
  doc.setTextColor(...COLORS.black);
  
  // Draw a filled circle as bullet
  doc.setFillColor(...COLORS.black);
  doc.circle(indent - 2.5, y - 1, 0.6, "F");

  // Check if text needs wrapping
  doc.setFontSize(fontSize);
  const maxW = CONTENT_W - (indent - MARGIN_LEFT) - 1;
  const lines = doc.splitTextToSize(text.replace(/\*\*/g, ""), maxW);

  if (lines.length > 1) {
    // Multi-line: render first line with markdown, then plain lines
    renderMarkdownLine(doc, text, indent, y, fontSize, COLORS.black, maxW);
    for (let i = 1; i < lines.length; i++) {
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...COLORS.black);
      doc.text(lines[i], indent, y);
    }
  } else {
    renderMarkdownLine(doc, text, indent, y, fontSize, COLORS.black, maxW);
  }

  return y + LINE_HEIGHT + 0.3;
}

/**
 * Generate and download the resume PDF.
 */
export function generateResumePdf(): void {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = 16;

  // ========== HEADER ==========
  // Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...COLORS.black);
  doc.text(resumeData.name, PAGE_W / 2, y, { align: "center" });
  y += 6;

  // Contact line
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.black);
  const contactLine = `${resumeData.contact.location}  |  ${resumeData.contact.phone}  |  ${resumeData.contact.email}`;
  doc.text(contactLine, PAGE_W / 2, y, { align: "center" });
  y += 4.5;

  // Links line
  const linksLine = resumeData.links.map((l) => l.label).join("  |  ");
  doc.setTextColor(...COLORS.accent); // Links remain in accent color
  doc.text(linksLine, PAGE_W / 2, y, { align: "center" });

  // Add clickable link annotations
  doc.setFontSize(10);
  const fullLinksText = linksLine;
  const fullLinksWidth = doc.getTextWidth(fullLinksText);
  let linkStartX = PAGE_W / 2 - fullLinksWidth / 2;
  for (const link of resumeData.links) {
    const labelW = doc.getTextWidth(link.label);
    doc.link(linkStartX, y - 3, labelW, 4, { url: link.url });
    linkStartX += labelW + doc.getTextWidth("  |  ");
  }

  y += 6;

  // ========== SKILLS ==========
  y = drawSectionHeader(doc, "SKILLS", y);

  for (const skill of resumeData.skills) {
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.black);
    doc.setFont("helvetica", "normal");
    
    // Draw filled circle bullet
    doc.setFillColor(...COLORS.black);
    doc.circle(MARGIN_LEFT + 0.5, y - 1, 0.6, "F");

    doc.setFont("helvetica", "bold");
    const catText = `${skill.category}: `;
    doc.text(catText, MARGIN_LEFT + 3, y);
    const catW = doc.getTextWidth(catText);

    doc.setFont("helvetica", "normal");
    doc.text(skill.items, MARGIN_LEFT + 3 + catW, y);
    y += LINE_HEIGHT + 0.4;
  }

  y += 2;

  // ========== EXPERIENCES ==========
  y = drawSectionHeader(doc, "EXPERIENCES", y);

  for (const exp of resumeData.experiences) {
    // Title row: Job Title (Left), Company (Center), Duration (Right) - All Bold
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.black);
    
    doc.text(exp.title, MARGIN_LEFT, y);
    doc.text(exp.company, PAGE_W / 2, y, { align: "center" });
    doc.text(exp.duration, PAGE_W - MARGIN_RIGHT, y, { align: "right" });
    y += 5;

    // Bullets
    for (const bullet of exp.bullets) {
      y = drawBullet(doc, bullet, y);
    }
    y += 2;
  }

  // ========== PROJECTS ==========
  y = drawSectionHeader(doc, "PROJECTS", y);

  for (const proj of resumeData.projects) {
    // Project name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.black);
    const projNameText = `${proj.name}`;
    const nameW = doc.getTextWidth(projNameText);
    doc.text(projNameText, MARGIN_LEFT, y);

    // Dynamic link (protocol removed for display)
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.accent); // Project link remains in accent color
    const displayUrl = proj.link.replace(/^https?:\/\//, "");
    const linkDisplay = `  |  ${displayUrl}`;
    doc.text(linkDisplay, MARGIN_LEFT + nameW, y);
    // Add clickable link using the full URL
    const linkLabelW = doc.getTextWidth(linkDisplay);
    doc.link(MARGIN_LEFT + nameW, y - 3, linkLabelW, 4, { url: proj.link });

    y += 5;

    // Bullets
    for (const bullet of proj.bullets) {
      y = drawBullet(doc, bullet, y);
    }

    // Tech stack
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.black);
    doc.setFont("helvetica", "normal");
    
    // Draw filled circle bullet
    doc.setFillColor(...COLORS.black);
    doc.circle(MARGIN_LEFT + 0.5, y - 1, 0.6, "F");
    doc.setFont("helvetica", "bold");
    const techLabel = "Tech: ";
    doc.text(techLabel, MARGIN_LEFT + 3, y);
    const techLabelW = doc.getTextWidth(techLabel);
    doc.setFont("helvetica", "normal");
    doc.text(proj.tech, MARGIN_LEFT + 3 + techLabelW, y);
    y += LINE_HEIGHT + 2.5;
  }

  // ========== ACHIEVEMENTS ==========
  y = drawSectionHeader(doc, "ACHIEVEMENTS", y);

  for (const ach of resumeData.achievements) {
    y = drawBullet(doc, ach, y);
  }

  y += 2;

  // ========== EDUCATION ==========
  y = drawSectionHeader(doc, "EDUCATION", y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.black);
  doc.text(resumeData.education.degree, MARGIN_LEFT, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.black);
  doc.text(resumeData.education.duration, PAGE_W - MARGIN_RIGHT, y, {
    align: "right",
  });
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.black);
  doc.text(resumeData.education.university, MARGIN_LEFT, y);

  // ========== SAVE ==========
  doc.save("Resume_Ramprosad_Gharami.pdf");
}
