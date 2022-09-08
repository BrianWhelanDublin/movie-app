import styled from "styled-components";

import { DefaultStyleProps } from "../types/types";

export const StyledBackground = styled.img<DefaultStyleProps>`
	position: absolute;
	z-index: -1;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
