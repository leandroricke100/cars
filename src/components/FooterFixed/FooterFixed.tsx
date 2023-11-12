import React, { FC } from "react";
import "./FooterFixed.scss";
import Telefone from "../../assets/icons/telefone-footer.svg";
import Logo360 from "../../assets/icons/360-footer.svg";

interface FooterFixedProps {}

const FooterFixed: FC<FooterFixedProps> = () => {
  return (
    <div className="FooterFixed" data-testid="FooterFixed">
      <footer className="footer-fixed">
        <div className="links">
          <button className="links-left">
            <img src={Telefone} alt="logo telefone" />
            (21) 2042-4442
          </button>
          <button className="links-right">
            <img src={Logo360} alt="logo telefone" />
            TOUR VIRTUAL
          </button>
        </div>
      </footer>
    </div>
  );
};

export default FooterFixed;
