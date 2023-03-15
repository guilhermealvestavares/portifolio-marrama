import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 106px 0 113px 0;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  color: #1099ff;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Cases = styled.div``;

export const CasesItem = styled.img`
  margin: 95px 0;

  &:nth-child(even) {
    margin-left: 80px;
  }
`;

export const CasesGrid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;

  &:after {
    content: url(./../../assets/images//icons/arroright.png);
    margin-right: 33px;
  }
`;

export const ListItemClick = styled.a`
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #000000;
  }
`;

export const EmailLabel = styled.p`
  padding: 0;
  margin: 29px 0;
  font-weight: 600;
`;
