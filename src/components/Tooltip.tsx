import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type TooltipPortalProps = {
  children: ReactNode;
};

export function Tooltip() {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <>
      <TooltipPortal>
        {showTooltip && <p>Pulsa para continuar</p>}
      </TooltipPortal>

      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Continuar
      </button>
    </>
  );
}

export function TooltipPortal({ children }: TooltipPortalProps) {
  return createPortal(
    <div className="tooltip">{children}</div>,
    document.getElementById("tooltip")!
  );
}
