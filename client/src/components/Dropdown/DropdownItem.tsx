import React from "react";
import { IRoute } from "../../routes/index";

interface IProps {
  menuItem: IRoute;
}
const DropDownItem: React.FC<IProps> = (props) => {
  const { logo, name } = props.menuItem;
  return (
    <li className="dropdown__item">
      <img src={logo} alt="logo" />
      <p>{name}</p>
    </li>
  );
};
export default DropDownItem;
