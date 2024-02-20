import { Box, Button, CircularProgress, Grid, Slider, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './CompletionRates.scss';
import { useNavigate } from 'react-router-dom';

const RateGridItem = ({ title, val }: { title: string, val: number }) => {
    return <Grid item xs={12}>
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'end',
            height: '60px',

        }}>
            <Grid item xs={4} sx={{
                paddingRight: '5px',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'end',
            }}>
                <Typography variant='body2' fontWeight={700}>{title}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Slider
                    aria-label="Always visible"
                    value={val}
                    valueLabelDisplay="on"
                    onChange={() => { }}
                    sx={{
                        fontWeight: 400,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                        paddingBottom: '5px'
                    }}
                />
            </Grid>
        </Grid>
    </Grid>
}
const ShowMoreBtn = () => {
    const Navigator = useNavigate();

    return (
        <Grid item xs={12}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', padding: '3px 0' }}>
                <Button
                    onClick={() => Navigator('/Infrastructure_projects/moredetails/9')}
                    style={{ float: 'right', color: '#004693' }}>
                    عرض المزيد
                    <KeyboardArrowLeftIcon />
                </Button>
            </Box>
        </Grid>
    );
}
const DoneAndReminder = ({ column }: { column?: boolean }) => {
    return (
        <Grid item xs={12} sx={{
            display: 'flex',
            marginY: '0.5rem',
            flexDirection: column ? 'column' : 'row'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: column ? 'start' : 'center',
                    alignItems: 'center',
                    marginX: '5px'
                }}>
                <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: '#f19b02', margin: '0 3px' }}></span>
                <Typography variant='body2'>المنفذ</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: column ? 'start' : 'center',
                alignItems: 'center',
                marginX: '5px'
            }}>
                <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: 'gray', margin: '0 3px' }}></span>
                <Typography variant='body2'>المتبقي</Typography>
            </Box>
        </Grid>
    );
}

const CompletionRates = () => {
    return (
        <Grid container
            id='CompletionRatesDiv'
            sx={{
                backgroundColor: '#fff',
                borderRadius: '17px',
                boxSizing: 'border-box',
                padding: '1rem',
                minHeight: '999px'
            }}>
            {/* Complete rates in Gada */}
            <>
                <Grid item xs={12} sx={{ marginY: '0.5rem' }}>
                    <Typography fontWeight={700} fontSize={'1.2rem'} variant='h6'>نسب انجاز الاعمال بأمانة جدة</Typography>
                </Grid>
                <DoneAndReminder />
                {/* Rates */}
                <RateGridItem title="الميزانية الشبكية" val={70} />
                <RateGridItem title="تصميم شبكة الطرق" val={50} />
                <RateGridItem title="أعمال الانارة" val={40} />
                <RateGridItem title="الحدائق" val={90} />
                <RateGridItem title="تصريف مياه الامطار" val={0} />
                <RateGridItem title="الاعتماد النهائي" val={100} />
                {/* Show more btn */}
                <ShowMoreBtn />
            </>
            {/* Complete rates in Gada */}
            <>
                <Grid item xs={12} sx={{ marginY: '0.5rem' }}>
                    <Typography fontWeight={700} variant='h6'>نسب انجاز الاعمال بالجهات الخدمية</Typography>
                </Grid>
                <DoneAndReminder />
                <RateGridItem title="الشركة السعودية" val={45} />
                <RateGridItem title="تصميم شبكة الطرق" val={35} />
                <RateGridItem title="أعمال الانارة" val={75} />
                {/* Show more btn */}
                <ShowMoreBtn />
            </>
            {/* النسبة المئوية الكلية من انجاز المشروع */}
            <>
                <Grid item xs={12} sx={{ marginY: '0.5rem' }}>
                    <Typography fontWeight={800} variant='h5'>نسب انجاز الاعمال بالجهات الخدمية</Typography>
                </Grid>
                <Grid container sx={{ paddingBottom: '1rem' }}>
                    <Grid item xs={4}>
                        <DoneAndReminder column={true} />
                    </Grid>
                    <Grid item xs={8} sx={{ marginTop: '1.4rem' }}>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'start',
                            position: 'relative',
                            paddingX: '1rem'
                        }}>
                            <CircularProgress
                                style={{ width: '90px' }}
                                variant="determinate"
                                color={'primary'}
                                value={85.5} />
                            <Typography sx={{
                                position: 'absolute',
                                fontSize: '18px',
                                fontWeight: 900,
                                top: '8px',
                            }} variant='body2'>85.5%</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </>
        </Grid>
    )
};

export default CompletionRates