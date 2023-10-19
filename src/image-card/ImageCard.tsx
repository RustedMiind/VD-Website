import AspectRatioImage from "components/aspect-ratio-image/AspectRatioImage";
import ShowMoreButton from "./ShowMoreButton";
import "./image-card.scss";

function ImageCard() {
  return (
    <div className="image-card">
      {/* <div className="image-container-16-9">
        <img
          src="https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg"
          alt=""
        />
      </div> */}

      <AspectRatioImage
        ratio={16 / 9}
        src="https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg"
      />
      <div className="content p-4">
        <h5>اسم البناء</h5>
        <p>هذا النص هو مثال لنص يمكن أن يستبدل في</p>
        <p className="mt-2 text-gray-400">يبدأ السعر من</p>
        <h4 className="text-third">4,000 ر.س</h4>
      </div>
      <ShowMoreButton />
    </div>
  );
}

export default ImageCard;
