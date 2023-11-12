import React, { FC, useEffect, useRef } from "react";
import "./ModalCars.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { listCars } from "../../config/listaCars";
import CarItem from "../CarItem/CarItem";

interface ModalCarsProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCars: FC<ModalCarsProps> = ({ isOpen, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="ModalCars" data-testid="ModalCars" ref={ref}>
      <div className={isOpen ? "modal" : "hidden"}>
        {isOpen && (
          <div className="container">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {listCars?.map((car: any, key: number) => (
                <SwiperSlide key={key}>
                  <CarItem
                    car={car}
                    handleOpenModal={() => {}}
                    showButtons={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCars;
