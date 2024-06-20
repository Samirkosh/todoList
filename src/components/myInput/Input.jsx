import React from "react";
import "./Input.css";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  id,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      className={className}
    />
  );
};
