import {
  Title,
  Text,
  Badge,
  ListItemWithImage,
  ListItemImage,
  ListWrapper,
  Wrapper,
  WrapperRoles,
} from "./Description.style";

export const DescriptionWithTitle = ({
  mainTitle,
  title,
  text,
  list,
  template,
  roles,
  maxWidth,
}) => (
  <Wrapper template={template}>
    {template === "template01" && (
      <>
        <Title> {title} </Title>
        {mainTitle && <h2>{mainTitle}</h2>}
        <Text maxWidth={maxWidth}>{text}</Text>
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
    {template === "template03" && (
      <>
        <Title> {title} </Title>
        <WrapperRoles>
          {roles?.map((item) => (
            <Badge>{item}</Badge>
          ))}
        </WrapperRoles>
      </>
    )}
  </Wrapper>
);
