import {
  Stack,
  Paper,
  Box,
  Typography,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import AboutPlaceholder from "./AboutPlaceholder";
import axios from "axios";
import api from "methods/api";
import { Media } from "types/Media";
import { useTranslation } from "react-i18next";

function AboutSection({ about }: PropsType) {
  let features: string[] = [];
  if (typeof about === "object" && typeof about.feature === "string") {
    features = about.feature.split("*0*");
  }
  const { t } = useTranslation();

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
                {t("design.main")}
              </Typography>
              <Typography>{about.about}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={700}>
                {t("design.title.advantages")}
              </Typography>
              <Box sx={{ pl: 2 }}>
                <List sx={{ listStyleType: "disc" }}>
                  {features.map((feature) => (
                    <ListItem key={feature} sx={{ display: "list-item", p: 0 }}>
                      <ListItemText>{feature}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </>
        )}
      </Stack>
    </Stack>
  );
}

export type AboutType = {
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
  media?: Media[];
};

type PropsType = {
  about: "error" | AboutType | "loading" | "none";
};

export default AboutSection;
