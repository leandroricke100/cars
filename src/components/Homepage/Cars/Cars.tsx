import { FC } from "react";
import "./Cars.scss";
import { listCars } from "../../../config/listaCars";

import WhatsappButton from "../../../assets/icons/whatsapp-icon-seeklogo.com.svg";
import CarItem from "../../CarItem/CarItem";

interface CarsProps {
  handleOpenModal: () => void;
}

const Cars: FC<CarsProps> = ({ handleOpenModal }) => {
  const renderList = listCars.map((car) => (
    <CarItem car={car} handleOpenModal={handleOpenModal} showButtons />
  ));

  return (
    <div className="Cars" data-testid="Cars">
      <img
        className="logo-whatsapp"
        src={WhatsappButton}
        alt="foto whatsapp botao"
      />
      <div className="container">
        <h2>ESCOLHA SEU BMW</h2>
        <div className="wrapper">{renderList}</div>
      </div>
    </div>
  );
};

export default Cars;
