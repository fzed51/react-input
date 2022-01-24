import React, { ChangeEvent, FC } from "react";
import getId from "../utilities/getId";

export interface InputTextProps {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (v: string, e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const InputText: FC<InputTextProps> = ({
  name,
  label,
  value,
  onChange,
  className,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange && onChange(value, e);
  };
  const id = getId("input-text");
  className = "input-group input-text" + (className ? " " + className : "");
  return (
    <div className={className}>
      {label && <label className="input-text_label" htmlFor={id}></label>}
      <input
        id={id}
        className="input-text_input"
        name={name}
        value={value || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputText;
