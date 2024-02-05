import { Skeleton, Stack, Typography } from "@mui/material";
import { CardGridItem } from "./CardsContainer";

const repeat = Array(8).fill(undefined);

function CardPlaceholder() {
  return (
    <>
      {repeat.map(() => (
        <CardGridItem>
          <Stack>
            <Skeleton width={"100%"} height={250} variant="rectangular" />
            <Typography variant="h5">
              <Skeleton width={200} />
            </Typography>
            <Typography variant="h6">
              <Skeleton width={150} />
            </Typography>
          </Stack>
        </CardGridItem>
      ))}
    </>
  );
}

export default CardPlaceholder;
