import { Box, Button, TextField, Typography } from "@mui/material"
import BackgroundVideo from "./components/backgroundVideo/BackgroundVideo"
import ProjectCard from "./components/ProjectCard/ProjectCard"
import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './index.scss';
import { useTranslation } from "react-i18next";

const Infrastructure_projects_Page = () => {
    // declare state
    const [activeSubTitle, setActiveSubTitle] = useState<string>('all');
    const [searchKey, setSearchKey] = useState<string>('');
    const { t } = useTranslation();
    const searchLabelVal: JSX.Element = (<Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SearchOutlinedIcon />
        <span>{t("InfrastructureProjects.buttons.search")}</span>
    </Box>);
    const [searchLabel, setSearchLabel] = useState<JSX.Element | string>(searchLabelVal);

    const subTitles = [
        { id: 1, title: t("InfrastructureProjects.subTitles.all"), tag: 'all' },
        { id: 2, title: t("InfrastructureProjects.subTitles.specialCharts"), tag: 'all1' },
        { id: 3, title: t("InfrastructureProjects.subTitles.waterStudies"), tag: 'all2' },
        { id: 4, title: t("InfrastructureProjects.subTitles.categoryTitle"), tag: 'all3' },
    ];
    const projects = [
        { id: 1, name: 'project 1' },
        { id: 2, name: 'project 2' },
        { id: 3, name: 'project 3' },
        { id: 4, name: 'project 4' },
        { id: 5, name: 'project 5' },
        { id: 6, name: 'project 6' },
    ];
    let singleLink = subTitles.map(ele => {
        return <Button
            onClick={() => setActiveSubTitle(ele.tag)}
            variant={activeSubTitle === ele.tag ? 'contained' : 'text'}
            className={activeSubTitle === ele.tag ? 'active' : ''}>{ele?.title}</Button>
    });

    return (
        <Box id='InfrestructrueMainPage' sx={{ margin: 0, padding: 0 }}>
            <BackgroundVideo />
            {/* sub titles links */}
            <Box className='InfrastructureProjectsSubTitlesContainer'>
                <Box
                    className='InfrastructureProjectsSubTitles'>
                    {singleLink}
                </Box>
            </Box>
            {/* header and search field */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box style={{ display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', margin: '3rem 0' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>{t("InfrastructureProjects.buttons.showAllPlans")}</Typography>
                    <TextField
                        label={searchLabel}
                        onFocus={() => {
                            setSearchLabel('');
                        }}
                        onBlur={() => {
                            if (searchKey.trim().length === 0)
                                setSearchLabel(searchLabelVal)
                            else
                                setSearchKey('')
                        }}
                        onChange={e => setSearchKey(e.target.value)}
                        sx={{
                            borderRadius: '35px',
                            height: ' 50px',
                            color: '#004693',
                            border: '1px solid #004693',
                            outline: 'none'
                        }}
                    />
                </Box>
            </Box>
            {/* projects' cards */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5rem' }}>
                <Box style={{ boxSizing: 'border-box', display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    {
                        projects.map(p => <ProjectCard key={p.id} id={p.id} name={p.name} />)
                    }
                </Box>
            </Box>
            <Box className="pyramid-container">
                <Box id="pyramid-level-3" className="pyramid-level"></Box>
            </Box>
        </Box>
    )
}

export default Infrastructure_projects_Page