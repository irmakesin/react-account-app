import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { IMenuItem } from "../types/IMenuItem";
import {
  MenuIconWrapper,
  MenuItemContainer,
  MenuItemLabel,
} from "./BottomBar.styled";

interface MenuItemProps {
  readonly item: IMenuItem;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(item.url);
  };
  return (
    <MenuItemContainer onClick={handleNavigate}>
      <MenuIconWrapper>
        <Image src={item.icon} layout="fill" alt="menu icon" />
      </MenuIconWrapper>

      <MenuItemLabel>{item.label}</MenuItemLabel>
    </MenuItemContainer>
  );
};
