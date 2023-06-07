import { Box } from "@mui/material"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CardsCourses from "./CardsCourses";
import useMediaQuery from '@mui/material/useMediaQuery';


// eslint-disable-next-line react/prop-types
const GroupCourses = ({courses, settings, color, imgSrc, type}) => {

  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    custom: 2400, // Nuevo breakpoint personalizado
  };

  const isSmallerThan1180 = useMediaQuery(`(max-width: ${breakpoints.lg - 101}px)`)

  return (
    <div>
        <Box sx={{width: {xl:'95%', lg: '80%', xs: isSmallerThan1180? '60%' : '80%'}, height: '600px', border: `2px solid ${color}`, borderRadius: '20px', margin: '100px auto 0 auto', position: 'relative'}}>
                <ListItem  sx={{bgcolor: '#ffff', borderRadius: '100px', border: `2px solid ${color}`, padding: '4px 12px', position: 'absolute', left:'50px', top: '-30px', width: 'max-content'}}>
                    <ListItemAvatar>
                    <Avatar sx={{backgroundColor: 'transparent', padding:'10px', overflow: 'visible'}}>
                        <img src={imgSrc} style={{width: '45px', height: '35px', objectFit:'contain'}}/>
                    </Avatar>
                    </ListItemAvatar>
                <ListItemText primary={type} primaryTypographyProps={{ fontSize: 25 , fontWeight: 'bold'}}/>
                </ListItem>
                <Box sx={{marginTop: '100px', transform: {xl:'scale(1.1)', lg: 'scale(1.18)'}, marginX: '50px'}}>
                    <CardsCourses courses={courses} settings={settings}/>
                </Box>
        </Box>  
    </div>
  )
}

export default GroupCourses