import styled from "styled-components";

export const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #fafafa;
  padding: 15px;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const MenuIconWrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 18px;
  height: 18px;
`;

export const MenuItemLabel = styled.div`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;

  color: #000000;
`;
