import { Button, Typography, Box, Stack } from "@mui/material";
import AspectRatioImage from "components/aspect-ratio-image/AspectRatioImage";
import FourImagesPreview from "components/four-images-preview/FourIMagesPreview";

function InfoWithImage() {
  return (
    <div className="advantages my-4 p-8 flex flex-wrap">
      <div className="pe-8  w-full md:w-1/3">
        <Typography variant="h5" fontWeight={"bold"}>
          عنوان الفيلا
        </Typography>
        <Typography variant="body1" gutterBottom>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة
        </Typography>
        <Typography variant="h6" fontWeight={"bold"}>
          يبدأ من
        </Typography>

        <Typography variant="h5" color={"primary.main"} fontWeight={"bold"}>
          6,000 ر.س
        </Typography>
        <Typography
          variant="body1"
          color={"error"}
          fontWeight={"bold"}
          sx={{ textDecoration: "line-through" }}
          gutterBottom
        >
          6,000 ر.س
        </Typography>

        <Button variant="contained" sx={{ px: 4, mt: 2 }}>
          شراء الآن
        </Button>
      </div>
      <div className="ps-8 w-full md:w-2/3">
        <Stack>
          <FourImagesPreview
            images={[
              "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
              "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
              "https://plus.unsplash.com/premium_photo-1680157071241-034d017884ca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
            ]}
          />
        </Stack>
      </div>
    </div>
  );
}

export default InfoWithImage;
