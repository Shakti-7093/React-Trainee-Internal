import { NavLink } from "react-router-dom";
import Style from "./GlobalNavStyle.module.css";

const GlobalNav = () => {
  const navLinks = [
    {
      id: 1,
      to: "/",
      value: "Home",
    },
    {
      id: 2,
      to: "/dashboard",
      value: "Dashboard",
    },
    {
      id: 3,
      to: "/counter",
      value: "Counter",
    }
  ];
  return (
    <nav className={Style.container}>
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.to}
            end
            className={({ isActive }) => (isActive ? Style.active : undefined)}
          >
            {link.value}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default GlobalNav;
