import styled from "styled-components";
import { DefaultStyleProps } from "../types/types";

export const StyledCard = styled.div<DefaultStyleProps>`
	/* width: 100%; */
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	border-radius: 5px;
	position: relative;
	max-width: 220px;

	img {
		width: 100%;
		border-radius: 5px;
		z-index: -1;
		height: 100%;
	}

	&:hover {
		transform: scale(1.05);
	}
`;
