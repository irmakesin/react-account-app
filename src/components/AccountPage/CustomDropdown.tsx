import Image from "next/image";
import * as React from "react";
import { IDropdownOption } from "../../types/IDropdownOption";
import {
  DropdownContainer,
  DropdownIcon,
  DropdownInput,
  DropdownInputContainer,
  DropdownLabel,
  DropdownOption,
  DropdownOptionsContainer,
} from "./AccountPage.styled";

interface CustomDropdownProps {
  readonly onChange: (value: string) => void;
  readonly value: string;
  readonly label: string;
  readonly options: IDropdownOption[];
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  onChange,
  value,
  label,
  options,
}) => {
  const [open, setOpen] = React.useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleSelect = (value: string) => {
    onChange(value);
    setOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownInputContainer>
        <DropdownInput
          id={label}
          value={options.find((x) => x.value == value)?.label}
          type="button"
          onClick={toggleDropdown}
        />
        <DropdownLabel htmlFor={label}>{label}</DropdownLabel>
        <DropdownIcon
          style={{
            transform: open ? "rotate(180deg)" : "",
          }}
        >
          <Image
            src={"/BottomArrowIcon.svg"}
            layout="fill"
            alt="dropdown icon"
          />
        </DropdownIcon>
      </DropdownInputContainer>
      {open && (
        <DropdownOptionsContainer>
          {options.map((option) => (
            <DropdownOption
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </DropdownOption>
          ))}
        </DropdownOptionsContainer>
      )}
    </DropdownContainer>
  );
};
