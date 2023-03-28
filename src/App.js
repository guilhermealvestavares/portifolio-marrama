import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, FeedIfood, DiscoveryHome } from "./pages";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="portifolio-marrama/" element={<Homepage />} />
          <Route index element={<Homepage />} />
          <Route
            path="portifolio-marrama/cases/feed-ifood"
            element={<FeedIfood />}
          />
          <Route
            path="portifolio-marrama/cases/discovery-home"
            element={<DiscoveryHome />}
          />
        </Routes>
      </BrowserRouter>

      <Footer email="rafaelmarrama@gmail.com" />
    </>
  );
}

export default App;
