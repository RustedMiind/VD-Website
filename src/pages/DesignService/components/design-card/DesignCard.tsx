import ImageCard from "image-card/ImageCard";
import { Design } from "types/Design/Design";

function DesignCard({ design }: { design: Design }) {
  return (
    <ImageCard
      title={design.name || ""}
      description={design.desc}
      price={`${design.price_before ? design.price_before + " ر.س." : ""}`}
      image={design.mainImage && design.mainImage[0]?.original_url}
      path={design.id?.toString()}
    />
  );
}

export default DesignCard;
