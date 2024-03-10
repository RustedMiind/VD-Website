import {
  Button,
  Chip,
  ChipProps,
  Menu,
  Paper,
  PaperProps,
  Stack,
  TextField,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import AddLabelToEl from "components/AddLabelToEl";

const CustomPaper = (props: PaperProps) => (
  <Paper
    elevation={1}
    sx={(theme) => ({
      p: 2,
      bgcolor: `${theme.palette.background.default}AA`,
    })}
    {...props}
  />
);

const CustomChip = (props: ChipProps) => (
  <Chip
    variant="outlined"
    size="small"
    color="secondary"
    sx={{ borderRadius: 0.5 }}
    {...props}
  />
);

function Filters() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack sx={{ position: "absolute", top: 10, left: 50, zIndex: 100 }}>
      <Paper
        sx={(theme) => ({
          background: `${theme.palette.background.default}60`,
          backdropFilter: "blur(10px)",
        })}
      >
        <Button
          sx={{
            px: 4,
            py: 1,
          }}
          variant="text"
          color="secondary"
          onClick={handleClick}
          startIcon={<FilterAltIcon />}
        >
          خيارات البحث
        </Button>
      </Paper>
      <Menu
        slotProps={{
          paper: {
            // elevation: 4,
            sx(theme) {
              return {
                background: `${theme.palette.background.default}10`,
                backdropFilter: "blur(15px)",
                p: 2,
              };
            },
          },
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Stack width={400} spacing={2}>
          <CustomPaper>
            <TextField size="small" label="البحث" fullWidth />
          </CustomPaper>

          <CustomPaper>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                اختر نسبة الانجاز
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <Stack direction="row" justifyContent="space-between">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="25%"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="50%"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="75%"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="100%"
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
          </CustomPaper>

          <CustomPaper>
            <AddLabelToEl label="اختر المقاول">
              <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                <CustomChip label="محمد سعيد" />
                <CustomChip label="خالد عبدالرحمن" />
                <CustomChip label="عبدالله سيد" />
                <CustomChip label="احمد عادل" />
                <CustomChip label="احمد عادل" />
                <CustomChip label="عبدالله سيد" />
                <CustomChip label="محمد سعيد" />
              </Stack>
            </AddLabelToEl>
          </CustomPaper>

          <CustomPaper>
            <AddLabelToEl label="اختر الاستشاري">
              <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                <CustomChip label="محمد سعيد" />
                <CustomChip label="خالد عبدالرحمن" />
                <CustomChip label="عبدالله سيد" />
                <CustomChip label="احمد عادل" />
                <CustomChip label="احمد عادل" />
                <CustomChip label="عبدالله سيد" />
                <CustomChip label="محمد سعيد" />
              </Stack>
            </AddLabelToEl>
          </CustomPaper>
        </Stack>
      </Menu>
    </Stack>
  );
}

export default Filters;
