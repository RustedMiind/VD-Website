import { Box, Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import './ProjectInformation.scss';
import { Printer, Whatsapp } from "react-bootstrap-icons";
import WayImage from '../../../../../assets/images/infrestructurePeojectsImages/way.png';
import lightImage from '../../../../../assets/images/infrestructurePeojectsImages/light.png';
import soilImage from '../../../../../assets/images/infrestructurePeojectsImages/soil.png';
import WaterImage from '../../../../../assets/images/infrestructurePeojectsImages/water.png';
import outsidePartnerImg1 from '../../../../../assets/images/infrestructurePeojectsImages/outsidePartner1.png';
import outsidePartnerImg2 from '../../../../../assets/images/infrestructurePeojectsImages/outsidePartner2.png';
import outsidePartnerImg3 from '../../../../../assets/images/infrestructurePeojectsImages/outsidePartner3.png';
// import { CircularProgressbar } from 'react-circular-progressbar';

const GridItem = ({ title, val, mdw, sxw, fullLine }: { title: string, val: string, mdw: number, sxw: number, fullLine: boolean }) => {
    if (!fullLine)
        return <Grid item
            xs={sxw} md={mdw}
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '21.5px',
                fontFamily: 'Cairo'
            }} variant='h5'>{title}</Typography>
            <Typography sx={{
                fontWeight: 400,
                fontSize: '21.5px',
                fontFamily: 'Cairo'
            }} variant='body2'>{val}</Typography>
        </Grid>;

    return <Grid item
        xs={sxw} md={mdw}
        sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
        <Box sx={{
            width: '33%',
            display: 'flex',
            justifyContent: 'start',
            paddingLeft: '1.6rem'
        }}>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '21.5px',
                fontFamily: 'Cairo'
            }} variant='h5'>{title}</Typography>
        </Box>
        <Box sx={{
            width: '65%',
            display: 'flex',
            justifyContent: 'start'
        }}>
            <Typography sx={{
                fontWeight: 400,
                fontSize: '21.5px',
                fontFamily: 'Cairo'
            }} variant='body2'>{val}</Typography>
        </Box>
    </Grid>;
}
const GridItemInDetails = ({ title, subTitile, items }: { title: string, subTitile?: string, items: { id: number, src: string, title?: string, val: number, short?: boolean }[] }) => {
    return <Grid item
        xs={12}
        sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
        <Box sx={{
            width: '33%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%',
            paddingLeft: '1.6rem'
        }}>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '21.5px',
                fontFamily: 'Cairo'
            }} variant='h5'>{title}</Typography>
            {
                subTitile && <>
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: '21.5px',
                        fontFamily: 'Cairo'
                    }} variant='h5'>{subTitile}</Typography>
                </>
            }
        </Box>
        <Box sx={{
            width: '65%',
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            {
                items.map(ele => {
                    return (
                        <Box key={ele?.id} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            {
                                !ele.short && <Typography fontSize={16} fontWeight={400}>{ele.title}</Typography>
                            }
                            <Box sx={{ height: '70px' }}>
                                <Box sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        style={{
                                            width: !ele.short ? '50px' : '110px',
                                            height: '50px',
                                            borderRadius: !ele.short ? '50%' : '5px',
                                            padding: '8px',
                                            position: 'absolute',
                                            top: '0px'
                                        }}
                                        src={ele.src}
                                        alt={ele.title} />
                                    {
                                        !ele.short &&
                                        <CircularProgress
                                            sx={{
                                                position: 'absolute',
                                                top: '4px'
                                            }}
                                            variant="determinate"
                                            value={ele.val} />
                                    }
                                </Box>
                            </Box>
                            <Typography fontSize={16} fontWeight={700} color={ele.short ? '#f19b02' : '#3169a7'}>% {ele.val}</Typography>
                        </Box>
                    );
                })
            }
        </Box>
    </Grid>;
}

const ProjectInformation = () => {
    let workItems = [
        { id: 1, title: 'الاسفلت', val: 80, src: WayImage },
        { id: 2, title: 'الانارة', val: 50, src: lightImage },
        { id: 3, title: 'المياة', val: 100, src: WaterImage },
        { id: 4, title: 'المياة', val: 20, src: WaterImage },
        { id: 5, title: 'التربة', val: 80, src: soilImage },
    ];
    let workItems2 = [
        { id: 1, val: 80, src: outsidePartnerImg1, short: true },
        { id: 2, val: 50, src: outsidePartnerImg2, short: true },
        { id: 3, val: 100, src: outsidePartnerImg3, short: true },
    ];
    return (
        <>
            <Box style={{ width: '100%' }}>
                <Typography variant='h4' sx={{ marginY: '1rem' }} fontSize={'1.88rem'} fontWeight={700}>استعراض مخطط 604</Typography>
            </Box>
            <Grid container style={{ width: '100%' }}>
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItem fullLine={false} title='اسم المخطط' val='اسم المشروع' mdw={6} sxw={12} />
                    <GridItem fullLine={false} title='عدد القطع' val='12' mdw={6} sxw={12} />
                </Grid>
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItem fullLine={false} title='الموقع' val='الشمالية - مدينة جدة' mdw={6} sxw={12} />
                    <GridItem fullLine={false} title='رقم داعم' val='12' mdw={6} sxw={12} />
                </Grid>
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItem fullLine={true} title='المساحة' val='12' mdw={12} sxw={12} />
                </Grid>
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItem fullLine={true} title='نظام البناء' val='تقليدي' mdw={12} sxw={12} />
                </Grid>
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItem fullLine={true} title='المالك' val='مساحة لكتابة اسم' mdw={12} sxw={12} />
                </Grid>
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItem fullLine={true} title='المكتب الهندسي' val='مساحة لكتابة اسم' mdw={12} sxw={12} />
                </Grid>
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItem fullLine={true} title='المقاول المنفذ' val='كتابة خط وهمي هنا' mdw={12} sxw={12} />
                </Grid>
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItemInDetails title='الاعمال' subTitile='نسبة الانجاز' items={workItems} />
                </Grid>
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItemInDetails title='الجهات الخارجية' items={workItems2} />
                </Grid>
                <Grid container className='showProjectInfoRowOfdata'>
                    <Grid item
                        xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }}>
                        <Box sx={{
                            width: '33%',
                            display: 'flex',
                            justifyContent: 'start',
                            paddingLeft: '1.6rem'
                        }}>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: '21.5px',
                                fontFamily: 'Cairo'
                            }} variant='h5'>
                                نسبة الإنجاز الكلية <br />للتنفيذ
                            </Typography>
                        </Box>
                        <Box sx={{
                            width: '65%',
                            display: 'flex',
                            justifyContent: 'start',
                            position: 'relative'
                        }}>
                            <CircularProgress
                                style={{ width: '70px' }}
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
                <Grid container className='showProjectInfoRowOfdata'>
                    <GridItem fullLine={true} title='الاعمال المتبقية / اخر اجراء' val='كتابة خط وهمي هنا' mdw={12} sxw={12} />
                </Grid>
                <Grid container>
                    <Button variant="contained" sx={{
                        width: '80%',
                        margin: '1rem auto',
                        backgroundColor: '#3169a7'
                    }}>
                        <Printer />
                        <Typography sx={{ marginX: '0.4rem' }} variant='body2'>طباعة</Typography>
                    </Button>
                    <Box
                        sx={{
                            width: '100%',
                            margin: '1rem auto',
                            textAlign: 'center',
                            marginTop: '2rem'
                        }}>
                        <Typography variant='h6'>تواصل معنا</Typography>
                        <Typography variant='body2'>
                            اضغط على الزر و اكتب استفسارك مباشرة على الواتساب وسيقوم فريق العمل بالرد عليك في اقرب وقت
                        </Typography>
                    </Box>
                    <Button variant="contained" sx={{
                        width: '80%',
                        margin: '0 auto 1rem',
                        backgroundColor: '#03c827'
                    }}>
                        <Typography sx={{ marginX: '0.4rem' }} variant='body2'>WhatsApp</Typography>
                        <Whatsapp />
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default ProjectInformation