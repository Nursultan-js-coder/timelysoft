import React, { useState, useEffect } from "react";
import { menus } from "../../routes";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/new-logo.svg";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";
import NavItem from "./NavItem";
import loginIcon from "../../assets/icons/login.svg";
import AppModal from "../modals/modal";
import AppForm from "../forms/Form";
import { loginUser, registerUser } from "../../store/actions/auth";
import { userLoggedOut } from "../../store/actions/auth-action-creator";
import { connect } from "react-redux";
import { AppDispatch, StoreType } from "../../store/store";
import { useDispatch } from "react-redux";

const registerFormFields = [
  {
    name: "email",
    placeholder: "enter email...",
    type: "email",
  },
  {
    name: "name",
    placeholder: "enter name...",
    type: "text",
  },
  {
    name: "password",
    placeholder: "enter password...",
    type: "text",
  },
];
const loginFormFields = [
  {
    name: "email",
    placeholder: "enter email...",
    type: "email",
  },
  {
    name: "password",
    placeholder: "enter password...",
    type: "text",
  },
];

const AppNavBar: React.FC<any> = (props) => {
  const [showModalLogin, setShowModalLogin] = useState<boolean>(false);
  const [showModalRegister, setShowModalRegister] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = props;
  useEffect(() => {
    console.log("is Authenticated: ", isAuthenticated);
  }, []);
  return (
    <div className="app__navbar">
      <Container className="app__nav">
        <NavLink to="/">
          <img src={logo} alt="logo" className="nav__logo" />
        </NavLink>
        <ul className="nav__collapse">
          {menus.map((menu, index) => {
            return (
              <NavItem name={menu.name}>
                <Dropdown menu={menu.subMenus} parentPath={menu.path} />
              </NavItem>
            );
          })}
          <Button variant="dark" style={{ height: 60 }}>
            Start 14-day free trial
          </Button>

          <div className="nav__item">
            {isAuthenticated ? (
              <>
                <img src={loginIcon} alt="login" />
                <p
                  style={{ marginLeft: 5 }}
                  onClick={() => dispatch(userLoggedOut())}
                >
                  logout
                </p>
              </>
            ) : (
              <>
                <>
                  <img src={loginIcon} alt="register" />
                  <p
                    style={{ marginLeft: 5 }}
                    onClick={(value) => setShowModalRegister(true)}
                  >
                    register
                  </p>
                  <AppModal
                    show={showModalRegister}
                    title="Register"
                    onHide={() => setShowModalRegister(false)}
                  >
                    <AppForm
                      title="Register"
                      show={showModalRegister}
                      setModalShow={setShowModalRegister}
                      action={registerUser}
                      fields={registerFormFields}
                    />
                  </AppModal>
                </>
                <>
                  <img src={loginIcon} alt="register" />
                  <p
                    style={{ marginLeft: 5 }}
                    onClick={(value) => setShowModalLogin(true)}
                  >
                    login
                  </p>
                  <AppModal
                    title="Login"
                    show={showModalLogin}
                    onHide={() => setShowModalLogin(false)}
                  >
                    <AppForm
                      title="Login"
                      show={showModalLogin}
                      setModalShow={setShowModalLogin}
                      action={loginUser}
                      fields={loginFormFields}
                    />
                  </AppModal>
                </>
              </>
            )}
          </div>
        </ul>
      </Container>
    </div>
  );
};

const mapStateToProps = (state: StoreType) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = (state: AppDispatch) => ({});

export default connect(mapStateToProps, null)(AppNavBar);
