import { Box, Button, Grid, Typography } from "@mui/material";
import bgImg from '../../../../assets/images/infrestructurePeojectsImages/projectDetailsBG.png';
import CompletionRates from "./components/CompletionRates/CompletionRates";
import ZoningPlan from "./components/ZoningPlan/ZoningPlan";
import { Printer } from "react-bootstrap-icons";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const ProjectDetails = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        width: '100%',
        backgroundSize: '100% 100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid container sx={{ width: '95%', paddingTop: '6rem' }}>
        {/* buttions */}
        <Grid item xs={12} sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end'
        }}>
          <Button variant="contained" sx={{ backgroundColor: '#3169a7', marginX: '3px', borderRadius: '24px', width: '110px' }}>التصميم</Button>
          <Button variant="contained" sx={{ backgroundColor: '#f19b02', marginX: '3px', borderRadius: '24px', width: '110px' }}>الاشراف</Button>
        </Grid>
        {/* title */}
        <Grid item xs={12} sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Typography variant="h3" fontWeight={700}>تفاصيل المشروع مخطط 604</Typography>
        </Grid>
        {/* Details */}
        <Grid container sx={{ marginY: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid item xs={12} md={3}>
            <CompletionRates />
          </Grid>
          <Grid item xs={12} md={5}>
            <ZoningPlan />
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container sx={{
              backgroundColor: '#fff',
              borderRadius: '17px',
              boxSizing: 'border-box',
              padding: '1rem',
              minHeight: '999px'
            }}>
              <Grid item xs={12} sx={{ marginY: '1rem' }} id='ZoningPlanTable2'>
                <table style={{ width: '98%' }}>
                  {/* header */}
                  <thead>
                    <tr style={{ height: '90px' }}>
                      <th className="topCell rightCell">
                        <Typography variant="h6" fontWeight={700}>المعاملة</Typography>
                      </th>
                      <th className="topCell leftCell">
                        <Typography variant="h6" fontWeight={700}>الحالة الحالية</Typography>
                      </th>
                    </tr>
                  </thead>
                  {/* body */}
                  <tbody>
                    <tr>
                      <td className="rightCell">
                        <Typography variant="h6" fontWeight={600}>الشركة السعودية للكهرباء</Typography>
                      </td>
                      <td className="leftCell">
                        <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="rightCell">
                        <Typography variant="h6" fontWeight={600}>الشركة السعودية للكهرباء</Typography>
                      </td>
                      <td className="leftCell">
                        <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="rightCell">
                        <Typography variant="h6" fontWeight={600}>الشركة السعودية للكهرباء</Typography>
                      </td>
                      <td className="leftCell">
                        <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="rightCell">
                        <Typography variant="h6" fontWeight={600}>الشركة السعودية للكهرباء</Typography>
                      </td>
                      <td className="leftCell">
                        <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                      </td>
                    </tr>
                  </tbody>
                  {/* bottom */}
                  <tfoot>
                    <tr>
                      <td className="buttomCell rightCell">
                        <Typography variant="h6" fontWeight={600}>الشركة السعودية للكهرباء</Typography>
                      </td>
                      <td className="buttomCell leftCell">
                        <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* print btn */}
        <Grid item xs={12} sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginY: '2rem',
        }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#004693',
              borderRadius: '7px',
              width: '350px',
              height: '50px',
            }}>
            <Printer style={{ fontSize: 18, fontWeight: 700 }} />
            <Typography fontSize={18} fontWeight={700} sx={{ marginX: '0.4rem' }} variant='body2'>طباعة</Typography>
          </Button>
        </Grid>
        {/* chat btn */}
        <Grid item xs={12} sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'start',
          marginY: '2rem',
        }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#f19b02',
              width: '10rem',
              height: '3rem',
              borderRadius: '0 24px 24px',
            }}>
            <QuestionAnswerOutlinedIcon />
            <Typography sx={{ marginX: '0.4rem' }} fontSize={18} fontWeight={700} variant='body2'>استشرنا</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectDetails