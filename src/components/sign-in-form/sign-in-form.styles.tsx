import styled from "styled-components";
import { ReactComponent as GoogleLogoSvg } from "../../assets/googleLogo.svg";

export const SignFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  @media (max-width: 70em) {
    width: 50rem;
  }
  @media (max-width: 50em) {
    width: 30rem;
  }
`;

export const SignFormTitle = styled.h2`
  margin-top: 1rem;
  font-size: 2rem;
`;
export const SignFormSpan = styled.span`
  margin-top: 0.5rem;
  font-size: 1.4rem;
  color: #333;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoogleLogo = styled(GoogleLogoSvg)`
  position: absolute;
  width: 5rem;
  height: 5rem;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #4285f4;
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
  position: absolute;
`;
