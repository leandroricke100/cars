import React, { FC } from "react";
import "./HeaderFixed.scss";
import LogoBmw from "../../assets/logo/logo-bmw-rio.svg";

interface HeaderFixedProps {
  handleOpenModal: () => void;
}

const HeaderFixed: FC<HeaderFixedProps> = ({ handleOpenModal }) => {
  return (
    <div className="HeaderFixed" data-testid="HeaderFixed">
      <footer className="footer">
        <div className="img">
          <img src={LogoBmw} alt="logo bmw" />
        </div>
        <div className="button">
          <button onClick={() => handleOpenModal}>Solicitar cotação</button>
        </div>
      </footer>
    </div>
  );
};

export default HeaderFixed;
