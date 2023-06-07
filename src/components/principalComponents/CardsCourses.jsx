/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slider from "react-slick";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import camera from '../../assets/icons/camera.png'
import redcamera from '../../assets/icons/redCamera.png'
import logo from '../../assets/icons/logo.png'
import { Link } from "react-router-dom";

const CardsCourses = ({courses, settings}) => {


  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    custom: 2400, // Nuevo breakpoint personalizado
  };

  const isSmallerThan350 = useMediaQuery(`(max-width: ${breakpoints.sm - 251}px)`)

  return (
            <Container maxWidth={"xl"} >
                <Box textAlign={'center'}>
                    <Slider {...settings}>
                        {
                            courses.map(course => (
                                <Box key={course.id}>
                                    <Link to={`/courses/${course.id}`}>
                                        <CardActionArea sx={{ maxWidth: '330px',padding: '0', boxShadow: 'none', border: 'none'}}>
                                            <Box sx={{maxHeight: '330px', height: '330px', overflow: 'hidden', borderRadius: '15px', bgcolor: '#ebebed'}}>
                                                <Box className="fondoCuadriculado" padding={{xs: isSmallerThan350? '30px 0 15px 0' : '23px 20px', sm:'20px 20px 10px 20px'}} sx={{height:'45%', bgcolor: course.bgRed? '#DF321A' : '#FE7542', width:'100%', textTransform: 'uppercase', color: 'white', textAlign: isSmallerThan350? 'center' : 'end', overflow: 'hidden'}}>
                                                    <Paragraph fSizes1={'15px'} fSizes2={'24px'} fSizesSm={'21px'} lHeight={'30px'} infoPersonalized={"courseType"} info={course.type}/> 
                                                    <Paragraph fSizes1={'20px'} fSizes2={'29px'} fSizesSm={'33px'} info={course.objetive} infoPersonalized={"courseType"}/>
                                                    <Paragraph fSizes1={'31px'} fSizes2={'40px'} fSizesSm={'44px'} lHeight={'40px'} tColor={'transparent'} info={course.method} infoPersonalized={"noBgText"}/> 
                                                </Box>
                                                <Box  sx={{padding: '20px 10px 20px 20px', height: '55%', position: 'relative'}}>
                                                    <img src={course.src} alt="person" style={{width: course.widthImage === 'default'? '60%' : course.widthImage, objectFit: 'contain', position: 'absolute', left: 0, bottom: 0}}/>
                                                    <div style={{width:'50%', textAlign: course.align, fontSize: '10px', marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '35px', color: 'black'}}>
                                                        <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#ffff', borderRadius: '10px', width: '120px', height: '35px', position: 'absolute', right: 15, top: 10}}>
                                                            <img src={course.redCamera? redcamera : camera} style={{width: '25px', objectFit: 'contain', margin: '0 10px'}}/>
                                                            <span style={{ fontSize: 18 , fontWeight: 'bold'}}>ONLINE</span>
                                                        </div>
                                                        {course.list ? (
                                                            <ul className="descripcion" style={{fontSize: 9, fontWeight: 'bold', padding: '0 0 0 30px'}}>
                                                                {course.listItems.map((element, index) => (
                                                                <li key={index}>{element}</li>
                                                                ))}
                                                            </ul>
                                                            ) : (
                                                                <span style={{maxWidth: '100%', maxHeight: '100px'}}>
                                                                <p className="descripcion" style={{paddingLeft: '30px', fontSize: '9px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: "wrap", fontWeight: 'bold'}}>{course.description}</p>
                                                            </span>
                                                        )}
                                                        <img src={logo} alt="logo" style={{width: '30%', position: 'absolute', right: 20, bottom: 20}}/>
                                                    </div>
                                                </Box>
                                            </Box>
                                            <CardContent>
                                            <Typography className="miniDescription" level="body2" sx={{textAlign: 'start', fontWeight: 'bold', fontFamily: 'Catamaran, sans-serif', fontSize: '20px', wordBreak: 'break-word', color: 'black'}}>{course.miniDescription}</Typography>
                                                <Typography sx={{textAlign: 'start', fontWeight: 'bold', fontFamily: 'Catamaran, sans-serif', fontSize: '20px', wordBreak: 'break-word', color: 'black'}}>
                                                    {course.price}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </Box>
                            ))
                        }
                    </Slider>
                </Box>
            </Container>
  )
}

export default CardsCourses

const Paragraph = ({fSizes1, fSizes2, fSizesSm, lHeight, tColor, info, infoPersonalized}) => {

    const breakpoints = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        custom: 2400, // Nuevo breakpoint personalizado
      };
    
      const isSmallerThan350 = useMediaQuery(`(max-width: ${breakpoints.sm - 251}px)`)

    return (
        <Typography 
        fontSize={{xs: isSmallerThan350? fSizes1 : fSizes2, sm: fSizesSm}} 
        sx={{margin: '0', fontWeight: '800', fontFamily: 'Catamaran, sans-serif', lineHeight: lHeight, color: tColor}}
        className={infoPersonalized}
        >
            {info}
        </Typography>
    )
}