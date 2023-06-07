import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import whatsappIcon from '../../assets/icons/whatsappIcon.png'
import peopleIcon from '../../assets/icons/peopleIcon.png'
import chatIcon from '../../assets/icons/chatIcon.png'

// eslint-disable-next-line react/prop-types
const Buttons = ({ scrollToElement1, scrollToElement2}) => {
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 50,
            behavior: 'smooth',
        })
    }
    
    return(
        <Box sx={{ flexGrow: 1, color:'white', padding: '50px 0 50px 0' }}>
        <Grid container spacing={2}>
            <Grid
            xs={12}
            container
            justifyContent='space-between'
            alignItems='center'
            flexDirection={{ xs: 'column', sm: 'row' }}
            sx={{ fontSize: '12px' }}
            >
            <Grid sx={{ order: { xs: 2, sm: 2 } }}>
                <ListItem sx={{bgcolor: 'white', borderRadius: '100px', border: '2px solid black', padding: '4px 12px'}}>
                <ListItemText primary="Contáctanos"  sx={{color: 'black'}}/>
                <ListItemAvatar>
                    <Avatar sx={{backgroundColor: 'transparent', marginLeft: '10px'}}>
                        <img src={whatsappIcon} />
                    </Avatar>
                </ListItemAvatar>
                </ListItem>
            </Grid>
            <Grid justifyContent={'center'} container columnSpacing={3} sx={{ order: { xs: 1, sm: 1 } }}>
                <Grid>
                    <ListItem onClick={() => scrollToSection(scrollToElement1)} sx={{bgcolor: '#FFC000', borderRadius: '100px', border: '2px solid #FFC000', padding: '4px 12px', cursor: 'pointer'}}>
                    <ListItemAvatar>
                        <Avatar sx={{backgroundColor: 'transparent'}}>
                            <img src={peopleIcon} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="BOOTCAMPS"/>
                    </ListItem>
                </Grid>
                <Grid>
                    <ListItem onClick={() => scrollToSection(scrollToElement2)} sx={{bgcolor: '#DF321A', borderRadius: '100px', border: '2px solid #DF321A', padding: '4px 12px', cursor: 'pointer'}}>
                    <ListItemAvatar>
                        <Avatar sx={{backgroundColor: 'transparent'}}>
                            <img src={chatIcon} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="ASESORÍAS"/>
                    </ListItem>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        </Box>
    )
}

export default Buttons