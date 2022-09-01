import styled from "styled-components";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import myTheme from "./assets/styles/DefaultTheme";

export const StyledDiv = styled.div`
	/* font-family: "switzer"; */
`;

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<GlobalStyles />
			<StyledDiv>
				<h1>App</h1>
			</StyledDiv>
		</ThemeProvider>
	);
}

export default App;
