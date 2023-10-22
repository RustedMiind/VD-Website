import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ChoiceCard from "components/choice-card/ChoiceCard";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AddCardIcon from "@mui/icons-material/AddCard";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Step4() {
  return (
    <Box py={4}>
      <Typography variant="h5">ملخص الفاتورة</Typography>

      <Stack alignItems="center">
        <Paper sx={{ my: 2, p: 1, width: { xs: 0.7, md: 0.5 } }} elevation={4}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="body1" color="primary">
                      المفوتر
                    </Typography>
                  </TableCell>
                  <TableCell>مكتب أبعاد الرؤية للاستشارات الهندسية</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="body1" color="primary">
                      رقم الفاتورة
                    </Typography>
                  </TableCell>
                  <TableCell>213465</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="body1" color="primary">
                      من
                    </Typography>
                  </TableCell>
                  <TableCell>مكتب أبعاد الرؤية للاستشارات الهندسية</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="body1" color="primary">
                      العميل
                    </Typography>
                  </TableCell>
                  <TableCell>محمد أحمد محمود حامد</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="body1" color="primary">
                      تاريخ الاصدار
                    </Typography>
                  </TableCell>
                  <TableCell>2023/10/23</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
    </Box>
  );
}

export default Step4;
