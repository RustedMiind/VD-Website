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
  Button,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

function Filters({ setDesignFilters }: PropsType) {
  const [tempVal, setTempVal] = useState("");
  const { register, handleSubmit, setValue, control } =
    useForm<DesignFiltersType>({});
  const submit = handleSubmit((data) => {
    setDesignFilters(data);
  });

  return (
    <Stack component="form" direction="column" spacing={2} onSubmit={submit}>
      <Box>
        <TextField select fullWidth>
          <MenuItem value={-1}>الكل</MenuItem>
          <MenuItem value={10}>كود بناء مصر</MenuItem>
          <MenuItem value={20}>كود بناء السعودية</MenuItem>
        </TextField>
      </Box>
      <Box>
        <TextField
          type="number"
          variant="outlined"
          label="المساحة"
          fullWidth
          {...register("area")}
        />
      </Box>
      <Box>
        <Typography variant="body1" gutterBottom fontWeight="bold">
          عدد الغرف
        </Typography>

        <Controller
          name="bed_rooms_num"
          control={control}
          render={({ field }) => {
            return (
              <ToggleButtonGroup
                {...field}
                onChange={(
                  event: React.MouseEvent<HTMLElement>,
                  value: string
                ) => {
                  setValue(field.name, value);
                }}
                sx={{ display: "flex" }}
                exclusive
              >
                <ToggleButton sx={{ flexGrow: 1 }} value="2">
                  2
                </ToggleButton>
                <ToggleButton sx={{ flexGrow: 1 }} value="3">
                  3
                </ToggleButton>
                <ToggleButton sx={{ flexGrow: 1 }} value="4">
                  4
                </ToggleButton>
                <ToggleButton sx={{ flexGrow: 1 }} value="5">
                  5+
                </ToggleButton>
              </ToggleButtonGroup>
            );
          }}
        />
      </Box>
      <Box>
        <Typography variant="body1" gutterBottom fontWeight="bold">
          عدد الطوابق
        </Typography>
        <Controller
          name="floors_num"
          control={control}
          render={({ field }) => {
            return (
              <ToggleButtonGroup
                {...field}
                onChange={(
                  event: React.MouseEvent<HTMLElement>,
                  value: string
                ) => {
                  setValue(field.name, value);
                }}
                sx={{ display: "flex" }}
                exclusive
                aria-label="text alignment"
              >
                <ToggleButton sx={{ flexGrow: 1 }} value="1">
                  1
                </ToggleButton>
                <ToggleButton sx={{ flexGrow: 1 }} value="2">
                  2
                </ToggleButton>
                <ToggleButton sx={{ flexGrow: 1 }} value="3">
                  3
                </ToggleButton>
                <ToggleButton sx={{ flexGrow: 1 }} value="4">
                  4+
                </ToggleButton>
              </ToggleButtonGroup>
            );
          }}
        />
      </Box>

      <Box>
        <TextField
          variant="outlined"
          type="number"
          label="عرض الارض"
          {...register("width_floor")}
          fullWidth
        />
      </Box>

      <Box>
        <TextField
          {...register("height_floor")}
          variant="outlined"
          type="number"
          label="طول الارض"
          fullWidth
        />
      </Box>

      <Box>
        <TextField
          {...register("width_front_street")}
          variant="outlined"
          label="عرض الشارع الامامي"
          type="number"
          fullWidth
        />
      </Box>

      <Button fullWidth type="submit" size="large" variant="contained">
        بحث
      </Button>
    </Stack>
  );
}

type PropsType = {
  setDesignFilters: (params: DesignFiltersType) => void;
};

export type DesignFiltersType = {
  area: string;
  width_floor: string;
  height_floor: string;
  width_front_street: string;
  bed_rooms_num: string;
  floors_num: string;
};

export default Filters;
