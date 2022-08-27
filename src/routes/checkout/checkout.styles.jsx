import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  span {
    font-size: 1.4rem;
    opacity: 0.9;
  }
`;

export const Total = styled.span`
  margin-top: 3rem;
  margin-left: auto;
  font-size: 2.8rem;
`;
