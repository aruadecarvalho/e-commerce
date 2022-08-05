import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50}
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
        <div className="products-container">
          {products.map((product, id) => (
            <SwiperSlide key={id}>
              <ProductCard key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Shop;
