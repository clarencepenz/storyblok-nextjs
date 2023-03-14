import { Container } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Container maxW="1440px">
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
