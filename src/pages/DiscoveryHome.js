import React from "react";
import Container from "react-bootstrap/Container";
import { ProjectInfos } from "../sections/ProjectInfos";
import { Intro } from "../sections/Intro";
import { Process } from "../sections/Process";
import { UserProfile } from "../sections/UserProfile";
import { Insights } from "../sections/Insights";

export const DiscoveryHome = () => {
  return (
    <>
      <Container>
        <ProjectInfos
          paper={"Product Design / Research"}
          time={"Jun - Ago/2022"}
          roles={["Desk Research", "UX Research", "UX Design", "Wireframing"]}
        />
        <Intro
          intro={
            "O Clube na home foi um desafio de produto com o intuito de criar gatilhos estruturados durante toda jornada do usuário no app do ifood. A intenção deste modelo de exploração é fazer com que a pessoa usuária possa consumir e conhecer todos produtos durante sua jornada no app."
          }
          objectives={
            "Ter mais controle e influencia na jornada dos nossos usuários iFood. Provocando gatilhos de forma estruturada e intencional, para que experimentem todos os nossos produtos, verticais e ofertas. Aumentando sua frequência de compra."
          }
        />
        <Process />
      </Container>
      <UserProfile />
      <Container>
        <Insights
          information="Oferta de clube"
          images={[
            { src: "https://placeimg.com/258/557/any" },
            { src: "https://placeimg.com/258/557/any" },
            { src: "https://placeimg.com/258/557/any" },
          ]}
        />
        <Insights
          information="Clube Ativo"
          images={[
            { src: "https://placeimg.com/258/557/any" },
            { src: "https://placeimg.com/258/557/any" },
            { src: "https://placeimg.com/258/557/any" },
          ]}
        />
        <Insights
          information="Renovar Clube"
          images={[
            { src: "https://placeimg.com/258/557/any" },
            { src: "https://placeimg.com/258/557/any" },
            { src: "https://placeimg.com/258/557/any" },
          ]}
        />
      </Container>
    </>
  );
};
