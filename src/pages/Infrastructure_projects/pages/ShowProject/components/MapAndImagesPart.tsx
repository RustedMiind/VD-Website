import { Button, Grid, Typography } from '@mui/material'
import GoOgleMap from './GoogleMap'
import ImagesGallery from './ImagesGallery'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const MapAndImagesPart = () => {
    const { t } = useTranslation();
    const navigator = useNavigate();

    return (
        <Grid container style={{
            width: '100%',
            padding: '0 0.3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid container sx={{ width: '90%' }}>
                <Grid sx={{ marginY: '1rem' }} item xs={12}>
                    <Button
                        sx={{
                            borderRadius: '24px',
                            backgroundColor: '#3169a7',
                            float: 'right'
                        }}
                        onClick={() => navigator('/Infrastructure_projects/details/9')}
                        variant='contained'>
                        {t("InfrastructureProjects.buttons.showAllDetails")}
                    </Button>
                </Grid>
                <Grid sx={{ marginY: '0.5rem' }} item xs={12}>
                    <Typography sx={{ marginY: '0.3rem', paddingX: '0.3rem' }} variant='h5' fontWeight={700}>{t("InfrastructureProjects.showPage.map")}</Typography>
                </Grid>
                <Grid item xs={12}>
                    {/* <MapWrapper coOrdinates={{ lat: 21.422510, lng: 39.826168 }} /> */}
                    <GoOgleMap />
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <ImagesGallery />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MapAndImagesPart