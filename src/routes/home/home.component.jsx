import Directory from "../../components/directory/directory.component";
import React from "react";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://i.ibb.co/b5Lmpfj/DALL-E-2022-07-29-19-27-03-picture-of-a-cap-with-a-solid-light-color-background.png",
    },
    {
      id: 2,
      title: "Clothes",
      imageUrl:
        "https://i.ibb.co/025mWhr/DALL-E-2022-07-29-19-20-06-image-of-a-t-shirt-with-a-solid-light-color-background.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/pfH9gRF/shoes.webp",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
