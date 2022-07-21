import styled from "styled-components";

export const ListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListItemContainer = styled.div`
  display: flex;
  height: min-content;
  width: 100%;
  border-bottom: 1px solid #f1f3f5;
  margin-bottom: 15px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  height: 75px;
  width: 75px;
  margin-right: 15px;

  border-radius: 12px;
`;

export const ListItemContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItemTitle = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.1px;

  color: #121212;

  transform: rotate(-0.11deg);
`;

export const ListItemDescription = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.2px;

  color: #64738c;

  transform: rotate(-0.11deg);
  margin: 5px 0 10px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  overflow: hidden;

  height: 15px;
  width: 15px;
  margin-right: 5px;
`;

export const AddToBasketButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  margin: 15px 0;
  padding: 0;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.9px;

  color: #e82223;
  cursor: pointer;
`;

export const CheckoutTitle = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;

  letter-spacing: 0.1px;

  color: #000000;
  margin-bottom: 10px;
`;
export const CheckoutRow = styled.div`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 29px;

  letter-spacing: 0.04em;

  color: #000000;
`;
export const GeneralTotal = styled(CheckoutRow)`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 35px;
`;
