import { type IconType } from "react-icons";
import { FaUser, FaFileAlt, FaFolderOpen, FaAward, FaEnvelope } from "react-icons/fa";

export interface NavItem {
  label: string;
  href: string;
  icon: IconType;
}

export const navigationItems: NavItem[] = [
  { label: "About", href: "#about", icon: FaUser },
  { label: "Resume", href: "#resume", icon: FaFileAlt },
  { label: "Projects", href: "#projects", icon: FaFolderOpen },
  { label: "Achievements", href: "#achievements", icon: FaAward },
  { label: "Contact", href: "#contact", icon: FaEnvelope },
];
