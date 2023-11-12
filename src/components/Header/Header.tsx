import { FC } from "react";
import "./Header.scss";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import { useStyle } from "../../providers/StyleProvider";

interface HeaderProps {
  handleOpenModal: () => void;
}

const Header: FC<HeaderProps> = ({ handleOpenModal }) => {
  const { windowWidth } = useStyle();

  return (
    <header className="Header" data-testid="Header">
      {windowWidth < 1024 ? (
        <HeaderMobile handleOpenModal={handleOpenModal} />
      ) : (
        <HeaderDesktop handleOpenModal={handleOpenModal} />
      )}
    </header>
  );
};

export default Header;
