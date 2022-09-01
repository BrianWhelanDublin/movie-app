import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
`;

const Loading = () => {
	return (
		<StyledLoading>
			<div>Loading ....</div>
		</StyledLoading>
	);
};

export default Loading;
