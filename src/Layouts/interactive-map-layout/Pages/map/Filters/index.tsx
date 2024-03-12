import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  ChipProps,
  Menu,
  Paper,
  PaperProps,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import AddLabelToEl from "components/AddLabelToEl";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { mapPositions } from "..";
import { MapPositionsType } from "../MapBanner";

export const CustomPaper = (props: PaperProps) => (
  <Paper
    elevation={0}
    sx={(theme) => ({
      p: 2,
      bgcolor: `${theme.palette.background.default}80`,
    })}
    {...props}
  />
);

const FilterCategory = ({ children, label }: FilterCategoryProps) => (
  <Stack>
    <Accordion
      elevation={0}
      sx={(theme) => ({
        bgcolor: `${theme.palette.background.default}80`,
      })}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body1" fontWeight={700}>
          {label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  </Stack>
);
type FilterCategoryProps = {
  children: React.ReactNode;
  label: string;
};
const CustomChip = (props: ChipProps) => (
  <Chip
    variant="outlined"
    size="small"
    color="secondary"
    sx={{ borderRadius: 0.5 }}
    {...props}
  />
);

function Filters({ handleSelect, selectedCity }: PropsType) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [range, setRange] = useState<number[]>([0, 100000]);
  const minDistance = 2000;
  const handleChangeRange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setRange([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setRange([clamped - minDistance, clamped]);
      }
    } else {
      setRange(newValue as number[]);
    }
  };
  const [selectAnchorEl, setSelectAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const handleSelectClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectAnchorEl(event.currentTarget);
  };
  const handleSelectClose = () => {
    setSelectAnchorEl(null);
  };
  return (
    <>
      <Stack
        sx={{ position: "absolute", top: 10, left: 50, zIndex: 100 }}
        spacing={2}
      >
        <Paper
          sx={(theme) => ({
            background: `${theme.palette.background.default}60`,
            backdropFilter: "blur(10px)",
            px: 2,
            py: 1,
          })}
        >
          <img
            style={{ width: 250 }}
            src="https://cdn.discordapp.com/attachments/1195066403288535111/1216393845936488478/image.png?ex=66003a0c&is=65edc50c&hm=511aa2f8cee189dfad6f39e443272a1d58960a79606e3b66ee055bab42ce1c5a&"
            alt=""
          />
        </Paper>
        <Stack>
          <Accordion
            elevation={0}
            sx={(theme) => ({
              bgcolor: `${theme.palette.background.default}80`,
              backdropFilter: "blur(15px)",
            })}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" fontWeight={700}>
                خيارات البحث
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper
                elevation={0}
                sx={(theme) => ({
                  background: `${theme.palette.background.default}10`,
                  backdropFilter: "blur(15px)",
                  p: 2,
                  maxHeight: "65vh",
                  overflowY: "auto",
                })}
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

                  <FilterCategory label="اختر المقاول">
                    <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                      <CustomChip label="محمد سعيد" />
                      <CustomChip label="خالد عبدالرحمن" />
                      <CustomChip label="عبدالله سيد" />
                      <CustomChip label="احمد عادل" />
                      <CustomChip label="احمد عادل" />
                      <CustomChip label="عبدالله سيد" />
                      <CustomChip label="محمد سعيد" />
                    </Stack>
                  </FilterCategory>

                  <FilterCategory label="طول الخط البديل">
                    <div dir="ltr">
                      <Slider
                        min={0}
                        max={1000000}
                        value={range}
                        onChange={handleChangeRange}
                        valueLabelDisplay="auto"
                        step={12500}
                        disableSwap
                      />
                    </div>
                  </FilterCategory>

                  <FilterCategory label="نوع امر العمل">
                    <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                      <Button
                        variant="outlined"
                        sx={{
                          borderStyle: "dashed",
                          borderWidth: "2px !important",
                        }}
                      >
                        ضخ
                      </Button>
                      <Button variant="outlined" color="secondary">
                        خط بديل
                      </Button>
                    </Stack>
                  </FilterCategory>

                  <FilterCategory label="مقاول الخط البديل">
                    <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                      <CustomChip label="محمد سعيد" />
                      <CustomChip label="خالد عبدالرحمن" />
                      <CustomChip label="عبدالله سيد" />
                      <CustomChip label="احمد عادل" />
                      <CustomChip label="احمد عادل" />
                      <CustomChip label="عبدالله سيد" />
                      <CustomChip label="محمد سعيد" />
                    </Stack>
                  </FilterCategory>

                  <FilterCategory label="المدة المتبقية لانهاء الضخ">
                    <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                      <CustomChip label="60 يوم" />
                      <CustomChip label="90 يوم" />
                      <CustomChip label="120 يوم" />
                      <CustomChip label="160 يوم" />
                      <CustomChip label="30 يوم" />
                    </Stack>
                  </FilterCategory>
                  <Stack direction="row" spacing={2}>
                    <Button
                      sx={{ width: 0.5 }}
                      variant="contained"
                      color="secondary"
                    >
                      بحث
                    </Button>
                    <Button
                      sx={{ width: 0.5 }}
                      variant="outlined"
                      color="secondary"
                    >
                      اعادة تعيين
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            </AccordionDetails>
          </Accordion>
        </Stack>
        {/* <Paper
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
            onClick={handleSelectClick}
            fullWidth
            startIcon={<LocationCityIcon />}
            endIcon={<ExpandMoreIcon />}
          >
            المدن
          </Button>
        </Paper> */}
      </Stack>

      <Menu
        slotProps={{
          paper: {
            // elevation: 4,
            sx(theme) {
              return {
                background: `${theme.palette.background.default}10`,
                backdropFilter: "blur(15px)",
                p: 1,
              };
            },
          },
        }}
        anchorEl={selectAnchorEl}
        open={Boolean(selectAnchorEl)}
        onClose={handleSelectClose}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ xs: "end", md: "center" }}
          spacing={1}
          width={"fit-content"}
          p={1}
        >
          {mapPositions.map((city) => (
            <Button
              onClick={handleSelect(city)}
              key={city.typeId}
              variant="text"
              sx={(theme) => ({
                backgroundColor:
                  city.typeId == selectedCity?.typeId
                    ? `${theme.palette.secondary.main} !important`
                    : `${theme.palette.background.default} !important`,
                color:
                  city.typeId == selectedCity?.typeId
                    ? `${theme.palette.background.default} !important`
                    : `${theme.palette.secondary.main} !important`,
              })}
            >
              {city.name}
            </Button>
          ))}
        </Stack>
      </Menu>
    </>
  );
}

type PropsType = {
  selectedCity?: MapPositionsType;
  handleSelect: (city: MapPositionsType) => () => void;
};

export default Filters;
