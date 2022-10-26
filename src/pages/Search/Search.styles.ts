import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

// export const SearchContainer = styled.div<DefaultStyleProps>`
// 	margin-top: 100px;
// 	@media (${device.sm}) {
// 		position: fixed;
// 		top: 0;
// 		left: 0;
// 		bottom: 0;
// 		width: 300px;
// 	}
// `;

export const SearchRadios = styled.div<DefaultStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 5%;
  max-width: 70%;
  margin: 0 auto;

  @media (${device.sm}) {
    max-width: 100%;
  }
`;

export const SearchRadio = styled.div<DefaultStyleProps>`
  display: flex;
  margin-right: 8px;

  input {
    appearance: none;
    &:checked {
      & + label {
        color: ${(props) => props.theme.colors.black};
        background: ${(props) => props.theme.colors.white};
      }
    }
  }

  input + label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 100px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 99px; // just a high number to create pill effect
    cursor: pointer;
    transition: color 0.15s ease-in;
    color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.white};
  }
`;

export const SearchInput = styled.div<DefaultStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  label {
    font-size: 14px;
  }

  input {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.black};
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
    border-top: none;
    border-right: none;
    border-left: none;
    margin-left: 8px;
    font-size: 14px;
    &::placeholder {
      color: ${(props) => props.theme.colors.grey3};
    }
  }
`;
