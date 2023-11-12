import { FC, useState } from "react";
import "./Homepage.scss";
import Cars from "../../components/Homepage/Cars/Cars";
import Home from "../../components/Homepage/Home/Home";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";

interface HomepageProps {}

const Homepage: FC<HomepageProps> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="Homepage" data-testid="Homepage">
      <Header handleOpenModal={handleOpenModal} />

      <Home />

      <Cars handleOpenModal={handleOpenModal} />

      <Modal isOpen={modalOpen} onClose={setModalOpen} />

      <Footer />
    </div>
  );
};

export default Homepage;
