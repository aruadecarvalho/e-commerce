import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Title,
  SwiperContainer,
} from "./category-preview.styles.jsx";
import "./category-preview.slider.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { Fragment } from "react";
const CategoryPreview = ({ title, products }) => {
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
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              900: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
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
