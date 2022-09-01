import GlobalStyles from "./assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import myTheme from "./assets/styles/DefaultTheme";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<GlobalStyles />
			<header>
				<Nav />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/series" element={<Series />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</main>
		</ThemeProvider>
	);
}

export default App;
