import React from "react";
import { Button } from "react-bootstrap";
import DropdownItem from "./DropdownItem";
import { IRoute } from "../../routes/index";
import "./Dropdown.css";

interface IProps {
  children?: any;
  menu: IRoute[];
}

const Dropdown: React.FC<IProps> = ({ menu }) => {
  return (
    <ul className="dropdown">
      {menu.map((menuItem: any, index: number) => {
        return <DropdownItem key={index} menuItem={menuItem} />;
      })}
    </ul>
  );
};
export default Dropdown;
