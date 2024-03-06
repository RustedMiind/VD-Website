import AspectRatio from "components/AspectRatio";
import { ImgHTMLAttributes } from "react";

function AspectRatioImageV2(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <AspectRatio ratio={1}>
      <img
        alt="Aspect Ratio"
        {...props}
        style={{ width: "100%", height: "100%", objectFit: "cover", ...props }}
      />
    </AspectRatio>
  );
}

export default AspectRatioImageV2;
