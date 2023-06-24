import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Wrapper>
      <Header />
      <Wrapper>{children}</Wrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 32px;
`;
