import { useContext } from "react";
import "./navbar.scss";
import { LockFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { LangContext } from "contexts/LangContext";

function Navbar() {
  const { changeLang } = useContext(LangContext);
  return (
    <nav
      className="navbar"
      onClick={() => {
        changeLang("en");
      }}
    >
      <ul className="right">
        <li>
          <NavLink to="/">الرئيسية</NavLink>
        </li>
        <li>
          <a href=" ">أخبارنا</a>
        </li>
        <li>
          <NavLink to="/projects">المشاريع </NavLink>
        </li>
        <li>
          <a href=" ">خدماتنا</a>
        </li>
        <li>
          <a href=" ">التواصل</a>
        </li>
      </ul>
      <div className="left">
        <a href=" ">
          <LockFill />
          تسجيل الدخول
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
