import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

function ShowMoreButton({ to }: { to?: string }) {
  return (
    <NavLink to={to || ""} type="button" className="icon-btn show-more-button">
      <div>عرض ملف تعريف التصميم</div>
      <ArrowLeftCircleFill />
    </NavLink>
  );
}

export default ShowMoreButton;
