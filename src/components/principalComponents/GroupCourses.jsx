import { Box } from "@mui/material"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CardsCourses from "./CardsCourses";


// eslint-disable-next-line react/prop-types
const GroupCourses = ({courses, settings, color, imgSrc, type}) => {
  return (
    <div>
        <Box sx={{width: '85%', height: '600px', border: `4px solid ${color}`, borderRadius: '20px', margin: '100px auto 0 auto', position: 'relative'}}>
                <ListItem  sx={{bgcolor: '#ffff', borderRadius: '100px', border: `4px solid ${color}`, padding: '4px 12px', position: 'absolute', left:'50px', top: '-30px', width: 'max-content'}}>
                    <ListItemAvatar>
                    <Avatar sx={{backgroundColor: 'transparent', padding:'10px', overflow: 'visible'}}>
                        <img src={imgSrc} style={{width: '45px', height: '35px', objectFit:'contain'}}/>
                    </Avatar>
                    </ListItemAvatar>
                <ListItemText primary={type} primaryTypographyProps={{ fontSize: 25 , fontWeight: 'bold'}}/>
                </ListItem>
                <Box sx={{marginTop: '80px', transform: 'scale(1.1)', marginX: '50px'}}>
                    <CardsCourses courses={courses} settings={settings}/>
                </Box>
        </Box>  
    </div>
  )
}

export default GroupCourses