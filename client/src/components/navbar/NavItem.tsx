import React, { useState } from "react";
import chevronDownIcon from "../../assets/icons/chevron-down.svg";
const NavItem = (props: any) => {
  const [open, setOpen] = useState(false);
  const { name, children } = props;

  return (
    <li className="nav__item">
      <p
        className="nav__button"
        onClick={() => setOpen(!open)}
        // onMouseOut={() => setOpen(!open)}
      >
        {name}
      </p>
      <img src={chevronDownIcon} alt="chevron down" />
      {open && children}
    </li>
  );
};

export default NavItem;
