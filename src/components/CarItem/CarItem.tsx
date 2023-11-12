import React, { FC } from "react";
import "./CarItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface CarItemProps {
  handleOpenModal: () => void;
  car: any;
  showButtons: boolean;
}

const CarItem: FC<CarItemProps> = ({ handleOpenModal, car, showButtons }) => {
  return (
    <div className="CarItem" data-testid="CarItem">
      <div key={car.id} className="itens-cars">
        <div className="images">
          <img src={car.img} alt={`foto da ${car.name}`} />
        </div>
        <p>{car.name}</p>
        {showButtons && (
          <div className="buttons">
            <button className="buttonLeft" onClick={handleOpenModal}>
              Cotação
            </button>
            <button className="buttonRight">Ligar</button>
          </div>
        )}
        <span className="compartilhar">
          Compartilhe:
          <a href="">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          {/* <img src={Facebook} alt="logo do facebook" /> */}
          <a href="">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          {/* <img src={Whatsapp} alt="logo do whatsapp" /> */}
        </span>
      </div>
    </div>
  );
};

export default CarItem;
