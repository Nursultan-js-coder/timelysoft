import React from "react";
import { Button } from "react-bootstrap";
import DropdownItem from "./DropdownItem";
import { IRoute } from "../../routes/index";

interface IProps {
  children?: any;
  menu: IRoute[];
  parentPath: String;
}

const Dropdown: React.FC<IProps> = ({ menu, parentPath }) => {
  return (
    <ul className="dropdown hidden">
      {menu.map((menuItem: any, index: number) => {
        return (
          <DropdownItem
            key={index}
            menuItem={menuItem}
            parentPath={parentPath}
          />
        );
      })}
    </ul>
  );
};
export default Dropdown;
