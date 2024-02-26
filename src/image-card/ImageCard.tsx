import AspectRatioImage from "components/aspect-ratio-image/AspectRatioImage";
import ShowMoreButton from "./ShowMoreButton";
import "./image-card.scss";
import AltImage from "assets/images/card-image-placeholder.png";
import { useTranslation } from "react-i18next";

function ImageCard(props: PropsType) {
  const { t } = useTranslation();
  return (
    <div className="image-card">
      {/* <div className="image-container-16-9">
        <img
          src="https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg"
          alt=""
        />
      </div> */}

      <AspectRatioImage ratio={16 / 9} src={props.image || AltImage} />
      <div className="content p-4">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        {props.price && (
          <p className="mt-2 text-gray-400">
            {props.priceLabel || t("design.title.priceStartFrom")}
          </p>
        )}
        <h4 className="text-third">{props.price}</h4>
      </div>
      <ShowMoreButton to={props.path} />
    </div>
  );
}

type PropsType = {
  image?: string;
  title: string;
  description?: string;
  price?: string;
  path?: string;
  priceLabel?: string;
};

export default ImageCard;
