import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import {
  CategoryBody,
  CategoryContainer,
  CategoryTitle,
} from "./category.styles.jsx";
import ProductCard from "../../components/product-card/product-card.component";
import { ComponentAnimation } from "../../components/animations/animations.component";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <ComponentAnimation>
      <CategoryContainer>
        <CategoryTitle>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </CategoryTitle>
        <CategoryBody>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryBody>
      </CategoryContainer>
    </ComponentAnimation>
  );
};

export default Category;
