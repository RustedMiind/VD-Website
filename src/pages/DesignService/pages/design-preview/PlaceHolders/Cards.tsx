import { Grid, Skeleton } from "@mui/material";
import MenuCard from "components/menu-card/MenuCard";

const randomNumber = () => Math.floor(Math.random() * (12 - 5 + 1)) + 5;
const arr1 = Array(randomNumber()).fill(undefined);
const arr2 = Array(randomNumber()).fill(undefined);
const arr3 = Array(randomNumber()).fill(undefined);

function CardsPlaceholder() {
  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={4} sx={{ p: 1 }}>
        <MenuCard
          title={<Skeleton width={300} />}
          items={arr1.map(() => ({
            name: <Skeleton width={100} />,
            value: <Skeleton width={75} />,
          }))}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} sx={{ p: 1 }}>
        <MenuCard
          title={<Skeleton width={300} />}
          items={arr2.map(() => ({
            name: <Skeleton width={100} />,
            value: <Skeleton width={75} />,
          }))}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} sx={{ p: 1 }}>
        <MenuCard
          title={<Skeleton width={300} />}
          items={arr3.map(() => ({
            name: <Skeleton width={100} />,
            value: <Skeleton width={75} />,
          }))}
        />
      </Grid>
    </Grid>
  );
}

export default CardsPlaceholder;
