import GlobalStyles from "./assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import myTheme from "./assets/styles/DefaultTheme";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import { Genres, Home, Media, Movies, Search, Series } from "./pages";

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
          <Route path="/tv" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genres/:type/:genre" element={<Genres />} />
          <Route path="/:type/:id" element={<Media />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
