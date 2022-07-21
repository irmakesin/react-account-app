import * as React from "react";
import { useTranslation } from "react-i18next";
import { IListItem } from "../../types/IListItem";
import { CheckoutRow, CheckoutTitle, GeneralTotal } from "./ListPage.styled";

interface CheckoutProps {
  readonly basket: IListItem[];
}

export const Checkout: React.FC<CheckoutProps> = ({ basket }) => {
  const { t } = useTranslation();
  const total = basket.reduce((a, b) => a + b.price, 0);
  const cargoAndTax = total * 0.18;

  return (
    <>
      <CheckoutTitle>{t("TotalOfProducts")}:</CheckoutTitle>
      <CheckoutRow>
        {t("Total")}: {total} TL
      </CheckoutRow>
      <CheckoutRow>
        {t("TaxAndCargo")}: {cargoAndTax} TL
      </CheckoutRow>
      <GeneralTotal>
        {t("GeneralTotal")}: {cargoAndTax + total} TL
      </GeneralTotal>
    </>
  );
};
