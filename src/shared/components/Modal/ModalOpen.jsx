import React, { useEffect } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  box-shadow: 0px 4px 47px 0px rgba(18, 20, 23, 0.08);
  border-radius: 15px;
  background: #fff;
  z-index: 100;
  padding: 12px 24px;
  position: absolute;
  min-width: 140px;

  height: 70px;
  top: 0;
  right: 0;
`;

const ModalOpen = ({ closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleKeydown = ({ code }) => {
    if (code === "Escape") {
      closeModal();
    }
  };

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      closeModal();
    }
  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalOpen;
