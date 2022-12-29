import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CategoryBody,
  CategoryContainer,
  CategoryTitle,
} from "./category.styles.jsx";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { ComponentAnimation } from "../../components/animations/animations.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector.js";
const Category = () => {
  const { category } = useParams();
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <ComponentAnimation>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </ComponentAnimation>
  );
};

export default Category;
