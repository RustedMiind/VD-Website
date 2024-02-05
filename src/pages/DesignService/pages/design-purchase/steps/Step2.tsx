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
import { Design } from "types/Design/Design";
import { Media } from "types/Media";
import { useState } from "react";
import axios from "axios";
import api from "methods/api";
import { LoadingButton } from "@mui/lab";

type RowType = { name: string; value?: string | number };
function Step2({ design }: { design?: Design }) {
  const [status, setStatus] = useState<"loading" | "none" | "error">("none");
  const submitPurchase = () => {
    if (design) {
      setStatus("loading");
      axios
        .post(api("client/design/pay-cash"), { design_id: design.id })
        .then(() => {
          setStatus("none");
        })
        .catch(() => {
          setStatus("error");
        });
    }
  };

  const rows: RowType[] = [
    { name: "سعر التصميم قبل الخصم", value: design?.price_before },
    {
      name: "سعر التصميم بعد الخصم",
      value: design?.price_after || design?.price_after,
    },
  ];

  let images: Media[] = [];
  if (design?.mainImage && Array.isArray(design?.mainImage)) {
    images = images.concat(design.mainImage);
  }
  if (design?.subImages && Array.isArray(design?.subImages)) {
    images = images.concat(design.subImages);
  }

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
          {design?.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {design?.desc}
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
          {design?.price_after} ر.س
        </Typography>

        <Typography variant="body1" color={"gray"}>
          طريقة الدفع : نقديا
        </Typography>

        <LoadingButton
          onClick={submitPurchase}
          sx={{ mt: 2 }}
          fullWidth
          variant="contained"
          size="large"
          loading={status === "loading"}
        >
          تأكيد الطلب
        </LoadingButton>
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
          <FourImagesPreview images={images.map((i) => i.original_url)} />
          <Box mt={0.5}>
            {design?.booklet && design?.booklet[0] && (
              <Box mt={0.5}>
                <Button
                  disableElevation
                  variant="contained"
                  sx={{ display: "flex", minWidth: 250, width: "fit-content" }}
                  size="large"
                  endIcon={<FileOpenIcon />}
                  component={"a"}
                  target="_blank"
                  href={design.booklet[0].original_url}
                >
                  عرض الكتيب
                </Button>
              </Box>
            )}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Step2;
