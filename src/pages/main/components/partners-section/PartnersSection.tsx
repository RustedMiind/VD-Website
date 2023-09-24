import "./partners-sections.scss";
import { useSelector } from "react-redux";
import { MainStateType } from "redux/reducers/mainSlice";
import IconsSlider from "components/icons-slider/IconsSlider";
import ForceRerender from "components/force-rerender/ForceRerender";

function PartnersSection() {
  const { main } = useSelector((state: { main: MainStateType }) => state);
  return (
    <div className="partners-section">
      <div className="tight-section">
        {typeof main === "object" &&
          main.icons &&
          main.icons.type &&
          main.icons.icons &&
          main.icons.icons.length && (
            <ForceRerender condition={main.icons}>
              <IconsSlider
                icons={main.icons.icons.map((icon) => icon.logo)}
                title={main.icons.type}
              />
            </ForceRerender>
          )}
      </div>
    </div>
  );
}

export default PartnersSection;
