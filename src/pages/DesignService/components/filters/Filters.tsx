import { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  MenuItem,
  Box,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import api from "methods/api";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

type optionType = {
  id: number;
  name: string;
};

function Filters({ setDesignFilters }: PropsType) {
  const [utilities, setUtilities] = useState<number[]>([]);
  const { register, handleSubmit, setValue, control } =
    useForm<DesignFiltersType>({});
  const submit = handleSubmit((data) => {
    setDesignFilters({ ...data, utilities });
  });
  const [utilitiesOptions, setUtilitiesOptions] = useState<optionType[]>([]);

  useEffect(() => {
    submit();
  }, [utilities.length]);

  useEffect(() => {
    // TODO::fetch options data
    axios
      .get(api("client/design/attachment-option"), {
        headers: {
          from: "website",
        },
      })
      .then((res) => {
        return res?.data?.utilities_type;
      })
      .then((data) => {
        let _arr: optionType[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            _arr.push({ id: data[key], name: key });
          }
        }
        console.log("response data ", data, _arr);
        setUtilitiesOptions(_arr);
      })
      .catch((err) => {
        console.log("error in fetch options data:", err);
      });
  }, []);

  return (
    <Stack component="form" direction="column" spacing={2} onSubmit={submit}>
      {/* <Box>
        <TextField select fullWidth size="small">
          <MenuItem value={-1}>الكل</MenuItem>
          <MenuItem value={10}>كود بناء مصر</MenuItem>
          <MenuItem value={20}>كود بناء السعودية</MenuItem>
        </TextField>
      </Box> */}
      <Box>
        <TextField
          type="number"
          variant="outlined"
          label="المساحة"
          fullWidth
          size="small"
          {...register("area")}
          onBlur={submit}
        />
      </Box>
      <Box>
        <Typography
          variant="body1"
          color="primary.main"
          gutterBottom
          fontWeight="bold"
        >
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
                  submit();
                }}
                size="small"
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
        <Typography
          variant="body1"
          color="primary.main"
          gutterBottom
          fontWeight="bold"
        >
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
                  submit();
                }}
                sx={{ display: "flex" }}
                exclusive
                aria-label="text alignment"
                size="small"
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
          size="small"
          label="عرض الارض"
          {...register("width_floor")}
          fullWidth
          onBlur={submit}
        />
      </Box>

      <Box>
        <TextField
          {...register("height_floor")}
          variant="outlined"
          type="number"
          size="small"
          label="طول الارض"
          fullWidth
          onBlur={submit}
        />
      </Box>

      <Box>
        <TextField
          {...register("width_front_street")}
          variant="outlined"
          label="عرض الشارع الامامي"
          type="number"
          size="small"
          onBlur={submit}
          fullWidth
        />
      </Box>
      <Box>
        <Typography
          variant="body1"
          color="primary.main"
          gutterBottom
          fontWeight="bold"
        >
          دورات المياه
        </Typography>
        <Controller
          name="bathroom_num"
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
                  submit();
                }}
                sx={{ display: "flex" }}
                exclusive
                aria-label="text alignment"
                size="small"
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
        <FormGroup>
          {utilitiesOptions.map((utility) => (
            <FormControlLabel
              control={
                <Checkbox
                  key={utility.id}
                  checkedIcon={<TaskAltIcon />}
                  icon={<RadioButtonUncheckedIcon />}
                  defaultChecked
                  checked={utilities.includes(utility.id)}
                  onChange={(e, checked) =>
                    checked
                      ? setUtilities([...utilities, utility.id])
                      : setUtilities(utilities.filter((u) => u !== utility.id))
                  }
                />
              }
              label={utility.name}
            />
          ))}
        </FormGroup>
      </Box>
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
  bathroom_num: string;
  utilities?: number[];
};

export default Filters;
