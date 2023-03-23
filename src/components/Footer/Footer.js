import {
  Wrapper,
  EmailLabel,
  List,
  ListItem,
  ListItemClick,
  Cases,
  CasesItem,
  SectionTitle,
  CasesGrid,
} from "./Footer.style";

import Container from "react-bootstrap/Container";
export const Footer = () => (
  <>
    <Container>
      <Cases>
        <SectionTitle>Cases</SectionTitle>
        <CasesGrid>
          <ListItemClick href="/cases/feed-ifood">
            <CasesItem src={"https://i.imgur.com/QnAADuj.png"} />
          </ListItemClick>
          <ListItemClick href="/cases/discovery-home">
            <CasesItem src={"https://i.imgur.com/lJauTXP.png"} />
          </ListItemClick>
        </CasesGrid>
      </Cases>
    </Container>

    <Wrapper>
      <List>
        <ListItem>
          <ListItemClick
            href="https://www.linkedin.com/in/rafaelmarrama/"
            target="blank"
          >
            Linkedin
          </ListItemClick>
        </ListItem>
        <ListItem>
          <ListItemClick href="https://dribbble.com/marrama" target="blank">
            Dribble
          </ListItemClick>
        </ListItem>
        <ListItem>
          <ListItemClick
            href="https://www.linkedin.com/in/rafaelmarrama/"
            target="blank"
          >
            Resume
          </ListItemClick>
        </ListItem>
        <ListItem>
          <ListItemClick
            href="https://medium.com/@rafaelmarrama"
            target="blank"
          >
            Medium
          </ListItemClick>
        </ListItem>
      </List>
      <EmailLabel>rafaelmarrama@gmail.com</EmailLabel>
      <p>© 2023. Developed by Rafa Marrama</p>
    </Wrapper>
  </>
);
