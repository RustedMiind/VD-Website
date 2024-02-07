import { Box, Button, Card, Typography } from '@mui/material';
import Img from '../../../../assets/images/IPB.png';
import './ProjectCard.scss';
import { useNavigate } from 'react-router-dom';

const ProjectCard = (props: propsType) => {
    const Navigator = useNavigate();
    let { id, name } = props;

    return (
        <Card sx={{ width: 364, height: 194, borderRadius: '13px', margin: '0.5rem' }}>
            <Box
                id="ProjectBoxCard"
                sx={{
                    cursor: 'pointer',
                    height: 194,
                    backgroundImage: `url(${Img})`,
                    backgroundSize: '100% 100%',
                    display: 'flex',
                    alignItems: 'end'
                }}>
                <Box className='projectDivHover'>
                    <Button onClick={() => Navigator(`/Infrastructure_projects/show/${id}`)} variant='contained' style={{ backgroundColor: '#f19b02', color: '#fff' }}>الاستعراض</Button>
                    <Button onClick={() => Navigator(`/Infrastructure_projects/details/${id}`)} variant='contained' style={{ backgroundColor: '#fff', color: '#004693' }}>التفاصيل</Button>
                </Box>
                <Typography color='white' style={{ padding: '3px' }} className='ProjectName'>Project Name</Typography>
            </Box>
        </Card>
    )
};

type propsType = {
    id: number,
    name: string
}

export default ProjectCard