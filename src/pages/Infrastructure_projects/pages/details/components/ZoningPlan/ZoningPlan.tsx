import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import imgSrc from "../../../../../../assets/images/infrestructurePeojectsImages/projectDetails.png";

import "./ZoningPlan.scss";
import { useEffect, useState } from "react";
import Loader from "pages/Infrastructure_projects/components/Loading/Loading";
import ThereIsNoData from "../NoData";

type ContractSubItem = {
  contract_item_id: number;
  created_at: string;
  employee_id: number;
  id: number;
  is_attachment: number;
  is_processing: number;
  is_progress_bar: number;
  name: string;
  updated_at: string;
};

type ContractItems = {
  contract_id: number;
  contract_sub_items: ContractSubItem[];
  created_at: string;
  description: string;
  end_date: string;
  id: number;
  manager_id: number;
  name: string;
  start_date: string;
  updated_at: string;
};

export default function ZoningPlan({
  masterImg,
  contractItems,
}: {
  masterImg: string | undefined;
  contractItems: ContractItems[];
}) {
  //* declare and prepare our contract ratio items
  const [loading, setLoading] = useState(false);
  const [processArr, setprocessArr] = useState<
    { title: string; items: ContractSubItem[] }[]
  >([]);

  //   TODO::prepare ratio items
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
    console.log("Ratio Array:-", raioArr);
    setprocessArr(raioArr);
    setLoading(false);
  }, []);

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
      <Grid item xs={12}>
        <img
          src={masterImg ?? imgSrc}
          width="100%"
          style={{ borderRadius: "9px" }}
          height="330px"
          alt="project details"
        />
      </Grid>
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
            value={60}
            style={{
              width: "100%",
            }}
          />
          <Typography
            sx={{
              display: "flex",
              width: "93px",
              position: "absolute",
              right: "40%", //اقل من قيمة ب 20
              fontWeight: 700,
            }}
            variant="body2"
          >
            المنفذ 60%
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
              16/12/2022
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
              بداية المشروع
            </Typography>
            <Typography fontWeight={700} fontSize={18} variant="body2">
              16/12/2022
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ marginY: "1rem" }}>
        <Typography fontWeight={600} fontSize={"1.3rem"} variant="h5">
          أرقام المعاملات لدى أمانة جدة وحالتها
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ marginY: "1rem" }} id="ZoningPlanTable1">
        <table style={{ width: "95%" }}>
          {/* header */}
          <thead>
            <tr>
              <th className="topCell rightCell">
                <Typography variant="h6" fontSize={"1.2rem"} fontWeight={800}>
                  المعاملة
                </Typography>
              </th>
              <th className="topCell">
                <Typography variant="h6" fontSize={"1.2rem"} fontWeight={800}>
                  رقمها
                </Typography>
              </th>
              <th className="topCell leftCell">
                <Typography variant="h6" fontSize={"1.2rem"} fontWeight={800}>
                  الحالة الحالية
                </Typography>
              </th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {loading && <Loader />}
            {!loading && processArr.length > 0 &&
              processArr.map((ele, idx) => {
                return (
                  <tr key={`pI_${ele.title}_${idx}`}>
                    <td className="rightCell">
                      <Typography
                        variant="h6"
                        fontSize={"1rem"}
                        fontWeight="bolder"
                      >
                        {ele.title}
                      </Typography>
                    </td>
                    <td className="">
                      <Typography variant="body2" fontWeight={400}>
                        المعاملة بالاعتماد النهائي <br />
                        210123-322-444
                      </Typography>
                    </td>
                    <td className="leftCell">
                      <Typography variant="body2" fontWeight={400}>
                        المعاملة بالاعتماد النهائي <br />
                        210123-322-444
                      </Typography>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          {/* bottom */}
          {/* <tfoot>
            <tr>
              <td className="rightCell">
                <Typography variant="h6" fontSize={"1rem"} fontWeight="bolder">
                  الشركة السعودية للكهرباء
                </Typography>
              </td>
              <td className="">
                <Typography variant="body2" fontWeight={400}>
                  المعاملة بالاعتماد النهائي <br />
                  210123-322-444
                </Typography>
              </td>
              <td className="leftCell">
                <Typography variant="body2" fontWeight={400}>
                  المعاملة بالاعتماد النهائي <br />
                  210123-322-444
                </Typography>
              </td>
            </tr>
          </tfoot> */}
        </table>
      </Grid>
    </Grid>
  );
}
