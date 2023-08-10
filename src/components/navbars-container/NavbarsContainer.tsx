import "./navbars-container.scss";
import Navbar from "components/navbar/Navbar";
import TopNavbar from "components/top-navbar/TopNavbar";
import { useEffect, useState } from "react";

function NavbarContainers() {
  const [navClass, setNavClass] = useState<NavClassesType>("");
  useEffect(() => {
    window.onscroll = topNavbarHandler;
    // return document.body.removeEventListener("scroll", topNavbarHandler);
  }, []);
  return (
    <div
      className={"navbars-container " + navClass}
      onClick={() => {
        setNavClass("hide-top");
      }}
    >
      <TopNavbar />
      <Navbar />
    </div>
  );
  function topNavbarHandler() {
    const BREAK_POINT = 100;
    const element = window;
    const scrollTop = element.scrollY;
    console.log("ScrollTop :", scrollTop);
    if (scrollTop > BREAK_POINT) {
      setNavClass("hide-top");
    } else {
      setNavClass("");
    }
  }
}

type NavClassesType = "" | "hide-top";
export default NavbarContainers;
