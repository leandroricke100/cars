import { FC } from "react";
import LogoAlpes from "../../assets/logo/logo-alpes.png";
import LogoBmw from "../../assets/logo/logo-bmw-rio.svg";
import "./Footer.scss";
import { useStyle } from "../../providers/StyleProvider";
import FooterFixed from "../FooterFixed/FooterFixed";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { scrollPosition } = useStyle();

  return (
    <>
      <footer className="Footer" data-testid="Footer">
        <div className="container">
          <div className="footer-itens">
            <p className="paragrafo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              elementum orci, vitae commodo nibh. In vitae convallis nisl. Morbi
              rhoncus mattis purus sed commodo. Integer rhoncus ex risus. Proin
              efficitur elit nunc, ut pulvinar massa egestas in. Fusce quis quam
              viverra, pretium quam ac, consectetur lectus.
            </p>
            <hr className="hr" />

            <div className="rodape">
              <div className="logoBmw">
                <img src={LogoBmw} alt="logo bmw" />
              </div>
              <p className="copyright">
                © Copyright © 2021 Lorem ipsum dolor sit amet.
              </p>
              <p className="alpes">
                Feito por: <img src={LogoAlpes} alt="logo alpes one" />
              </p>
            </div>
          </div>
        </div>
      </footer>
      {scrollPosition > 0 && <FooterFixed />}
    </>
  );
};

export default Footer;
