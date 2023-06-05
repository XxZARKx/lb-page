import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import { useTheme, useMediaQuery } from '@mui/material';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const TopContent = (props) => {

  const theme = useTheme();
  const isSmallerThan600 = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: '#F4F4F4', boxShadow: 'none'}}>
          <Toolbar sx={{ justifyContent: 'center'}}>
            <Grid item xs={12}>
            <Typography variant="h6" component="div" align="center" style={{fontFamily: 'Catamaran, sans-serif', color: 'black', fontWeight: '400'}}>
            Utiliza el código <strong>EmpleabilidadLaborum</strong> y obtén 10% de descuento en todos los productos
            </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
        <Toolbar/>
      <Container maxWidth="xl" sx={{overflow: 'auto'}}>
        <Box sx={{height: 'max-content', marginTop: isSmallerThan600 ? '40px' : '0' }}>
          <img src='src/assets/BANNER.png' alt="banner" style={{width: '100%', display: 'block'}}/>
        </Box>
      </Container>
      </div>
    )
}

export default TopContent