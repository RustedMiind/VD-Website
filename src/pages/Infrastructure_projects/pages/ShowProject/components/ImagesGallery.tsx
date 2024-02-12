import { useTranslation } from 'react-i18next';
import imgSrc from '../../../../../assets/images/IPB.png';
import { Box, Grid, Typography } from '@mui/material';

const ImagesGallery = () => {
    const { t } = useTranslation();
    let images = [
        { id: 1, src: imgSrc },
        { id: 2, src: imgSrc },
        { id: 3, src: imgSrc },
        { id: 4, src: imgSrc },
        { id: 5, src: imgSrc },
        { id: 6, src: imgSrc },
        { id: 7, src: imgSrc },
    ];
    let more = images.length > 6, imagesArr = images;
    if (more) imagesArr = images.slice(0, 5);

    return (
        <Grid container sx={{ width: '95%' }}>
            {
                imagesArr.map(ele => {
                    return (
                        <Grid key={ele.id} item xs={12} md={6} sx={{ padding: '0.2rem' }}>
                            <img
                                src={ele.src}
                                style={{ margin: '4px', borderRadius: '12px' }}
                                width='100%'
                                height='240px'
                                alt='Image' />
                        </Grid>
                    );
                })
            }
            {
                more &&
                <Grid item xs={12} md={6} sx={{ padding: '0.2rem' }}>
                    <Box style={{
                        height: '240px',
                        width: '100%',
                        margin: '4px',
                        borderRadius: '12px',
                        backgroundImage: `url(${images[5].src})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <Box style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: '12px',
                            backgroundColor: '#565454ab',
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            color: '#fff'
                        }}>
                            <Typography variant='body2'>
                                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>5+</span>
                                <br />
                                {t("InfrastructureProjects.showPage.more")}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            }
        </Grid>
    )
}

export default ImagesGallery;