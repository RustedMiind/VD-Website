import { Grid, Stack, Typography } from "@mui/material";
import Loader from "pages/Infrastructure_projects/components/Loading/Loading";
import { useEffect, useState } from "react";
import { ContractItems, ContractSubItem } from "../../ProjectDetails";

export default function AttachmentSections({
  contractItems,
}: {
  contractItems: ContractItems[];
}) {
  //* declare and prepare our contract ratio items
  const [loading, setLoading] = useState(false);
  const [attachmentsArr, setAttachmentsArr] = useState<
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
        (ele) => ele.is_attachment == 1
      );
      if (items.length) {
        raioArr.push({ title, items });
      }
    }
    setAttachmentsArr(raioArr);
    setLoading(false);
  }, []);

  return (
    <Stack spacing={2}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "17px",
        boxSizing: "border-box",
        padding: "1rem",
        minHeight: "999px",
      }}
    >
      {loading && <Loader />}
      {!loading &&
        attachmentsArr.map((ele, idx) => {
          return (
            <Grid xs={12} key={`AK_${ele.title}_${idx}`}>
              <Grid item xs={12} sx={{ marginY: "0.3rem" }}>
                <Typography fontWeight={600} fontSize={"1.103rem"} variant="h6">
                  مرفقات {ele.title}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ marginY: "0.22rem" }} id="ZoningPlanTable2">
                <table style={{ width: "98%" }}>
                  {/* header */}
                  <thead>
                    <tr style={{ height: "60px" }}>
                      <th className="topCell rightCell">
                        <Typography
                          variant="body1"
                          fontSize="1rem"
                          fontWeight={700}
                        >
                          البند الفرعي
                        </Typography>
                      </th>
                      <th className="topCell leftCell">
                        <Typography
                          variant="body1"
                          fontSize="1rem"
                          fontWeight={700}
                        >
                          عدد المرفقات
                        </Typography>
                      </th>
                    </tr>
                  </thead>
                  {/* body */}
                  <tbody>
                    {ele.items.map((row, iddx) => {
                      return (
                        <tr key={`Attach_${row.id}_${iddx}`}>
                          <td className="rightCell">
                            <Typography
                              variant="body2"
                              fontSize={"1rem"}
                              fontWeight="bolder"
                            >
                              {row.name}
                            </Typography>
                          </td>
                          <td className="leftCell">
                            <Typography variant="body2" fontWeight={400}>
                              5 مرفقات
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Grid>
            </Grid>
          );
        })}
    </Stack>
  );
}
