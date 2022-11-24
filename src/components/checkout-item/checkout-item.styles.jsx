import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  max-height: 15rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;
  @media (max-width: 50em) {
    font-size: 1.6rem;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 1.5rem;
  img {
    aspect-ratio: 1;
    max-width: 12rem;
  }
  @media (max-width: 50em) {
    img {
      width: 5rem;
    }
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;
`;

export const DecrementIncrementButton = styled.div`
  cursor: pointer;
  font-size: 2.6rem;
  font-weight: 500;
  @media (max-width: 50em) {
    font-size: 2rem;
  }
`;

export const Value = styled.span`
  margin: 0 1.5rem;
`;

export const RemoveButton = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
  font-weight: bold;
`;
