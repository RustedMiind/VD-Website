import { Typography } from "@mui/material";
import AspectRatio from "components/AspectRatio";
import { ImgHTMLAttributes } from "react";

function AspectRatioImageV2({
  overlay,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & { overlay?: string }) {
  return (
    <AspectRatio ratio={1}>
      <img
        alt="Aspect Ratio"
        {...props}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          ...props.style,
        }}
      />
      {typeof overlay === "string" && (
        <Typography
          sx={{
            width: 1,
            height: 1,
            background: "#00000099",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            pointerEvents: "none",
          }}
          variant="h5"
          fontWeight={700}
          color={"primary.contrastText"}
        >
          {overlay}
        </Typography>
      )}
    </AspectRatio>
  );
}

export default AspectRatioImageV2;
