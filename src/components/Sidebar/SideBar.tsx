import React from "react";
import { StyledSidebar } from "./Sidebar.styles";

interface SidebarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SidebarProps> = ({ children }) => {
  return <StyledSidebar>{children}</StyledSidebar>;
};

export default SideBar;
