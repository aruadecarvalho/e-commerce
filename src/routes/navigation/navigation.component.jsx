import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavCartLogo,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { useSelector } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import React from "react";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <NavCartLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
