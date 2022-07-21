import * as React from "react";
import { Input, InputContainer, InputLabel } from "./AccountPage.styled";

interface CustomInputProps {
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly value: string;
  readonly label: string;
  readonly type: "text" | "password";
}

export const CustomInput: React.FC<CustomInputProps> = ({
  onChange,
  value,
  label,
  type,
}) => {
  return (
    <InputContainer>
      <Input id={label} onChange={onChange} value={value} type={type} />
      <InputLabel htmlFor={label}>{label}</InputLabel>
    </InputContainer>
  );
};
