import { Box, Button, CircularProgress, Divider, Grid, Slider, Typography } from '@mui/material'
import './MoreDetails.scss';

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
const MoreDetailsInformation = () => {
    // declare slider marks
    const marks = [
        {
            value: 0,
            date: '22/03/2023',
            label: <>
                <Typography variant='body2' fontWeight={700}>الانتهاء من الدراسة</Typography>
                <Typography variant='body2' fontWeight={700}>22/03/2023</Typography>
            </>,
        },
        {
            value: 20,
            date: '22/03/2023',
            label: <>
                <Typography variant='body2' fontWeight={700}>الانتهاء من الدراسة</Typography>
                <Typography variant='body2' fontWeight={700}>22/03/2023</Typography>
            </>,
        },
        {
            value: 57,
            date: '22/03/2023',
            label: <>
                <Typography variant='body2' fontWeight={700}>الانتهاء من الدراسة</Typography>
                <Typography variant='body2' fontWeight={700}>22/03/2023</Typography>
            </>,
        },
        {
            value: 100,
            date: '22/03/2023',
            label: <>
                <Typography variant='body2' fontWeight={700}>الانتهاء من الدراسة</Typography>
                <Typography variant='body2' fontWeight={700}>22/03/2023</Typography>
            </>,
        },
    ];

    function valuetext(value: number) {
        return `${value}°C`;
    }
    return (
        <>
            <Grid item xs={12} sx={{ marginY: '0.5rem' }}>
                <Typography fontWeight={700} variant='h6'>نسب انجاز الاعمال بأمانة جدة</Typography>
            </Grid>
            <DoneAndReminder />
            {/* original */}
            <Grid container>
                {/* Btn */}
                <Grid item xs={12} md={2} sx={{
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
                            width: '80%',
                            height: '50px',
                        }}>
                        <Typography fontSize={16} fontWeight={500} sx={{ marginX: '0.4rem' }} variant='body2'>الميزانية الشبكية</Typography>
                    </Button>
                </Grid>
                {/* Stats */}
                <Grid item xs={12} md={7}>
                    <Grid container>
                        <Grid xs={12} sx={{ textAlign: 'center' }}>
                            <Typography fontWeight={700} variant='h6'>الخريطة الزمنية لاعمال التصريف</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container
                                className='TimmingPlanForProjectProgressBar1'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'end',
                                    minHeight: '60px'
                                }}>
                                {/* Project Start */}
                                <Grid item xs={3} sx={{
                                    width: '120px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                                    <Typography fontWeight={600} fontSize={18} variant="body2">16/12/2022</Typography>
                                </Grid>
                                {/* Progress bar */}
                                <Grid item xs={6}>
                                    <Slider
                                        aria-label="Always visible"
                                        value={60}
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
                                {/* Project endDate */}
                                <Grid item xs={3} sx={{
                                    width: '120px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                                    <Typography fontWeight={600} fontSize={18} variant="body2">16/12/2022</Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '110px'
                            }} className='marksBar'>
                                <Slider
                                    aria-label="Custom marks"
                                    value={20}
                                    valueLabelDisplay="on"
                                    onChange={() => { }}
                                    getAriaValueText={valuetext}
                                    step={10}
                                    sx={{
                                        width: '90%',
                                        fontWeight: 400,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'end',
                                        paddingBottom: '5px'
                                    }}
                                    marks={marks}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Grid container>
                        <Grid xs={12} sx={{ marginBottom: '2rem' }}>
                            <Typography fontWeight={700} variant='h6'>النسبة المئوية لانجاز البند</Typography>
                        </Grid>
                        <Grid xs={3}>
                            <DoneAndReminder column={true} />
                        </Grid>
                        <Grid item xs={9} sx={{ marginTop: '1.4rem' }}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'start',
                                position: 'relative',
                                paddingX: '2rem'
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
                </Grid>
                <Grid xs={12} sx={{ marginY: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Divider color='gray' sx={{ width: '90%' }} />
                </Grid>
            </Grid >
            {/* copies */}
            <Grid container>
                {/* Btn */}
                <Grid item xs={12} md={2} sx={{
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
                            width: '80%',
                            height: '50px',
                        }}>
                        <Typography fontSize={16} fontWeight={500} sx={{ marginX: '0.4rem' }} variant='body2'>الميزانية الشبكية</Typography>
                    </Button>
                </Grid>
                {/* Stats */}
                <Grid item xs={12} md={7}>
                    <Grid container>
                        <Grid xs={12} sx={{ textAlign: 'center' }}>
                            <Typography fontWeight={700} variant='h6'>الخريطة الزمنية لاعمال التصريف</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container
                                className='TimmingPlanForProjectProgressBar1'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'end',
                                    minHeight: '60px'
                                }}>
                                {/* Project Start */}
                                <Grid item xs={3} sx={{
                                    width: '120px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                                    <Typography fontWeight={600} fontSize={18} variant="body2">16/12/2022</Typography>
                                </Grid>
                                {/* Progress bar */}
                                <Grid item xs={6}>
                                    <Slider
                                        aria-label="Always visible"
                                        value={60}
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
                                {/* Project endDate */}
                                <Grid item xs={3} sx={{
                                    width: '120px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                                    <Typography fontWeight={600} fontSize={18} variant="body2">16/12/2022</Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '110px'
                            }} className='marksBar'>
                                <Slider
                                    aria-label="Custom marks"
                                    value={20}
                                    valueLabelDisplay="on"
                                    onChange={() => { }}
                                    getAriaValueText={valuetext}
                                    step={10}
                                    sx={{
                                        width: '90%',
                                        fontWeight: 400,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'end',
                                        paddingBottom: '5px'
                                    }}
                                    marks={marks}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Grid container>
                        <Grid xs={12} sx={{ marginBottom: '2rem' }}>
                            <Typography fontWeight={700} variant='h6'>النسبة المئوية لانجاز البند</Typography>
                        </Grid>
                        <Grid xs={3}>
                            <DoneAndReminder column={true} />
                        </Grid>
                        <Grid item xs={9} sx={{ marginTop: '1.4rem' }}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'start',
                                position: 'relative',
                                paddingX: '2rem'
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
                </Grid>
                <Grid xs={12} sx={{ marginY: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Divider color='gray' sx={{ width: '90%' }} />
                </Grid>
            </Grid >
            <Grid container>
                {/* Btn */}
                <Grid item xs={12} md={2} sx={{
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
                            width: '80%',
                            height: '50px',
                        }}>
                        <Typography fontSize={16} fontWeight={500} sx={{ marginX: '0.4rem' }} variant='body2'>الميزانية الشبكية</Typography>
                    </Button>
                </Grid>
                {/* Stats */}
                <Grid item xs={12} md={7}>
                    <Grid container>
                        <Grid xs={12} sx={{ textAlign: 'center' }}>
                            <Typography fontWeight={700} variant='h6'>الخريطة الزمنية لاعمال التصريف</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container
                                className='TimmingPlanForProjectProgressBar1'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'end',
                                    minHeight: '60px'
                                }}>
                                {/* Project Start */}
                                <Grid item xs={3} sx={{
                                    width: '120px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                                    <Typography fontWeight={600} fontSize={18} variant="body2">16/12/2022</Typography>
                                </Grid>
                                {/* Progress bar */}
                                <Grid item xs={6}>
                                    <Slider
                                        aria-label="Always visible"
                                        value={60}
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
                                {/* Project endDate */}
                                <Grid item xs={3} sx={{
                                    width: '120px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                                    <Typography fontWeight={600} fontSize={18} variant="body2">16/12/2022</Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '110px'
                            }} className='marksBar'>
                                <Slider
                                    aria-label="Custom marks"
                                    value={20}
                                    valueLabelDisplay="on"
                                    onChange={() => { }}
                                    getAriaValueText={valuetext}
                                    step={10}
                                    sx={{
                                        width: '90%',
                                        fontWeight: 400,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'end',
                                        paddingBottom: '5px'
                                    }}
                                    marks={marks}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Grid container>
                        <Grid xs={12} sx={{ marginBottom: '2rem' }}>
                            <Typography fontWeight={700} variant='h6'>النسبة المئوية لانجاز البند</Typography>
                        </Grid>
                        <Grid xs={3}>
                            <DoneAndReminder column={true} />
                        </Grid>
                        <Grid item xs={9} sx={{ marginTop: '1.4rem' }}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'start',
                                position: 'relative',
                                paddingX: '2rem'
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
                </Grid>
                <Grid xs={12} sx={{ marginY: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Divider color='gray' sx={{ width: '90%' }} />
                </Grid>
            </Grid >
            <Grid container>
                {/* Btn */}
                <Grid item xs={12} md={2} sx={{
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
                            width: '80%',
                            height: '50px',
                        }}>
                        <Typography fontSize={16} fontWeight={500} sx={{ marginX: '0.4rem' }} variant='body2'>الميزانية الشبكية</Typography>
                    </Button>
                </Grid>
                {/* Stats */}
                <Grid item xs={12} md={7}>
                    <Grid container>
                        <Grid xs={12} sx={{ textAlign: 'center' }}>
                            <Typography fontWeight={700} variant='h6'>الخريطة الزمنية لاعمال التصريف</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container
                                className='TimmingPlanForProjectProgressBar1'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'end',
                                    minHeight: '60px'
                                }}>
                                {/* Project Start */}
                                <Grid item xs={3} sx={{
                                    width: '120px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                                    <Typography fontWeight={600} fontSize={18} variant="body2">16/12/2022</Typography>
                                </Grid>
                                {/* Progress bar */}
                                <Grid item xs={6}>
                                    <Slider
                                        aria-label="Always visible"
                                        value={60}
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
                                {/* Project endDate */}
                                <Grid item xs={3} sx={{
                                    width: '120px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Typography fontWeight={400} variant="body2">بداية المشروع</Typography>
                                    <Typography fontWeight={600} fontSize={18} variant="body2">16/12/2022</Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '110px'
                            }} className='marksBar'>
                                <Slider
                                    aria-label="Custom marks"
                                    value={20}
                                    valueLabelDisplay="on"
                                    onChange={() => { }}
                                    getAriaValueText={valuetext}
                                    step={10}
                                    sx={{
                                        width: '90%',
                                        fontWeight: 400,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'end',
                                        paddingBottom: '5px'
                                    }}
                                    marks={marks}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Grid container>
                        <Grid xs={12} sx={{ marginBottom: '2rem' }}>
                            <Typography fontWeight={700} variant='h6'>النسبة المئوية لانجاز البند</Typography>
                        </Grid>
                        <Grid xs={3}>
                            <DoneAndReminder column={true} />
                        </Grid>
                        <Grid item xs={9} sx={{ marginTop: '1.4rem' }}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'start',
                                position: 'relative',
                                paddingX: '2rem'
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
                </Grid>
                <Grid xs={12} sx={{ marginY: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Divider color='gray' sx={{ width: '90%' }} />
                </Grid>
            </Grid >
        </>
    )
}

export default MoreDetailsInformation