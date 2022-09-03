import styled, { DefaultTheme } from "styled-components";
import { device } from "../assets/styles/breakpoints";

interface Props {
	theme: DefaultTheme;
}

export const StyledNav = styled.nav<Props>`
	background: linear-gradient(${(props) => props.theme.colors.black}, transparent);
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 10;
	ul {
		display: flex;
		flex-direction: row;
		max-width: 500px;
		margin: 0 auto;
		padding: 20px;
		align-items: center;
		justify-content: space-between;

		@media (${device.sm}) {
			padding: 40px;
		}

		li {
			font-weight: ${(props) => props.theme.fontWeights.regular};
			font-size: 16px;
			position: relative;
			&::after {
				position: absolute;
				content: "";
				width: 0;
				height: 1px;
				bottom: -2px;
				left: 50%;
				background: ${(props) => props.theme.colors.white};
				transition: all 0.2s ease-in;
			}
			a {
				color: ${(props) => props.theme.colors.grey1};
			}

			&:hover {
				&::after {
					width: 100%;
					left: 0;
				}
			}

			&.current {
				a {
					color: ${(props) => props.theme.colors.white};
				}
				&::after {
					width: 100%;
					left: 0;
				}
			}
		}
	}
`;
