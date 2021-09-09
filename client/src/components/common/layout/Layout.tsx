import React from "react";
import "./layout.css";
import Navbar from "../../navbar/Navbar";
import { Container } from "react-bootstrap";

interface Props {}
const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Navbar />
      <Container className="app-container">
        <main className="content">{children}</main>
      </Container>
    </>
  );
};

export default Layout;
