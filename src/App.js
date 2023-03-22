import "./App.css";
import { Footer } from "./components/Footer";
import Container from "react-bootstrap/Container";
import { GoalsAndSKills } from "./sections/GoalsAndSkills";
import { About } from "./sections/About";

function App() {
  return (
    <>
      <Container>
        <GoalsAndSKills />
        <About />
      </Container>
      <Footer email="rafaelmarrama@gmail.com" />
    </>
  );
}

export default App;
