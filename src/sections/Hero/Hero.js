import { Image, Title } from "./Hero.style";
import Container from "react-bootstrap/Container";

export const Hero = ({ src, template, title }) => (
  <>
    <Image src={src} />
    {title && (
      <Container>
        <Title>{title}</Title>
      </Container>
    )}
  </>
);
