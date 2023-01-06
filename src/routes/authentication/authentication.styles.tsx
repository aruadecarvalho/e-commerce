import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: calc(100vw - 64rem);
  gap: 6.6rem;
  margin: 3rem auto;
  justify-content: center;
  @media (max-width: 70em) {
    flex-direction: column;
    align-items: center;
    gap: 6.6rem;
  }
`;
