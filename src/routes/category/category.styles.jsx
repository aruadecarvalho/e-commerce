import styled from "styled-components";

export const CategoryContainer = styled.div`
  margin-top: 4.8rem;
`;

export const CategoryBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4.8rem;
  row-gap: 2.4rem;
  padding: 2.4rem 4.8rem;
  @media (max-width: 60em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 3.6rem;
  letter-spacing: 0.5px;
  font-weight: 700;
  margin-bottom: 2.4rem;
`;
