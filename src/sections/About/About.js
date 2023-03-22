import { DescriptionWithTitle } from "../../components/Description";
import { Carrousel } from "../../components/Carrousel";
import { Wrapper, ListIcons, Icons } from "./About.style";

export const About = () => (
  <>
    <Wrapper>
      <div>
        <DescriptionWithTitle
          template="template01"
          mainTitle="Drums, Sneakers, Dogs & Product Design."
          title={"About me"}
          text={
            "Quando não estou em frente ao computador, projetando experiências, você pode me encontrar em algum parque pela cidade ou então brincando com minha adorável Kiara, uma enérgica Border Collie. No tempo livre, estou em alguma academia, andando de bicicleta nas estradas ou então, tocando bateria. Ah! Eu também gosto de colecionar sneakers :)"
          }
        />
        <ListIcons>
          <Icons>💻</Icons>
          <Icons>🥁</Icons>
          <Icons>🐶</Icons>
          <Icons>🚵‍♂️</Icons>
          <Icons>👟</Icons>
        </ListIcons>
      </div>

      <Carrousel />
    </Wrapper>
  </>
);
