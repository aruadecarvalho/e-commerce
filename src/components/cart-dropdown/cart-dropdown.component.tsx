import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";

import { CartDropdownAnimation } from "../animations/animations.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item.component";

import Button from "../button/button.component";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };

  return (
    <CartDropdownAnimation>
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
      </CartDropdownContainer>
    </CartDropdownAnimation>
  );
};

export default CartDropdown;
