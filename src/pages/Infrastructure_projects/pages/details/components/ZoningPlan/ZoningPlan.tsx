import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import imgSrc from "../../../../../../assets/images/infrestructurePeojectsImages/projectDetails.png";

import "./ZoningPlan.scss";
import { useEffect, useState } from "react";
import Loader from "pages/Infrastructure_projects/components/Loading/Loading";
import ThereIsNoData from "../NoData";
import { ContractItems, ContractSubItem } from "../../ProjectDetails";

export default function ZoningPlan({
  masterImg,
  contractItems,
  dateStart,
  dateEnd,
}: PropsType) {
  //* declare and prepare our contract ratio items
  const [loading, setLoading] = useState(false);
  const [processArr, setprocessArr] = useState<
    { title: string; items: ContractSubItem[] }[]
  >([]);

  // TODO::prepare ratio items
  useEffect(() => {
    setLoading(true);
    let raioArr = [],
      n = contractItems?.length;

    for (let i = 0; i < n; i++) {
      let title = contractItems[i]?.name;
      let items = contractItems[i]?.contract_sub_items?.filter(
        (ele) => ele.is_processing == 1
      );
      if (items.length) {
        raioArr.push({ title, items });
      }
    }
    
    setprocessArr(raioArr);
    setLoading(false);
  }, []);

  // * define and declare helpers functions
  // Calculating the elapsed days from the start date of the project to today
  const CalcElapsedDays = () => {
    // declare variables
    let startDate = new Date(dateStart ?? "");
    let endDate = new Date(dateEnd ?? "");
    let today = new Date();
    // Processing....
    let differenceInTimeFromStartToEnd =
      endDate.getTime() - startDate.getTime();
    let differenceInDaysFromStartToEnd = Math.round(
      differenceInTimeFromStartToEnd / (1000 * 3600 * 24)
    );
    let onePercent = Math.round(differenceInDaysFromStartToEnd / 100);

    let differenceInTimeFromStartToToday =
      today.getTime() - startDate.getTime();
    let differenceInDaysFromStartToToday = Math.round(
      differenceInTimeFromStartToToday / (1000 * 3600 * 24)
    );

    let elapsedDays =
      differenceInDaysFromStartToToday > differenceInDaysFromStartToEnd
        ? 100
        : Math.round(differenceInDaysFromStartToToday / onePercent);

    return elapsedDays ?? 0;
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#fff",
        borderRadius: "17px",
        boxSizing: "border-box",
        padding: "1rem",
        minHeight: "999px",
      }}
    >
      <Grid item xs={12} sx={{ marginY: "0.5rem", textAlign: "center" }}>
        <Typography fontSize={"1.58rem"} fontWeight={800} variant="h4">
          المخطط التقسيمي
        </Typography>
      </Grid>
      {/* master image */}
      <Grid item xs={12}>
        <img
          src={masterImg ?? imgSrc}
          width="100%"
          style={{ borderRadius: "9px" }}
          height="330px"
          alt="project details"
        />
      </Grid>
      {/* time plan */}
      <Grid item xs={12} id="LProgressBar">
        <Typography
          fontWeight={700}
          fontSize={"1.4rem"}
          sx={{ marginY: "0.3rem" }}
          variant="h5"
        >
          الخريطة الزمنية للمشروع
        </Typography>
        <Box
          sx={{
            height: "35px",
            borderRadius: "21px",
            border: "1px solid rgb(241, 155, 2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={CalcElapsedDays()}
            sx={{
              width: "100%",
              "&.MuiLinearProgress-root": {
                height: "30px",
                borderRadius: "21px",
                border: "1px solid #fff",
              },
              "&.MuiLinearProgress-root .MuiLinearProgress-bar": {
                background:
                  "linear-gradient(263.01deg, #ffc860 -2.17%, #ff5f1e 99.77%)",
                borderRadius: "12px",
              },
            }}
          />
          <Typography
            sx={{
              display: "flex",
              width: "93px",
              position: "absolute",
              left:
                CalcElapsedDays() > 25 ? `${CalcElapsedDays() - 25}%` : "0%", //اقل من قيمة ب 20
              fontWeight: 700,
            }}
            variant="body2"
          >
            المنقضي {CalcElapsedDays()}%
          </Typography>
          <Typography
            sx={{
              display: "flex",
              width: "93px",
              position: "absolute",
              right: "0", //اقل من قيمة ب 20
              fontWeight: 700,
              //display:val == 100?'none':'flex'
            }}
            variant="body2"
          >
            المتبقي 40%
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography fontWeight={400} variant="body2">
              بداية المشروع
            </Typography>
            <Typography fontWeight={600} fontSize={18} variant="body2">
              {new Date(dateStart ?? "").toLocaleDateString("en-GB")}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography fontWeight={400} variant="body2">
              نهاية المشروع
            </Typography>
            <Typography fontWeight={700} fontSize={18} variant="body2">
              {new Date(dateEnd ?? "").toLocaleDateString("en-GB")}
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* transactions */}
      <>
        {loading && <Loader />}
        {!loading &&
          processArr.length > 0 &&
          processArr.map((ele, idx) => {
            return (
              <Grid xs={12} key={`GTK_${idx}`}>
                <Grid item xs={12} sx={{ marginY: "0.5rem" }}>
                  <Typography
                    fontWeight={600}
                    fontSize={"1.103rem"}
                    variant="h6"
                  >
                    أرقام المعاملات لدى {ele.title} وحالتها
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ marginY: "1rem" }}
                  id="ZoningPlanTable1"
                >
                  <table style={{ width: "95%" }}>
                    {/* header */}
                    <thead>
                      <tr>
                        <th className="topCell rightCell">
                          <Typography
                            variant="h6"
                            fontSize={"1.2rem"}
                            fontWeight={800}
                          >
                            المعاملة
                          </Typography>
                        </th>
                        <th className="topCell meduimCell">
                          <Typography
                            variant="h6"
                            fontSize={"1.2rem"}
                            fontWeight={800}
                          >
                            رقمها
                          </Typography>
                        </th>
                        <th className="topCell leftCell">
                          <Typography
                            variant="h6"
                            fontSize={"1.2rem"}
                            fontWeight={800}
                          >
                            الحالة الحالية
                          </Typography>
                        </th>
                      </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                      {ele.items.map((row) => {
                        if (row.processing.length == 0)
                          return (
                            <tr key={`pI_${row.id}_${idx}`}>
                              <td className="rightCell">
                                <Typography
                                  variant="h6"
                                  fontSize={"1rem"}
                                  fontWeight="bolder"
                                >
                                  {row.name}
                                </Typography>
                              </td>
                              <td className="meduimCell">
                                <Typography variant="body2" fontWeight={400}>
                                  {"لا يوجد"}
                                </Typography>
                              </td>
                              <td className="leftCell">
                                <Typography variant="body2" fontWeight={400}>
                                  {"لا يوجد"}
                                </Typography>
                              </td>
                            </tr>
                          );
                        else {
                          return row.processing.map((process, index) => {
                            return (
                              <tr key={`pI_${row.id}_${process.id}`}>
                                {index == 0 && (
                                  <td
                                    rowSpan={row.processing.length}
                                    className="rightCell"
                                  >
                                    <Typography
                                      variant="h6"
                                      fontSize={"1rem"}
                                      fontWeight="bolder"
                                    >
                                      {row.name}
                                    </Typography>
                                  </td>
                                )}
                                <td className="meduimCell">
                                  <Typography variant="body2" fontWeight={400}>
                                    {process.id ?? "لا يوجد"}
                                  </Typography>
                                </td>
                                <td className="leftCell">
                                  <Typography variant="body2" fontWeight={400}>
                                    {process.comments.length == 0
                                      ? "مرسل"
                                      : `تم الرد بالملاحظات الاتية:${process.comments[0].note}`}
                                  </Typography>
                                </td>
                              </tr>
                            );
                          });
                        }
                      })}
                    </tbody>
                  </table>
                </Grid>
              </Grid>
            );
          })}
      </>
    </Grid>
  );
}

type PropsType = {
  masterImg: string | undefined;
  contractItems: ContractItems[];
  dateStart: string | undefined;
  dateEnd: string | undefined;
};
