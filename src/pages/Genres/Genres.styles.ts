import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const GenresSelect = styled.select<DefaultStyleProps>`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  border: none;

  margin-top: 24px;

  @media (${device.sm}) {
    display: none;
  }
`;

export const GenreItemsContainer = styled.div<DefaultStyleProps>`
  margin-top: 180px;
  @media (${device.sm}) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const GenrePageList = styled.ul<DefaultStyleProps>`
  display: none;
  @media (${device.sm}) {
    display: block;
    padding: 0 0 0 40px;
    list-style: none;
  }
`;

export const GenreLink = styled.li<DefaultStyleProps>`
  font-size: 18px;
  margin: 8px 0;
  letter-spacing: 2px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.grey1};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    transform: scale(1.01);
  }
`;
