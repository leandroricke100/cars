import React, { FC, useState } from "react";
import "./HeaderDesktop.scss";
import Logo360 from "../../../assets/icons/360.svg";
import LogoWhatsapp from "../../../assets/icons/Icon-whatsapp.svg";
import LogoBmw from "../../../assets/logo/logo-bmw-rio.svg";
import LogoTelefone from "../../../assets/icons/telefone.svg";
import ModalCars from "../../ModalCars/ModalCars";
import { useStyle } from "../../../providers/StyleProvider";
import HeaderFixed from "../../HeaderFixed/HeaderFixed";

interface HeaderDesktopProps {
  handleOpenModal: () => void;
}

const HeaderDesktop: FC<HeaderDesktopProps> = ({ handleOpenModal }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { scrollPosition } = useStyle();

  const handleOpenModalCars = () => {
    setModalOpen(true);
  };

  return (
    <>
      {scrollPosition === 0 ? (
        <>
          <div className="HeaderDesktop" data-testid="HeaderDesktop">
            <div className="itens-header">
              {" "}
              <div className="container-button">
                <button>
                  <img src={LogoTelefone} alt="logo 360 graus" />
                  (21) 2042-4442
                </button>
                <button>
                  <img src={Logo360} alt="logo 360 graus" />
                  TOUR VIRTUAL
                </button>
                <button className="button-whatsapp">
                  <img src={LogoWhatsapp} alt="logo 360 graus" />
                  WHATSAPP
                </button>
              </div>
              <div className="itens-modal">
                <button onClick={handleOpenModalCars}>1</button>
                <button onClick={handleOpenModalCars}>2</button>
                <button onClick={handleOpenModalCars}>3</button>
                <button onClick={handleOpenModalCars}>4</button>
                <button onClick={handleOpenModalCars}>5</button>
                <button onClick={handleOpenModalCars}>6</button>
                <button onClick={handleOpenModalCars}>7</button>
                <button onClick={handleOpenModalCars}>8</button>
                <button onClick={handleOpenModalCars}>X</button>
                <button onClick={handleOpenModalCars}>link</button>
                <button onClick={handleOpenModalCars}>M</button>
                <button onClick={handleOpenModalCars}>i</button>
                <button onClick={handleOpenModalCars}>Plug-in-Hybrid</button>
              </div>
            </div>
            <img src={LogoBmw} alt="logo bmw" />
          </div>
          <ModalCars isOpen={modalOpen} onClose={setModalOpen} />
        </>
      ) : (
        <HeaderFixed handleOpenModal={() => handleOpenModal} />
      )}
    </>
  );
};

export default HeaderDesktop;
