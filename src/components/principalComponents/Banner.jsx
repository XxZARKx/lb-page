import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme, useMediaQuery } from '@mui/material';
import banner from '../../assets/BANNER.png'

export const Banner = () => {
  
    const theme = useTheme();
    const isSmallerThan600 = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <div style={{backgroundColor: '#3A3A3AB2', width:'100%'}}>
        <Container maxWidth="xl" sx={{overflow: 'auto'}}>
            <Box sx={{height: 'max-content', marginTop: isSmallerThan600 ? '40px' : '0' }}>
              <img src={banner} alt="banner" style={{width: '100%', display: 'block'}}/>
            </Box>
          </Container>
      </div>
    );
  }