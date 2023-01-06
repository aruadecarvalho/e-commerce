import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import {
  ProductCardContainer,
  Footer,
  NameSpan,
  PriceSpan,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";

type ProductCartProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCartProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{`$${price}`}</PriceSpan>
      </Footer>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
