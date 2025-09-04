import { createPortal } from "react-dom";
import { useState, type ReactNode } from "react";

type BasicModalProps = {
  children: ReactNode;
  onClose: () => void;
};

function ModalPortal({ children, onClose }: BasicModalProps) {
  return createPortal(
    <div className="modal">
      {children}
      <button onClick={onClose}>Cerrar</button>
    </div>,
    document.getElementById("modal-root")!
  );
}

export function ModalContent() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onOpen = () => setShowModal(true);
  const onClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={() => onOpen()}>Abrir modal</button>
      {showModal && (
        <ModalPortal onClose={onClose}>
          <h2>Contenido del modal</h2>
        </ModalPortal>
      )}
    </div>
  );
}
