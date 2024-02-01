import ImageCard from "image-card/ImageCard";
import { Design } from "types/Design/Design";

function DesignCard({ design }: { design: Design }) {
  return (
    <ImageCard
      title={design.name || ""}
      description={design.desc}
      image={design.mainImage && design.mainImage[0]?.original_url}
      path={design.id?.toString()}
    />
  );
}

export default DesignCard;
