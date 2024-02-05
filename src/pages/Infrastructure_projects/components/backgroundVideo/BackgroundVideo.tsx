import React from 'react';
import introVideo from "assets/videos/bg-video.mp4";
import introVideoMobile from "assets/videos/bg-mobile.mp4";
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BackgroundVideo: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="intro-section">
            <video className="intro-background screen" loop autoPlay muted>
                <source src={introVideo} type="video/mp4" />
            </video>
            <video className="intro-background mobile" loop autoPlay muted>
                <source src={introVideoMobile} type="video/mp4" />
            </video>
            {/* <img src={bgImage} className="intro-background" alt="" /> */}
            <div className="intro-page-content" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                <Typography variant="h2">{t("InfrastructureProjects.mainPageTitle")}</Typography>
            </div>
        </div>
    );
};

export default BackgroundVideo;