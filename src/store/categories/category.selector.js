import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.category;

const selectCategory = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.category
);

export const selectCategoriesMap = createSelector(
  [selectCategory],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
