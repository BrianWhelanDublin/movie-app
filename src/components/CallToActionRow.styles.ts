import styled, { DefaultTheme } from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { DefaultStyleProps } from "../types/types";

export const CallToActionRowTitle = styled.div<DefaultStyleProps>`
	padding: 5%;
	h2 {
		font-weight: ${(props) => props.theme.fontWeights.medium};
		letter-spacing: 4px;
		text-transform: uppercase;
		font-size: 20px;
		z-index: 2;
		position: relative;

		@media (${device.sm}) {
			font-size: 30px;
		}
	}
	a {
		display: none;
	}

	@media (${device.sm}) {
		padding: 5% 10%;
		display: flex;
		justify-content: space-between;
		a {
			display: flex;
			position: relative;
			z-index: 2;
		}
	}

	@media (${device.md}) {
		padding: 2.5% 10%;
	}
`;

export const StyledCallToActionRow = styled.section<DefaultStyleProps>`
	width: 100vw;
	height: 400px;
	position: relative;
	margin: 40px 0;

	@media (${device.sm}) {
		height: 620px;
	}

	@media (${device.xl}) {
		height: 750px;
	}

	&::after {
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1;
		background: ${(props) => props.theme.gradient};
	}

	.content {
		position: absolute;
		z-index: 2;
		right: 5%;
		top: 20%;
		width: 40%;
		height: 225px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		text-align: left;

		@media (${device.sm}) {
			height: 375px;
		}

		@media (${device.xl}) {
			height: 480px;
			right: 10%;
		}

		h3 {
			font-weight: ${(props) => props.theme.fontWeights.regular};
			letter-spacing: 4px;
			text-transform: uppercase;
			font-size: 22px;
			max-width: 600px;

			@media (${device.sm}) {
				font-size: 22px;
			}
			/* @media (${device.md}) {
				font-size: 36px;
			} */
			@media (${device.lg}) {
				font-size: 55px;
			}
		}

		p {
			display: none;
			max-width: 600px;
			@media (${device.sm}) {
				display: block;
				padding-right: 20px;
			}
			@media (${device.lg}) {
				font-size: 18px;
			}
		}

		&-btns {
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			text-align: left;

			.arrows {
				margin-top: 20px;

				@media (${device.sm}) {
					margin-top: 40px;
				}

				svg {
					transform: scale(1.4);
					margin-right: 20px;

					@media (${device.sm}) {
						transform: scale(2);
						margin-right: 40px;
					}
				}
			}
		}
	}
`;

export const CtaPoster = styled.div<DefaultStyleProps>`
	z-index: 2;
	position: absolute;
	top: 20%;
	left: 10%;
	overflow: hidden;
	width: 150px;

	@media (${device.sm}) {
		width: 250px;
		left: 12%;
	}

	@media (${device.md}) {
		width: 280px;
		left: 20%;
	}

	@media (${device.xl}) {
		width: 320px;
		left: 22.5%;
	}

	img {
		width: 100%;
		height: 100%;
	}
`;

export const Cta = styled.div<DefaultStyleProps>`
	position: absolute;
	z-index: 2;
	bottom: 2%;
	left: calc(50% - 60px);

	@media (${device.sm}) {
		display: none;
	}
`;

export const Dots = styled.div<DefaultStyleProps>`
	position: absolute;
	bottom: 40px;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const Dot = styled.span<DefaultStyleProps>`
	display: block;
	height: 1px;
	width: 8px;
	background: ${(props) => props.theme.colors.grey3};
	margin: 0 2px;
	@media (${device.sm}) {
		height: 2px;
		width: 15px;
	}
	&.current {
		background: ${(props) => props.theme.colors.white};
	}
`;
