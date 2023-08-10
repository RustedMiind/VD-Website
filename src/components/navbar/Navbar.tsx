import "./navbar.scss";
import { LockFill } from "react-bootstrap-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="right">
        <li>
          <a href=" ">نبذة عنا</a>
        </li>
        <li>
          <a href=" ">أخبارنا</a>
        </li>
        <li>
          <a href=" ">المشاريع</a>
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
