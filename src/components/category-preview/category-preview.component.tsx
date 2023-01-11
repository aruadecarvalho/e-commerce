import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Title,
  SwiperContainer,
} from "./category-preview.styles";
import "./category-preview.slider.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { FC, Fragment } from "react";
import { CategoryItem } from "../../store/categories/category.types";

type CategoryPreviewPros = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewPros> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`${title}`}>
          <Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
        </Link>
      </h2>
      <Fragment>
        <SwiperContainer>
          <Swiper
            spaceBetween={36}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1600: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </Fragment>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
