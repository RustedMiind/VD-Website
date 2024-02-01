import { Skeleton, Typography, Box } from "@mui/material";

function AboutPlaceholder() {
  return (
    <>
      <Box className="hello">
        <Typography variant="h6" fontWeight={700}>
          <Skeleton width={400} />
        </Typography>
        <Typography>
          <Skeleton width={270} />
          <Skeleton width={150} />
          <Skeleton width={300} />
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" fontWeight={700}>
          <Skeleton width={300} />
        </Typography>

        <Typography>
          <Skeleton width={300} />
          <Skeleton width={100} />
          <Skeleton width={200} />
        </Typography>
      </Box>
    </>
  );
}

export default AboutPlaceholder;
