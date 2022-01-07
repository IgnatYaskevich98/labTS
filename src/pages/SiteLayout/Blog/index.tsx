import { Information } from "./Information/Information";

import smallImg from "../../../static/images/smallImage.svg";
import avatar from "../../../static/images/avatar.svg";

import style from "./index.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";

export const Blog = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <h1>Pets love Mixlab!</h1>
        <div>See why we're 5 stars on Yelp, Google and Facebook:)</div>
        <Swiper
          className={style.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={1.2}
          effect={"cards"}
          initialSlide={1}
          loop={true}
        >
          <SwiperSlide className={style.styleInform}>
            <Information
              smallImage={smallImg}
              avatar={avatar}
              name={"Ignat Yaskevich"}
            />
          </SwiperSlide>
          <SwiperSlide className={style.styleInform}>
            <Information
              smallImage={smallImg}
              avatar={avatar}
              name={"Ivan Petrov"}
            />
          </SwiperSlide>
          <SwiperSlide className={style.styleInform}>
            <Information
              smallImage={smallImg}
              avatar={avatar}
              name={"Pety Ivanov"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
