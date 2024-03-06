import { Box } from "@mui/material";

function AspectRatio({ ratio = 1, children }: PropsType) {
  const pt = (1 / ratio) * 100;

  return (
    <Box
      sx={{ width: 1, pt: `${pt}%`, position: "relative", overflow: "hidden" }}
    >
      <Box
        sx={(theme) => ({
          width: 1,
          height: 1,
          top: 0,
          left: 0,
          position: "absolute",
          borderRadius: `${theme.shape.borderRadius}px`,
          overflow: "hidden",
        })}
      >
        {children}
      </Box>
    </Box>
  );
}

export default AspectRatio;

type PropsType = {
  children: React.ReactNode;
  ratio?: number;
};
