import { Box, Button, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { getValueByKey } from "types/SettingsType";

function ContactViaWhatsApp() {
  const settings = useSelector(
    (state: { settings: SettingsStateType }) => state.settings
  );
  const getvalue = getValueByKey(settings);
  const whatsapp = getvalue("whatsapp") as undefined | [string];

  return (
    <>
      {whatsapp?.[0] && (
        <Stack spacing={4} sx={{ textAlign: "center" }}>
          <Box>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              تواصل معنا
            </Typography>
            <Typography>
              اضغط على الزر و اكتب استفسارك مباشرة على الواتساب وسيقوم فريق
              العمل بالرد عليك في اقرب وقت
            </Typography>
          </Box>
          <Button
            startIcon={<WhatsAppIcon />}
            variant="contained"
            color={"success"}
            size="large"
            component="a"
            target="_blank"
            rel="noreferrer"
            href={"https://wa.me/" + whatsapp[0]}
          >
            WhatsApp
          </Button>
        </Stack>
      )}
    </>
  );
}

export default ContactViaWhatsApp;
