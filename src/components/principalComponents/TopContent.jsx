import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';


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

const TopContent = () => {

    return(
        <div>
          <CssBaseline />
            <TopText />
            <Toolbar />
        </div>
    )
}

export default TopContent

// eslint-disable-next-line react/prop-types
export const TopText = () => {
  return(
    <HideOnScroll>
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
  )
}
