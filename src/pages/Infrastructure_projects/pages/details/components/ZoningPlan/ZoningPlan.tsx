import { Box, Grid, LinearProgress, Typography } from "@mui/material"
import imgSrc from '../../../../../../assets/images/infrestructurePeojectsImages/projectDetails.png';

import './ZoningPlan.scss';

const ZoningPlan = () => {
    return (
        <Grid container sx={{
            backgroundColor: '#fff',
            borderRadius: '17px',
            boxSizing: 'border-box',
            padding: '1rem',
            minHeight: '999px'
        }}>
            <Grid item xs={12} sx={{ marginY: '0.5rem', textAlign: 'center' }}>
                <Typography fontWeight={800} variant='h4'>المخطط التقسيمي</Typography>
            </Grid>
            <Grid item xs={12}>
                <img src={imgSrc} width='100%' style={{ borderRadius: '9px' }} height='330px' alt="project details" />
            </Grid>
            <Grid item xs={12} id='LProgressBar'>
                <Typography fontWeight={700} sx={{ marginY: '0.3rem' }} variant='h5'>الخريطة الزمنية للمشروع</Typography>
                <Box
                    sx={{
                        height: '35px',
                        borderRadius: '21px',
                        border: '1px solid rgb(241, 155, 2)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                    <LinearProgress
                        variant="determinate"
                        value={60}
                        style={{
                            width: '100%'
                        }}
                    />
                    <Typography sx={{
                        display: 'flex',
                        width: '93px',
                        position: 'absolute',
                        right: '40%',//اقل من قيمة ب 20
                        fontWeight: 700
                    }} variant='body2'>المنفذ 60%</Typography>
                    <Typography sx={{
                        display: 'flex',
                        width: '93px',
                        position: 'absolute',
                        right: '0',//اقل من قيمة ب 20
                        fontWeight: 700,
                        //display:val == 100?'none':'flex'
                    }} variant='body2'>المتبقي 40%</Typography>
                </Box>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        width: '120px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                        <Typography fontWeight={600} fontSize={18} variant="body2">16/12/2022</Typography>
                    </Box>
                    <Box sx={{
                        width: '120px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                        <Typography fontWeight={700} fontSize={18} variant="body2">16/12/2022</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ marginY: '1rem' }}>
                <Typography fontWeight={600} variant='h5'>أرقام المعاملات لدى أمانة جدة وحالتها</Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginY: '1rem' }} id='ZoningPlanTable1'>
                <table style={{ width: '95%' }}>
                    {/* header */}
                    <thead>
                        <tr>
                            <th className="topCell rightCell">
                                <Typography variant="h6" fontWeight={700}>المعاملة</Typography>
                            </th>
                            <th className="topCell">
                                <Typography variant="h6" fontWeight={700}>رقمها</Typography>
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
                                <Typography variant="h6" fontWeight={500}>الشركة السعودية للكهرباء</Typography>
                            </td>
                            <td className="">
                                <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                            </td>
                            <td className="leftCell">
                                <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td className="rightCell">
                                <Typography variant="h6" fontWeight={500}>الشركة السعودية للكهرباء</Typography>
                            </td>
                            <td className="">
                                <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                            </td>
                            <td className="leftCell">
                                <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td className="rightCell">
                                <Typography variant="h6" fontWeight={500}>الشركة السعودية للكهرباء</Typography>
                            </td>
                            <td className="">
                                <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
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
                                <Typography variant="h6" fontWeight={500}>الشركة السعودية للكهرباء</Typography>
                            </td>
                            <td className="buttomCell">
                                <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                            </td>
                            <td className="buttomCell leftCell">
                                <Typography variant="body2" fontWeight={400}>المعاملة بالاعتماد النهائي <br />210123-322-444</Typography>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </Grid>
        </Grid >
    )
}

export default ZoningPlan