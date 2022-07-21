import Image from "next/image";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { IListItem } from "../../types/IListItem";
import {
  AddToBasketButton,
  IconWrapper,
  ImageWrapper,
  ListItemContainer,
  ListItemContentContainer,
  ListItemDescription,
  ListItemTitle,
  Row,
} from "./ListPage.styled";

interface ListItemProps {
  readonly item: IListItem;
  readonly handleAddToCard: (item: IListItem) => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  item,
  handleAddToCard,
}) => {
  const { t } = useTranslation();

  return (
    <ListItemContainer>
      <ImageWrapper>
        <Image src={item.imageUrl} layout="fill" alt="image" />
      </ImageWrapper>

      <ListItemContentContainer>
        <ListItemTitle>{item.title}</ListItemTitle>

        <ListItemDescription>{item.description}</ListItemDescription>

        <Row style={{ gap: 20 }}>
          <Row>
            <IconWrapper>
              <Image src={"/StarIcon.svg"} layout="fill" alt="image" />
            </IconWrapper>
            {item.star}
          </Row>

          <Row>
            <IconWrapper>
              <Image src={"/DistanceIcon.svg"} layout="fill" alt="image" />
            </IconWrapper>
            {item.distance}
          </Row>
        </Row>

        <AddToBasketButton onClick={() => handleAddToCard(item)}>
          <IconWrapper>
            <Image src={"/AddToBasketIcon.svg"} layout="fill" alt="image" />
          </IconWrapper>
          {t("AddToBasket")}
        </AddToBasketButton>
      </ListItemContentContainer>
    </ListItemContainer>
  );
};
