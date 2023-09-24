import "./navbars-container.scss";
import Navbar from "components/navbar/Navbar";
import TopNavbar from "components/top-navbar/TopNavbar";
import { useEffect, useState } from "react";
import { ArrowUpCircleFill } from "react-bootstrap-icons";

function NavbarContainers() {
  const [navClass, setNavClass] = useState<NavClassesType>("");
  const [navClass2, setNavClass2] = useState<Nav2ClassesType>("");
  useEffect(() => {
    window.onscroll = topNavbarHandler;
    // return document.body.removeEventListener("scroll", topNavbarHandler);
  }, []);
  return (
    <div className={"navbars-container " + navClass + navClass2}>
      <TopNavbar />
      <Navbar />
      <div className="scroll-to-top" id="ScrollToTop" onClick={scrollToTop}>
        <ArrowUpCircleFill />
      </div>
    </div>
  );

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function topNavbarHandler() {
    const BREAK_POINT = 100;
    const BREAK_POINT2 = window.innerHeight;
    const element = window;
    const scrollTop = element.scrollY;
    // console.log("ScrollTop :", scrollTop);
    if (scrollTop > BREAK_POINT) {
      setNavClass("hide-top");
    } else {
      setNavClass("");
    }
    if (scrollTop > BREAK_POINT2) {
      setNavClass2(" expand-nav");
    } else {
      setNavClass2("");
    }
  }
}

type NavClassesType = "" | "hide-top";
type Nav2ClassesType = "" | " expand-nav";
export default NavbarContainers;
