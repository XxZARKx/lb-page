import Buttons from './Buttons';
import { Banner } from './Banner';
import CardsCourses from './CardsCourses'
import Divider from '@mui/joy/Divider'
import GroupCourses from './GroupCourses';
import { Container } from '@mui/material';
import { firstCarouselCourses, bootcampCarousel, asesoriaCarousel } from '../../data/CoursesData'
import { settingsFourElements, settingsThreeElements } from '../../components/principalComponents/carouselSettings/settings';
import Toolbar from '@mui/material/Toolbar';
import peopleIcon from '../../assets/icons/peopleIconBlack.png'
import chatIcon from '../../assets/icons/chatIconBlack.png'
import { useRef } from 'react';

const MainViewComponents = () => {

    const elemento1Ref = useRef(null);
    const elemento2Ref = useRef(null);

  return (
    <div>
        <Banner/>
        <Container maxWidth='xl'>
        <Buttons scrollToElement1={elemento1Ref} scrollToElement2={elemento2Ref}/>
          <CardsCourses courses={firstCarouselCourses} settings={settingsFourElements}/>
        <Divider sx={{height: '3px', backgroundColor: '#f4f4f4', marginY: '30px'}}/>
        <h2 style={{textAlign: 'center', fontSize: '35px'}}>#EmpleabilidadLaborum </h2>
        <Divider sx={{height: '3px', backgroundColor: '#f4f4f4', marginY: '30px'}}/>
        <div ref={elemento1Ref}>
          <GroupCourses courses={bootcampCarousel} settings={settingsThreeElements} color={'#FFC000'} imgSrc={peopleIcon} alt="bootcamps" type={'BOOTCAMPS'} />
        </div>
        <Toolbar/>
        <div ref={elemento2Ref}>
          <GroupCourses courses={asesoriaCarousel} settings={settingsThreeElements} color={'#DF321A'} imgSrc={chatIcon} alt="asesorias" type={'ASESORÍAS'} />
        </div>
        </Container>
    </div>
  )
}

export default MainViewComponents