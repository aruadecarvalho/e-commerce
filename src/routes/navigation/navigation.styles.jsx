import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CartLogo } from "../../assets/cartLogo.svg";

export const NavigationContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 4.8rem;
  box-shadow: 0 1px 16px 1px rgb(0, 0, 0, 0.1);
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 2.5rem;
  display: flex;
  align-items: center;
`;

export const NavCartLogo = styled(CartLogo)`
  width: 5.4rem;
  height: 5.4rem;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3.6rem;
`;

export const NavLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 1.6rem;
  cursor: pointer;
  letter-spacing: 1.1px;
`;
