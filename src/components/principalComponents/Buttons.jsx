import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Buttons = () => {
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
                <ListItemText primary="Contactanos"  sx={{color: 'black'}}/>
                <ListItemAvatar>
                    <Avatar sx={{backgroundColor: 'transparent', marginLeft: '10px'}}>
                        <img src='src/assets/icons/whatsappIcon.png' />
                    </Avatar>
                </ListItemAvatar>
                </ListItem>
            </Grid>
            <Grid justifyContent={'center'} container columnSpacing={3} sx={{ order: { xs: 1, sm: 1 } }}>
                <Grid>
                    <ListItem sx={{bgcolor: '#FFC000', borderRadius: '100px', border: '2px solid #FFC000', padding: '4px 12px'}}>
                    <ListItemAvatar>
                        <Avatar sx={{backgroundColor: 'transparent'}}>
                            <img src='src/assets/icons/peopleIcon.png' />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Bootcamps"/>
                    </ListItem>
                </Grid>
                <Grid>
                    <ListItem sx={{bgcolor: '#DF321A', borderRadius: '100px', border: '2px solid #DF321A', padding: '4px 12px'}}>
                    <ListItemAvatar>
                        <Avatar sx={{backgroundColor: 'transparent'}}>
                            <img src='src/assets/icons/chatIcon.png' />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Asesorias"/>
                    </ListItem>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        </Box>
    )
}

export default Buttons