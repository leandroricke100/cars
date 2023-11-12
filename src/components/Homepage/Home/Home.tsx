import { FC } from "react";
import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";
import BannerMobile from "../../../assets/banners/mobile-banner.png";
import Banner from "../../../assets/banners/desktop-banner.jpg";
import { useStyle } from "../../../providers/StyleProvider";
import FormCotacao from "../../FormCotacao/FormCotacao";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { windowWidth } = useStyle();

  return (
    <div className="Home" data-testid="Home">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="banner">
          <div
            className="item"
            style={{
              background: `url("${
                windowWidth < 768 ? BannerMobile : Banner
              }") center center no-repeat`,
            }}
          >
            <div className="banner-desktop">
              <FormCotacao />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner">
          <div
            className="item"
            style={{
              background: `url("${
                windowWidth < 768 ? BannerMobile : Banner
              }") center center no-repeat`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide className="banner">
          <div
            className="item"
            style={{
              background: `url("${
                windowWidth < 768 ? BannerMobile : Banner
              }") center center no-repeat`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
