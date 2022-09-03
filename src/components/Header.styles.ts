import styled from "styled-components";
import { device } from "../assets/styles/breakpoints";

export const StyledHeader = styled.section`
	width: 100vw;
	height: 75vh;
	min-height: 300px;
	position: relative;

	@media (${device.sm}) {
		height: 80vh;
		min-height: 800px;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 1;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0.978) 4.4%,
			rgba(0, 0, 0, 0.925) 8.55%,
			rgba(0, 0, 0, 0.857) 12.1%,
			rgba(0, 0, 0, 0.781) 15.25%,
			rgba(0, 0, 0, 0.701) 18.15%,
			rgba(0, 0, 0, 0.62) 20.9%,

			rgba(0, 0, 0, 0.3) 50%,
			rgba(0, 0, 0, 0.62) 84.75%,
			rgba(0, 0, 0, 0.701) 87.9%,
			rgba(0, 0, 0, 0.781) 91.45%,
			rgba(0, 0, 0, 0.857) 95.6%,
			rgba(0, 0, 0, 1) 100%
		);
	}

	.background {
		position: absolute;
		z-index: -1;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export const HeaderContent = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10%;
	position: relative;
	z-index: 2;

	@media (${device.sm}) {
		margin-right: auto;
		padding: 10% 10% 5% 10%;
	}

	@media (${device.md}) {
		width: 70%;
		padding: 10%;
	}

	@media (${device.lg}) {
		width: 65%;
	}

	.title {
		font-size: 38px;
		text-transform: uppercase;
		letter-spacing: 10px;
		font-weight: ${(props) => props.theme.fontWeights.regular};
		margin-bottom: 20px;

		@media (${device.sm}) {
			font-size: 50px;
			margin-bottom: 10px;
		}

		@media (${device.md}) {
			font-size: 70px;
			margin-bottom: 30px;
		}
	}

	.info {
		span {
			display: block;
		}

		display: flex;
		width: 200px;
		justify-content: space-between;
		font-size: 14px;
		font-weight: ${(props) => props.theme.fontWeights.medium};
		@media (${device.md}) {
			font-size: 16px;
		}
	}
	.excerpt {
		display: none;

		@media (${device.sm}) {
			display: block;
			max-width: 500px;
		}
		@media (${device.md}) {
			font-size: 20px;
			max-width: 800px;
		}
	}

	.genres {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 250px;

		@media (${device.sm}) {
			width: 80%;
		}

		li {
			font-size: 14px;
			font-weight: ${(props) => props.theme.fontWeights.medium};

			margin-right: 12px;

			@media (${device.md}) {
				font-size: 16px;
			}
		}
	}
`;
