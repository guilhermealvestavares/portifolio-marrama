import React from "react";
import Container from "react-bootstrap/Container";
import { ProjectInfos } from "../sections/ProjectInfos";
import { Intro } from "../sections/Intro";
import { Process } from "../sections/Process";
import { UserProfile } from "../sections/UserProfile";
import { Insights } from "../sections/Insights";
import { Hero } from "../sections/Hero";
import mockOffers01 from "./images/mock-offers-01.png";
import mockOffers02 from "./images/mock-offers-02.png";
import mockOffers03 from "./images/mock-offers-03.png";
import mockActive01 from "./images/mock-active-01.png";
import mockActive02 from "./images/mock-active-02.png";
import mockActive03 from "./images/mock-active-03.png";
import mockRenew01 from "./images/mock-renew-01.png";
import mockRenew02 from "./images/mock-renew-02.png";
import mockRenew03 from "./images/mock-renew-03.png";
import heroClubeNaHome from "./images/hero-clube-na-home.png";

export const DiscoveryHome = () => {
  return (
    <>
      <Hero src={heroClubeNaHome} title={"Discovery → Clube na home"} />
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
            { src: mockOffers01 },
            { src: mockOffers02 },
            { src: mockOffers03 },
          ]}
        />
        <Insights
          information="Clube Ativo"
          images={[
            { src: mockActive01 },
            { src: mockActive02 },
            { src: mockActive03 },
          ]}
        />
        <Insights
          information="Renovar Clube"
          images={[
            { src: mockRenew01 },
            { src: mockRenew02 },
            { src: mockRenew03 },
          ]}
        />
      </Container>
    </>
  );
};
