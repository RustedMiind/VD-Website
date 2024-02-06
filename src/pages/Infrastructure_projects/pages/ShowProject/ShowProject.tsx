import storage from 'methods/storage';
import PageBannerLayout, { PageBannerDataType } from 'pages/page-banner-layout/PageBannerLayout';
import { useTranslation } from 'react-i18next';
import bgImg from '../../../../assets/images/IPB.png';
import { Box, Grid, Typography } from '@mui/material';
import ProjectInformation from './components/ProjectInformation';
import MapAndImagesPart from './components/MapAndImagesPart';

const ShowProject = () => {
    // declare our state
    const { t } = useTranslation();
    let project = {
        name: 'مخطط 1',
    };
    return (
        <>
            {/* banner image */}
            <div
                style={{
                    width: '100%',
                    height: '495px',
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: '100% 100%',
                    padding: 0,
                    marginBottom: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h3' color='white' sx={{ fontWeight: 800 }}>{project.name}</Typography>
            </div>
            <Box style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
                margin: '3rem auto'
            }}>
                <Grid container sx={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Grid item xs={12} md={6}>
                        <ProjectInformation />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MapAndImagesPart />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ShowProject;