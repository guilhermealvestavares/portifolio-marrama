import Container from "react-bootstrap/Container";
import {
  Wrapper,
  Title,
  WrapperCard,
  Card,
  CardTitle,
  CardItems,
} from "./UserProfile.style";

export const UserProfile = () => (
  <Wrapper>
    <Container>
      <Title>Perfil de usuário x Jornada</Title>
      <WrapperCard>
        <Card>
          <CardTitle>Oferta</CardTitle>
          <CardItems>Usuários que nunca compraram clube</CardItems>
          <CardItems>Novos usuários</CardItems>
          <CardItems>Usuários churn</CardItems>
        </Card>
        <Card>
          <CardTitle>Ativação</CardTitle>
          <CardItems>Usuário ativo</CardItems>
          <CardItems>Super cliente</CardItems>
          <CardItems>
            Consumir todos cupons para ter mais chances de renovar
          </CardItems>
        </Card>
        <Card>
          <CardTitle>Retenção</CardTitle>
          <CardItems>
            Usuários que utilizaram todos os cupons do clube
          </CardItems>
          <CardItems>Com clube expirado</CardItems>
          <CardItems>Precisamos mantê-los motivados</CardItems>
        </Card>
      </WrapperCard>
    </Container>
  </Wrapper>
);
