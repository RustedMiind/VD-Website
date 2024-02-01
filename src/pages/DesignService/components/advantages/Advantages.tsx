/* eslint-disable react/jsx-no-comment-textnodes */
import { Stack, Paper, Box, Typography } from "@mui/material";
import "./advantages.scss";

function Advantages() {
  return (
    <Stack
      component={Paper}
      sx={{ my: 2, p: 4, bgcolor: "background.primary" }}
    >
      <Stack width={{ xs: 1, sm: 0.8, md: 0.6, lg: 0.5, xl: 0.4 }} spacing={3}>
        <Box>
          <Typography variant="h6" fontWeight={700}>
            خدمات التصميم
          </Typography>
          <Typography>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={700}>
            المميزات
          </Typography>

          <Typography>
            // هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
            هذا // النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
            العديد من // النصوص الأخرى إضافة
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Advantages;
