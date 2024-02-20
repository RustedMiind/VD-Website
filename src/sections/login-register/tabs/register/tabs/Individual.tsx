import { LoadingButton } from "@mui/lab";
import {
  DialogActions,
  DialogContent,
  Grid,
  Stack,
  TextField,
} from "@mui/material";

function Individual() {
  return (
    <Stack>
      <DialogContent>
        <Grid container>
          <Grid item xs={12} md={6} p={1}>
            <TextField size="small" fullWidth label="الاسم" />
          </Grid>
          <Grid item xs={12} md={6} p={1}>
            <TextField size="small" fullWidth label="البريد الالكتروني" />
          </Grid>
          <Grid item xs={12} md={6} p={1}>
            <TextField size="small" fullWidth label="رقم الهوية" />
          </Grid>
          <Grid item xs={12} md={6} p={1}>
            <TextField size="small" fullWidth label="رقم الجوال" />
          </Grid>
          <Grid item xs={12} md={6} p={1}>
            <TextField size="small" fullWidth label="عنوان المراسلات" />
          </Grid>

          {/* placeholder for upload file component */}
          <Grid item xs={12} md={6} p={1}>
            <TextField disabled size="small" fullWidth label="صورة الهوية" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <LoadingButton
          size="large"
          // loading={state === "loading" || state === "loading-only"}
          loadingPosition="start"
          // startIcon={<SaveIcon />}
          variant="contained"
          fullWidth
          // type="submit"
        >
          انشاء الحساب
        </LoadingButton>
      </DialogActions>
    </Stack>
  );
}

export default Individual;
