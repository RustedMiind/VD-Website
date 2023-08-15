import ServicePlaceholderCard from "./ServicePlaceholderCard";
import "./service-placeholder.scss";
function ServicePlaceHolder() {
  return (
    <div className="services-placeholder">
      <ServicePlaceholderCard />
      <ServicePlaceholderCard />
      <ServicePlaceholderCard />
      <ServicePlaceholderCard />
      <ServicePlaceholderCard />
    </div>
  );
}

export default ServicePlaceHolder;
