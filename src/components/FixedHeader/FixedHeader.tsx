import React from "react";
import { FixedHeaderContainer, StyledFixedHeaderTitle } from "./FixedHeader.styles";

interface FixedHeaderProps {
  children: React.ReactNode;
}

export const FixedHeaderTitle: React.FC<FixedHeaderProps> = ({ children }) => {
  return <StyledFixedHeaderTitle>{children}</StyledFixedHeaderTitle>;
};

const FixedHeader: React.FC<FixedHeaderProps> = ({ children }) => {
  return <FixedHeaderContainer>{children}</FixedHeaderContainer>;
};

export default FixedHeader;
