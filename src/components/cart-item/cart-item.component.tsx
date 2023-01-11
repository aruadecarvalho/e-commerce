import { FC } from "react";
import { CartItem as CartItemType } from "../../store/cart/cart.types.js";
import { CartIconContainer, ItemDetails } from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartIconContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartIconContainer>
  );
};

export default CartItem;
