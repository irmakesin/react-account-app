import * as React from "react";
import { BottomBar } from "./BottomBar";
import { ContentContainer, MainLayoutContainer } from "./MainLayout.styled";

interface MainLayoutProps {
  readonly children: React.ReactNode;
}

export const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
}) => {
  return (
    <MainLayoutContainer>
      <ContentContainer>{children}</ContentContainer>
      <BottomBar />
    </MainLayoutContainer>
  );
};
