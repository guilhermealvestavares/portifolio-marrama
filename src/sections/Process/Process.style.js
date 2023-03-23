import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => props.alignItems} || center;
  width: 100%;
  margin-bottom: 84px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-transform: uppercase;
  color: #1099ff;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  padding-left: 30px;
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  list-style: none;
  color: #767676;
`;

export const ListItemWithDot = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #767676;
  margin-bottom: 25px;
`;

export const DesignProcessWrapper = styled.div`
  width: 50%;
`;

export const ProblemsWrapper = styled.div`
  width: 40%;
`;

export const OpportunitiesWrapper = styled.div`
  width: 45%;
`;

export const ImagesWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 295px;
  height: 210px;
  border-radius: 20px;
`;
