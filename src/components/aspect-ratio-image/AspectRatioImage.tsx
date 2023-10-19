import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

function AspectRatioImage(props: PropsType) {
  return (
    <div
      className={props.className}
      style={{
        width: "100%",
        borderRadius: props.rounded ? 10 : undefined,
        position: "relative",
        paddingBottom: `${(1 / (props.ratio || 1)) * 100}%`,
        overflow: "hidden",
      }}
    >
      <img
        {...props.imgProps}
        src={props.src}
        alt={props.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}

type PropsType = {
  imgProps?: Omit<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    "src" | "alt" | "className"
  >;
  ratio?: number;
  src: string;
  alt?: string;
  className?: string;
  rounded?: boolean;
};

export default AspectRatioImage;
