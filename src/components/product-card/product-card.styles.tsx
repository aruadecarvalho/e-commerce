import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  button {
    width: 80%;
    position: absolute;
    top: 24.5rem;
    opacity: 0.5;
    visibility: hidden;
    transition: all 0.15s;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      visibility: visible;
      opacity: 0.95;
      display: flex;
      top: 23rem;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
`;

export const NameSpan = styled.span`
  width: 85%;
  margin-bottom: 1.6rem;
`;

export const PriceSpan = styled.span`
  width: 15%;
`;
