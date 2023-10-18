import InputPlusMinus from "components/input-plus-minus/InputPlusMinus";
import { useState } from "react";
import {
  Select,
  TextField,
  Typography,
  MenuItem,
  Box,
  Stack,
  FormControl,
  InputLabel,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

function Filters() {
  const [tempVal, setTempVal] = useState("");

  return (
    <div className="lg:w-1/3 xl:w-1/4  w-full ">
      <Stack component="form" direction="column" spacing={2}>
        <Box>
          <FormControl fullWidth variant="outlined">
            <InputLabel
              variant="outlined"
              id="demo-simple-select-outlined-label"
            >
              كود البناء
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="كود البناء"
            >
              <MenuItem value="">الكل</MenuItem>
              <MenuItem value={10}>كود بناء مصر</MenuItem>
              <MenuItem value={20}>كود بناء السعودية</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <TextField variant="outlined" label="المساحة" fullWidth />
        </Box>
        <Box>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            عدد الغرف
          </Typography>
          <ToggleButtonGroup
            color="primary"
            exclusive
            aria-label="Platform"
            sx={{ display: "flex" }}
          >
            <ToggleButton sx={{ flexGrow: 1 }} value="web">
              2
            </ToggleButton>
            <ToggleButton sx={{ flexGrow: 1 }} value="web">
              3
            </ToggleButton>
            <ToggleButton sx={{ flexGrow: 1 }} value="web">
              4
            </ToggleButton>
            <ToggleButton sx={{ flexGrow: 1 }} value="web">
              5+
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            عدد الطوابق
          </Typography>
          <ToggleButtonGroup
            color="primary"
            exclusive
            aria-label="Platform"
            sx={{ display: "flex" }}
          >
            <ToggleButton sx={{ flexGrow: 1 }} value="web">
              1
            </ToggleButton>
            <ToggleButton sx={{ flexGrow: 1 }} value="web">
              2
            </ToggleButton>
            <ToggleButton sx={{ flexGrow: 1 }} value="web">
              3
            </ToggleButton>
            <ToggleButton sx={{ flexGrow: 1 }} value="web">
              4+
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box>
          <TextField variant="outlined" label="عرض الارض" fullWidth />
        </Box>

        <Box>
          <TextField variant="outlined" label="طول الارض" fullWidth />
        </Box>

        <Box>
          <TextField variant="outlined" label="عرض الشارع الامامي" fullWidth />
        </Box>
      </Stack>
    </div>
  );
}

export default Filters;
