import { Button, Typography, Box, Stack } from "@mui/material";
import AspectRatioImage from "components/aspect-ratio-image/AspectRatioImage";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import FourImagesPreview from "components/four-images-preview/FourIMagesPreview";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const rows: RowType[] = [
  { name: "name1", value: "value1" },
  { name: "name2", value: "value2" },
  { name: "name3", value: "value3" },
  { name: "name4", value: "value4" },
];
type RowType = { name: string; value: string };
function Step2() {
  return (
    <Stack py={4} direction={"row"} flexWrap={"wrap"}>
      <Stack
        className="pe-8  w-full md:w-1/3"
        sx={{
          pr: {
            xs: 0,
            lg: 4,
          },
          width: {
            xs: 1,
            md: 1 / 2,
            lg: 1 / 3,
          },
        }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          عنوان الفيلا
        </Typography>
        <Typography variant="body1" gutterBottom>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة
        </Typography>
        <Typography variant="h5" fontWeight={"bold"}>
          تفاصيل السعر
        </Typography>
        <TableContainer sx={{ width: 0.8, py: 1 }}>
          <Table
            sx={{
              width: 1,
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
              },
            }}
            size="small"
            aria-label="a dense table"
          >
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body2" color="text.secondary">
                      {row.value}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" fontWeight={"bold"}>
          اجمالي السعر (شامل ضريبة القيمة المضافة)
        </Typography>

        <Typography variant="h6" color={"primary.main"} fontWeight={"bold"}>
          6,000 ر.س
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: {
            xs: 1,
            lg: 2 / 3,
          },
          pl: {
            xs: 0,
            lg: 4,
          },
          mt: {
            xs: 4,
            lg: 0,
          },
        }}
      >
        <Stack>
          <FourImagesPreview
            images={[
              "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
              "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
              "https://plus.unsplash.com/premium_photo-1680157071241-034d017884ca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
            ]}
          />
          <Box mt={0.5}>
            <Button
              disableElevation
              variant="contained"
              sx={{ display: "flex", gap: 6 }}
              size="large"
              endIcon={<FileOpenIcon />}
            >
              عرض الكتيب
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Step2;
