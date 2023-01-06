import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartLogo = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartLogo;
