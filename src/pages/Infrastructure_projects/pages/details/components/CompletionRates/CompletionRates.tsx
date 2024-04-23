import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./CompletionRates.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "pages/Infrastructure_projects/components/Loading/Loading";
import ThereIsNoData from "../NoData";
import { ContractItems, ContractSubItem } from "../../ProjectDetails";

const RateGridItem = ({ title, val }: { title: string; val: number }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "end",
          height: "60px",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            paddingRight: "5px",
            display: "flex",
            justifyContent: "start",
            alignItems: "end",
          }}
        >
          <Typography variant="body2" fontWeight={700}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Slider
            aria-label="Always visible"
            value={val}
            valueLabelDisplay="on"
            onChange={() => {}}
            sx={{
              fontWeight: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              paddingBottom: "5px",
              ".MuiSlider-valueLabelOpen": {
                backgroundColor:
                  val < 50 ? "#ff0000b8" : val < 70 ? "#f19b02" : "#008000b3",
              },
              ".MuiSlider-track": {
                height: "5px",
                width: "100%",
                color:
                  val < 50 ? "#ff0000b8" : val < 70 ? "#f19b02" : "#008000b3",
              },
              ".MuiSlider-rail": {
                height: "4px",
                background: "gray",
              },
              ".MuiSlider-thumb": {
                color:
                  val < 50 ? "#ff0000b8" : val < 70 ? "#f19b02" : "#008000b3",
              },
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
const ShowMoreBtn = () => {
  const Navigator = useNavigate();

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          padding: "3px 0",
        }}
      >
        <Button onClick={() => {}} style={{ float: "right", color: "#004693" }}>
          عرض المزيد
          <KeyboardArrowLeftIcon />
        </Button>
      </Box>
    </Grid>
  );
};
const DoneAndReminder = ({ column }: { column?: boolean }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        marginY: "0.5rem",
        flexDirection: column ? "column" : "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: column ? "start" : "center",
          alignItems: "center",
          marginX: "5px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            backgroundColor: "#f19b02",
            margin: "0 3px",
          }}
        ></span>
        <Typography variant="body2">المنفذ</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: column ? "start" : "center",
          alignItems: "center",
          marginX: "5px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            backgroundColor: "gray",
            margin: "0 3px",
          }}
        ></span>
        <Typography variant="body2">المتبقي</Typography>
      </Box>
    </Grid>
  );
};

export default function CompletionRates({
  contractItems,
  achievement_percentage,
}: {
  contractItems: ContractItems[];
  achievement_percentage: number;
}) {
  //* declare and prepare our contract ratio items
  const [loading, setLoading] = useState(false);
  const [ratioArr, setRatioArr] = useState<
    { title: string; items: ContractSubItem[] }[]
  >([]);

  //   TODO::prepare ratio items data
  useEffect(() => {
    setLoading(true);
    let raioArr = [],
      n = contractItems?.length;

    for (let i = 0; i < n; i++) {
      let title = contractItems[i]?.name;
      let items = contractItems[i]?.contract_sub_items?.filter(
        (ele) => ele.is_progress_bar == 1
      );
      if (items.length) {
        raioArr.push({ title, items });
      }
    }
    
    setRatioArr(raioArr);
    setLoading(false);
  }, []);

  return (
    <Grid
      container
      id="CompletionRatesDiv"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "17px",
        boxSizing: "border-box",
        padding: "1rem",
        alignItems: "start",
      }}
    >
      {/* Complete rates in Gada */}

      {loading && <Loader />}
      {!loading && ratioArr.length == 0 && <ThereIsNoData />}
      {!loading &&
        ratioArr.length > 0 &&
        ratioArr.map((ele, idx) => {
          return (
            <Grid key={`id_${ele.title}_${idx}`} container xs={12}>
              <Grid item xs={12} sx={{ marginY: "0.5rem" }}>
                <Typography fontWeight={700} fontSize={"1.2rem"} variant="h6">
                  {ele.title}
                </Typography>
              </Grid>
              <DoneAndReminder />
              {/* Rates */}
              {ele.items.map((item) => {
                return (
                  <RateGridItem
                    key={`subItem_${item.id}`}
                    title={item.name}
                    val={item.achievement_percentage}
                  />
                );
              })}
            </Grid>
          );
        })}
      {/* النسبة المئوية الكلية من انجاز المشروع */}
      <Grid
        xs={12}
        container
        sx={{
          display: "flex",
          marginY: "2rem",
        }}
      >
        <Grid item xs={12} sx={{ marginY: "0.5rem" }}>
          <Typography fontWeight={800} variant="h5">
            نسب انجاز الاعمال بالجهات الخدمية
          </Typography>
        </Grid>
        <Grid container sx={{ paddingBottom: "1rem" }}>
          <Grid item xs={4}>
            <DoneAndReminder column={true} />
          </Grid>
          <Grid item xs={8} sx={{ marginTop: "1.4rem" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                position: "relative",
                paddingX: "1rem",
              }}
            >
              <CircularProgress
                style={{ width: "90px" }}
                variant="determinate"
                color={"primary"}
                sx={{
                  ".MuiCircularProgress-svg": {
                    color:
                      achievement_percentage < 50
                        ? "#ff0000b8"
                        : achievement_percentage < 70
                        ? "#f19b02"
                        : "#008000b3",
                  },
                }}
                value={achievement_percentage}
              />
              <Typography
                sx={{
                  position: "absolute",
                  fontSize: "18px",
                  fontWeight: 900,
                  top: "8px",
                }}
                variant="body2"
              >
                {achievement_percentage}%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
