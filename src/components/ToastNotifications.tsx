import { useState, type ReactNode, type CSSProperties } from "react";
import { createPortal } from "react-dom";

type NotificationPortalProps = {
  children: ReactNode;
};

const notificaciónStyle: CSSProperties = {
  padding: "1em",
  borderRadius: "10px",
  border: "2px solid white",
  position: "absolute",
  right: "30px",
  bottom: "30px",
  background: "black",
  color: "white",
  transition: "opacity 0.5s",
  opacity: 1,
};

export function Notification() {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState(false);

  const onShowNotification = () => {
    setShowNotification(true);
    setFadeOut(false);
    setTimeout(() => setFadeOut(true), 2500);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <>
      <button onClick={onShowNotification}>Mostrar Notificación</button>

      {showNotification && (
        <NotificationPortal>
          <div style={{ ...notificaciónStyle, opacity: fadeOut ? 0 : 1 }}>
            <h3 style={{ margin: "0" }}>Notificación</h3>
            <p style={{ margin: "0" }}>Contenido de la notificación</p>
          </div>
        </NotificationPortal>
      )}
    </>
  );
}

function NotificationPortal({ children }: NotificationPortalProps) {
  return createPortal(
    <div className="notifications">{children}</div>,
    document.getElementById("notifications")!
  );
}
