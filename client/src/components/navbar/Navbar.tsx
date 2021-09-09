import React from "react";
import { menus } from "../../routes";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/new-logo.svg";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";
import NavItem from "./NavItem";
import loginIcon from "../../assets/icons/login.svg";

const AppNavBar: React.FC = () => {
  return (
    <div className="app__navbar">
      <Container className="app__nav">
        <img src={logo} alt="logo" className="nav__logo" />
        <ul className="nav__collapse">
          {menus.map((menu, index) => {
            return (
              <NavItem name={menu.name}>
                <Dropdown menu={menu.subMenus} />
              </NavItem>
            );
          })}
          <Button variant="dark" style={{ height: 60 }}>
            Start 14-day free trial
          </Button>

          <div className="login">
            <img src={loginIcon} alt="login" />
            <span style={{ marginLeft: 5 }}>login</span>
          </div>
        </ul>
      </Container>
    </div>
  );
};
export default AppNavBar;
