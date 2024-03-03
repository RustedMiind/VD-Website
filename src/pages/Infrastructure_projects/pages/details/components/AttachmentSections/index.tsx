import { Grid, Typography } from "@mui/material";
import Loader from "pages/Infrastructure_projects/components/Loading/Loading";
import { useEffect, useState } from "react";
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
      <Grid item xs={12} sx={{ marginY: "1rem" }} id="ZoningPlanTable2">
        <table style={{ width: "98%" }}>
          {/* header */}
          <thead>
            <tr style={{ height: "60px" }}>
              <th className="topCell rightCell">
                <Typography variant="h6" fontSize="1.2rem" fontWeight={700}>
                  المعاملة
                </Typography>
              </th>
              <th className="topCell leftCell">
                <Typography variant="h6" fontSize="1.2rem" fontWeight={700}>
                  الحالة الحالية
                </Typography>
              </th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {loading && <Loader />}
            {!loading &&
              attachmentsArr.map((ele, iddx) => {
                return (
                  <tr key={`Attach_${ele.title}_${iddx}`}>
                    <td className="rightCell">
                      <Typography
                        variant="h6"
                        fontSize={"1rem"}
                        fontWeight="bolder"
                      >
                        {ele.title}
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
