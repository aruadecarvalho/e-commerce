import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: calc(100vw - 64rem);
  justify-content: space-between;
  margin: 3rem auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 9.6rem;
  }
`;
