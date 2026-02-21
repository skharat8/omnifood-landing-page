"use client";
import React from "react";
import type { PropsWithChildren } from "react";

function VisuallyHidden({ children, ...rest }: PropsWithChildren) {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (import.meta.env.NODE_ENV !== "production") {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "Alt") {
          setForceShow(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <span className="visually-hidden" {...rest}>
      {children}
    </span>
  );
}

export default VisuallyHidden;
