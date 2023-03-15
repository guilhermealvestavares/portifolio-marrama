import {
  Title,
  Text,
  ListItem,
  ListItemWithImage,
  ListItemImage,
  ListWrapper,
  Wrapper,
} from "./Description.style";

export const DescriptionWithTitle = ({ title, text, list, template }) => (
  <Wrapper template={template}>
    {template === "template01" && (
      <>
        <Title> {title} </Title>
        <Text>{text}</Text>
      </>
    )}

    {template === "template02" && (
      <>
        <Title> {title} </Title>
        <ListWrapper>
          <ListItemWithImage>
            <ListItemImage src="https://picsum.photos/20" />
            <Text style={{ width: "260px" }}>{text}</Text>
          </ListItemWithImage>
          <ListItemWithImage>
            <ListItemImage src="https://picsum.photos/20" />
            <Text style={{ width: "260px" }}>{text}</Text>
          </ListItemWithImage>
          <ListItemWithImage>
            <ListItemImage src="https://picsum.photos/20" />
            <Text style={{ width: "260px" }}>{text}</Text>
          </ListItemWithImage>
          <ListItemWithImage>
            <ListItemImage src="https://picsum.photos/20" />
            <Text style={{ width: "260px" }}>{text}</Text>
          </ListItemWithImage>
        </ListWrapper>
      </>
    )}
  </Wrapper>
);
