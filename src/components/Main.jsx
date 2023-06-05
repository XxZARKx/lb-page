import { Container } from '@mui/material';
import Buttons from './principalComponents/Buttons';
import CardsCourses from './principalComponents/CardsCourses'
import Divider from '@mui/joy/Divider'
import GroupCourses from './principalComponents/GroupCourses';
import { firstCarouselCourses, bootcampCarousel, asesoriaCarousel } from '../data/CoursesData'
import { settingsFourElements } from './principalComponents/carouselSettings/settings';
import { settingsThreeElements } from "../components/principalComponents/carouselSettings/settings";
import Toolbar from '@mui/material/Toolbar';



export default function NestedGrid() {

  return (
    <Container maxWidth='xl'>
        <Buttons/>
        <CardsCourses courses={firstCarouselCourses} settings={settingsFourElements}/>
        <Divider sx={{height: '3px', backgroundColor: '#f4f4f4', marginY: '30px'}}/>
        <h2 style={{textAlign: 'center', fontSize: '35px'}}>#EmpleabilidadLaborum </h2>
        <Divider sx={{height: '3px', backgroundColor: '#f4f4f4', marginY: '30px'}}/>
        <GroupCourses courses={bootcampCarousel} settings={settingsThreeElements} color={'#FFC000'} imgSrc={'src/assets/icons/peopleIconBlack.png'} type={'BOOTCAMPS'} />
        <Toolbar/>
        <GroupCourses courses={asesoriaCarousel} settings={settingsThreeElements} color={'#DF321A'} imgSrc={'src/assets/icons/chatIconBlack.png'} type={'ASESORÍAS'} />
    </Container>
  );
}
