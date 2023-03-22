import React from "react";
import Container from "react-bootstrap/Container";
import { ProjectInfos } from "../sections/ProjectInfos";
import { Intro } from "../sections/Intro";

export const FeedIfood = () => {
  return (
    <>
      <Container>
        <ProjectInfos
          paper={"Product Design / Research"}
          time={"Nov/2022 - Fev/2023"}
          roles={[
            "UX Research",
            "UI Design",
            "Handoff",
            "Visão de produto",
            "Delivery",
            "Wireframe",
            "Estratégia",
            "Visual",
          ]}
        />
        <Intro
          intro={
            "O Descobrir é uma espaço dedicado para encontrar novidades no universo do iFood de acordo com perfil do usuário. Usamos o formato de feed/timeline para poder engajar as pessoas a conhecer novas lojas, poder curtir, comentar e compartilhar conteúdos com outras pessoas."
          }
          objectives={
            "Aumentar o tempo de uso dentro do app, passando de um app utilitário para exploratório. Gerar recomendações de acordo com o  hábito de consumo do cliente, gerando sessões incrementais e promovendo a descoberta de novas lojas, ampliando a diversidade de consumo."
          }
        />
      </Container>
    </>
  );
};
