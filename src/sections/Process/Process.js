import {
  Wrapper,
  DesignProcessWrapper,
  ImagesWrapper,
  Title,
  ListItem,
  List,
  Image,
  ListItemWithDot,
  ProblemsWrapper,
  OpportunitiesWrapper,
} from "./Process.style";

export const Process = () => (
  <>
    <Wrapper>
      <DesignProcessWrapper>
        <Title>Design Process</Title>
        <List>
          <ListItem>
            1. <b>Kickoff</b> - Entrevista com stakeholders.
          </ListItem>
          <ListItem>
            2. <b>Desk Research</b> - Análise sobre dados quantitativos,
            pesquisas qualitativas.
          </ListItem>
          <ListItem>
            3. <b>Audit</b> - Análise competitiva, benchmark.
          </ListItem>
          <ListItem>
            4. <b>Definição</b> - Primeiro entregável; análises, problemas e
            soluções.
          </ListItem>

          <ListItem>
            5. <b>Wireframe</b> - Esboços, fluxogramas, mapas e protótipos.
          </ListItem>
        </List>
      </DesignProcessWrapper>
      <ImagesWrapper>
        <Image src="https://placeimg.com/384/450/any/grayscale" />
        <Image src="https://placeimg.com/384/450/any/grayscale" />
      </ImagesWrapper>
    </Wrapper>
    <Wrapper alignItems="flex-start">
      <ProblemsWrapper>
        <Title>Problemas</Title>
        <List>
          <li>
            <ListItemWithDot>
              Atualmente os usuários que se cadastram e começam a utilizar o app
              do iFood, não recebem nenhum tipo de direcionamento.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Não temos um canal para direcionar o usuário para os produtos e/ou
              serviços que desejamos ofertar.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Falta de clareza nas informações de clube ifood.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Comunicação excessiva de Clube iFood traz sensação de desespero e
              acaba sendo ignorada pelos usuários.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Pela falta de um local fixo e de fácil acesso na home, é difícil
              encontrar informações do clube.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Os usuários entendem que os pacotes de clube não são
              personalizados para o seu consumo.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Usuários que adquirem clube continuam vendo ofertas de clube na
              home.
            </ListItemWithDot>
          </li>
        </List>
      </ProblemsWrapper>
      <OpportunitiesWrapper>
        <Title>Oportunidades</Title>
        <List>
          <li>
            <ListItemWithDot>
              Clube iFood retém clientes e faz com que os usuários ganhem mais
              frequencia.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Os usuários que gastaram mais de 80% dos cupons adquiridos tendem
              mais a voltar a comprar o clube.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Os usuários costumam adquirir clube quando estão próximos de
              finalizar uma compra no app.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Nas entrevista houve um relato de compra acidental que fez o
              usuário conhecer o clube e se tornar recorrente.
            </ListItemWithDot>
          </li>
          <li>
            <ListItemWithDot>
              Nas entrevistas houve um relato de usuário heavy user "Quem não
              usa clube está perdendo dinheiro".
            </ListItemWithDot>
          </li>
        </List>
      </OpportunitiesWrapper>
    </Wrapper>
  </>
);
