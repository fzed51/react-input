import React, { FC, MouseEvent } from "react";

export interface ButtonProps {
  onClick?: (e: MouseEvent) => void;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  const hc = (e: MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };
  return <Button onClick={hc}>{children}</Button>;
};

export default Button;
