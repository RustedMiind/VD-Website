import ImageCard from "image-card/ImageCard";
import { Design } from "types/Design/Design";

function DesignCard({ design }: { design: Design }) {
  let priceStartFrom: string | number | undefined;
  if (design.price_before) {
    if (design.price_after) {
      priceStartFrom = design.price_after;
    } else {
      priceStartFrom = design.price_before;
    }
  }

  return (
    <ImageCard
      title={design.name || ""}
      description={design.desc}
      price={`${priceStartFrom ? priceStartFrom + " ر.س." : ""}`}
      image={design.mainImage && design.mainImage[0]?.original_url}
      path={design.id?.toString()}
    />
  );
}

export default DesignCard;
