import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { ComponentAnimation } from "../../components/animations/animations.component";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <ComponentAnimation key={title}>
              <CategoryPreview title={title} products={products} />
            </ComponentAnimation>
          );
        })}
    </Fragment>
  );
};

export default CategoriesPreview;
