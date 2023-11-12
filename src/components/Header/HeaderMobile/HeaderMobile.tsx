import { FC } from 'react';
import './HeaderMobile.scss';
import LogoBmw from "../../../assets/logo/logo-bmw-rio.svg";
import Telefone from "../../../assets/icons/telefone.svg";

interface HeaderMobileProps {
  handleOpenModal: () => void;
}

const HeaderMobile: FC<HeaderMobileProps> = ({ handleOpenModal }) => (
  <div className="HeaderMobile" data-testid="HeaderMobile">
    <div>
      <section className="headerContent">
        <div className="headerContato">
          <img src={Telefone} alt="Ícone de telefone" />
          <p>(21) 2042-4442</p>
        </div>
        <img src={LogoBmw} alt="Logo da BMW" />
      </section>
      <button className="buttonContacao" onClick={handleOpenModal}>
        Solicite uma cotação
      </button>
    </div>
  </div>
);

export default HeaderMobile;
