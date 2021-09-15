import React, { useState } from "react";
import chevronDownIcon from "../../assets/icons/chevron-down.svg";
import { toggleDropdown } from "../utils";
const NavItem = (props: any) => {
  const [open, setOpen] = useState(false);
  const { name, children } = props;
  const clickHandler = (e: any) => {
    toggleDropdown(e);
  };
  return (
    <li className="nav__item">
      <p className="nav__button" onClick={clickHandler}>
        {name}
      </p>
      <img src={chevronDownIcon} alt="chevron down" />
      {children}
    </li>
  );
};

export default NavItem;
