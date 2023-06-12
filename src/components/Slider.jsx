import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import SliderCard from "./SliderCard";
import "../assets/css/swiperStyle.css";
export default function Slider() {
  const products = [
    {
      id: 1,
      title: "Gilas",
      price: 20.5,
      img: "https://images.unsplash.com/photo-1528820540591-4d090b2f6e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Portagal",
      price: 10.5,
      img: "https://images.unsplash.com/photo-1645378193840-f4a90003285d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Alma",
      price: 30.0,
      img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBwbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Gilas",
      price: 20.6,
      img: "https://images.unsplash.com/photo-1528820540591-4d090b2f6e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "Portagal",
      price: 10.05,
      img: "https://images.unsplash.com/photo-1645378193840-f4a90003285d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      title: "Alma",
      price: 30.0,
      img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBwbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className="w-full pt-12">
      <Swiper
        navigation={false}
        grabCursor={true}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        className="mySwiper"
      >
        {products &&
          products.map((data, i) => (
            <SwiperSlide key={i}>
              <SliderCard key={i} data={data} index={i} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
