import React from "react";
import { IRoute } from "../../routes/index";
import { NavLink } from "react-router-dom";
interface IProps {
  menuItem: IRoute;
  parentPath: String;
}
const DropDownItem: React.FC<IProps> = ({ menuItem, parentPath }) => {
  const { logo, name, path } = menuItem;
  console.log("menuItem:", menuItem);
  return (
    <li style={{ listStyle: "none" }}>
      <NavLink to={parentPath + path} className="dropdown__item">
        <img src={logo} alt="logo" />
        <p>{name}</p>
      </NavLink>
    </li>
  );
};
export default DropDownItem;
