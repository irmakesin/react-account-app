import * as React from "react";
import { IMenuItem } from "../types/IMenuItem";
import { BottomBarContainer } from "./BottomBar.styled";
import { MenuItem } from "./MenuItem";

interface BottomBarProps {}

const ITEMS: IMenuItem[] = [
  {
    icon: "/ListIcon.svg",
    label: "List",
    url: "/list",
  },
  {
    icon: "/UserIcon.svg",
    label: "Account",
    url: "/account",
  },
];

export const BottomBar: React.FC<BottomBarProps> = () => {
  return (
    <BottomBarContainer>
      {ITEMS.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </BottomBarContainer>
  );
};
