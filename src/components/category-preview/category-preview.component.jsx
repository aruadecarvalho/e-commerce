import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`${title}`}>
          <span className="title">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </span>
        </Link>
      </h2>
      <div className="preview">
        <div className="swiper-container">
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
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
