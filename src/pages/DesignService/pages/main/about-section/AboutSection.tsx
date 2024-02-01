import { Stack, Paper, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AboutPlaceholder from "./AboutPlaceholder";
import axios from "axios";
import api from "methods/api";

function AboutSection() {
  const [about, setAbout] = useState<AboutType | "error" | "loading" | "none">(
    "none"
  );

  useEffect(() => {
    setAbout("loading");
    axios
      .get<{ strucre_designs: AboutType }>(api("client/strucre-design"))
      .then(({ data }) => {
        setAbout(data.strucre_designs);
      })
      .catch((err) => {
        setAbout("error");
      });
  }, []);

  return (
    <Stack
      component={Paper}
      sx={{ my: 2, p: 4, bgcolor: "background.primary" }}
    >
      <Stack width={{ xs: 1, sm: 0.8, md: 0.6, lg: 0.5, xl: 0.4 }} spacing={3}>
        {about === "loading" && <AboutPlaceholder />}
        {typeof about === "object" && (
          <>
            <Box>
              <Typography variant="h6" fontWeight={700}>
                خدمات التصميم
              </Typography>
              <Typography>{about.about}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={700}>
                المميزات
              </Typography>

              <Typography>{about.feature}</Typography>
            </Box>
          </>
        )}
      </Stack>
    </Stack>
  );
}

type AboutType = {
  id?: number;
  vision_ar?: string;
  vision_en?: string;
  about_us_ar?: string;
  about_us_en?: string;
  features_ar?: string;
  features_en?: string;
  created_at?: string;
  updated_at?: string;
  vision?: string;
  about?: string;
  feature?: string;
};

export default AboutSection;
