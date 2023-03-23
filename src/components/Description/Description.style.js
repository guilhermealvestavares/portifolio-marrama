import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ template, maxWidth }) =>
    template === "template01" &&
    `
  width: 100%;
`}

  ${({ template }) =>
    template === "template02" &&
    `
  width: 100%;
  max-width:650px;
`}
`;

export const ContinuousText = styled.p`
  font-weight: 500;
  font-size: 34px;
  text-align: center;
  color: #3a3a3a;
  margin: 90px 0;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;
  color: #1099ff;
  margin-bottom: 22px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #767676;
`;

export const ListItemWithImage = styled.li`
  display: flex;
`;

export const ListWrapper = styled.ul`
  padding: 0;
  wrapper: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItemImage = styled.img`
  margin-right: 22px;
  height: 20px;
`;

export const Badge = styled.span`
  margin-bottom: 14px;
  display: block;
  text-align: center;
  padding: 7px 0px;
  border: 1px solid #e0e0e0;
  border-radius: 40px;
  width: 104px;
  font-weight: 500;
  font-size: 11px;
  margin-right: 8px;
  color: #767676;
`;

export const WrapperRoles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
