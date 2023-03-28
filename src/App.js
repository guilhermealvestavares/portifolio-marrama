import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, FeedIfood, DiscoveryHome } from "./pages";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portifolio-marrama/" element={<DiscoveryHome />} />
        </Routes>
      </BrowserRouter>

      <Footer email="rafaelmarrama@gmail.com" />
    </>
  );
}

export default App;
