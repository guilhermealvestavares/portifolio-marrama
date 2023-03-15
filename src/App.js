import "./App.css";
import { Footer } from "./components/Footer";
import Container from "react-bootstrap/Container";
import { GoalsAndSKills } from "./sections/GoalsAndSkills";

function App() {
  return (
    <>
      <Container>
        <GoalsAndSKills />
      </Container>
      <Footer email="rafaelmarrama@gmail.com" />
    </>
  );
}

export default App;
