import { CategoriesContainer } from "./directory.styles";
import { ComponentAnimation } from "../animations/animations.component";
import DirectoryItem from "../directory-item/directory-item.component";

export type Category = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: "Hats",
    imageUrl:
      "https://i.ibb.co/b5Lmpfj/DALL-E-2022-07-29-19-27-03-picture-of-a-cap-with-a-solid-light-color-background.png",
    route: "shop/hats",
  },

  {
    id: 2,
    title: "Clothes",
    imageUrl:
      "https://i.ibb.co/025mWhr/DALL-E-2022-07-29-19-20-06-image-of-a-t-shirt-with-a-solid-light-color-background.png",
    route: "shop/clothes",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/pfH9gRF/shoes.webp",
    route: "shop/sneakers",
  },
];

const Directory = () => {
  return (
    <ComponentAnimation>
      <CategoriesContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </CategoriesContainer>
    </ComponentAnimation>
  );
};

export default Directory;
