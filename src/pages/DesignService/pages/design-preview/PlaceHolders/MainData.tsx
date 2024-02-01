import { Grid, Skeleton, Typography } from "@mui/material";

function MainDataPlaceholder() {
  return (
    <>
      <Grid
        item
        xs={12}
        md={(12 * 1) / 2}
        lg={(12 * 1) / 3}
        sx={{
          pr: {
            xs: 0,
            lg: 4,
          },
        }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          <Skeleton width={200} />
          <Typography variant="body1" gutterBottom>
            <Skeleton width={250} />
            <Skeleton width={300} />
            <Skeleton width={150} />
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            <Skeleton width={175} />
          </Typography>

          <Typography variant="h5" color={"primary.main"} fontWeight={"bold"}>
            <Skeleton width={200} />
          </Typography>
          <Typography
            variant="body1"
            color={"error"}
            fontWeight={"bold"}
            sx={{ textDecoration: "line-through" }}
            gutterBottom
          >
            <Skeleton width={125} />
          </Typography>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={(12 * 1) / 2}
        lg={(12 * 2) / 3}
        sx={{
          pl: {
            xs: 0,
            lg: 4,
          },
        }}
      >
        <Skeleton variant="rounded" width={"100%"} height={350} />
      </Grid>
    </>
  );
}

export default MainDataPlaceholder;
