import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { ComponentAnimation } from "../../components/animations/animations.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector.js";
import Spinner from "../../components/spinner/spinner.component";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <ComponentAnimation key={title}>
              <CategoryPreview title={title} products={products} />
            </ComponentAnimation>
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
