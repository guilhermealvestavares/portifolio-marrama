import {
  SimpleDescription,
  DescriptionWithTitle,
} from "../../components/Description";

import { Wrapper } from "./GoalsAndSkills.style";
export const GoalsAndSKills = () => (
  <>
    <SimpleDescription
      text={
        "Moro em São Paulo e tenho mais de 12 anos de experiência como designer. Sou especialista em mobile UX/UI, prototyping, components e design delivery. Trabalhei em algumas empresas como: Itaú, BTG Pactual e iFood. Acredito que o design, através de processos e metodologias imersivas, pode trazer a voz do cliente para as tomadas de decisão do produto, direcionando resultados para os negócios."
      }
    />
    <Wrapper>
      <DescriptionWithTitle
        template="template01"
        title={"goals"}
        text={
          "Como designer, meu principal objetivo é descobrir maneiras de conectar pessoas usuárias a um produto. Gosto de me guiar não apenas por pesquisas, mas também por dados para ajudar as empresas a criarem valor para seus clientes. Gosto também de trabalhar com diferentes perfis de negócios; stakeholders, gerentes de produto, desenvolvedores, designers e usuários."
        }
      />
      <DescriptionWithTitle
        template="template02"
        title={"skills"}
        text={
          "Como designer, meu principal objetivo é descobrir maneiras de conectar pessoas usuárias a um produto."
        }
      />
    </Wrapper>
  </>
);
