import React, { FC } from "react";
import "./Modal.scss";
import FormCotacao from "../FormCotacao/FormCotacao";

interface ModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleCloseModal = () => {
    onClose(!isOpen);
  };

  return (
    <div className="Modal" data-testid="Modal">
      <div className={isOpen ? "modal" : "hidden"}>
        {isOpen && (
          <>
            <button className={"botttonClose"} onClick={handleCloseModal}>
              Minimizar
            </button>

            <FormCotacao />
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
