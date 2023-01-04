import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 1.5rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 5rem;
  font-size: 1.5rem;
  padding: 0 3.6rem;
  background-color: #2d46e9;
  border: 1px solid transparent;
  color: white;
  position: relative;
  font-weight: 800;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.25s;

  &:hover {
    background-color: white;
    color: #2d46e9;
    border: 1px solid #2d46e9;
    opacity: 0.9;
    box-shadow: 2px 2px 0px 2px rgb(0, 0, 0, 0.1);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  padding: 0 2.4rem 0 5.8rem;

  &:hover {
    background-color: #0c8dfe;
    color: white;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #2d46e9;
  border: 1px solid #2d46e9;

  &:hover {
    background-color: #2d46e9;
    color: white;
    border: none;
  }
`;
