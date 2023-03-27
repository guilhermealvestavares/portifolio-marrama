import { Wrapper, Title, WrapperImages, Information } from "./Insights.style";

export const Insights = ({ information, images }) => (
  <Wrapper>
    <Title>Insights</Title>
    <Information>{information}</Information>
    <WrapperImages>
      {images.map(({ src }, index) => (
        <img src={src} alt={`Item número ${index} da lista de imagens`} />
      ))}
    </WrapperImages>
  </Wrapper>
);
