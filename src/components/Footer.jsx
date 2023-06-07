import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/joy/Divider'
import facebookIcon from '../assets/icons/facebookIcon.png'
import instagramIcon from '../assets/icons/instagramIcon.png'
import linkedinIcon from '../assets/icons/linkedinIcon.png'
import whatsappIcon from '../assets/icons/whatsappIconGray.png'
import globeIcon from '../assets/icons/globeIcon.png'
import logo from '../assets/icons/logoBlanco.png'
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {

  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    custom: 2400, // Nuevo breakpoint personalizado
  };

  const isSmallerThan670 = useMediaQuery(`(max-width: ${breakpoints.sm + 69}px)`)

  return (
    <div>
        <Box sx={{bgcolor: '#F4F4F4', height: '100%', marginTop: '100px'}}>
          <Container maxWidth="xl" sx={{marginX: 'auto', padding: '30px 0px'}}>
            <Box sx={{display: 'flex', gap: '30px'}}>
              <div style={{backgroundColor: '#DF321A', padding:'54px 20px 40px 25px', marginTop: '5px', borderRadius: "50%", width: 'max-content', height: 'max-content'}}>
                <img src={logo} alt="logo" style={{objectFit: "contain"}}/>
              </div>
              <div style={{maxWidth:'65%'}}>
                <span style={{fontSize: '20px'}}><strong>Acerca de Laborum</strong></span>
                <span className='descripcionFooter'>
                  <p>Con una trayectoria de más de 20 años de continuo crecimiento, nos hemos convertido en el socio estratégico de las principales empresas del Perú. Creamos soluciones innovadoras que se adaptan a la necesidad de nuestros clientes, ayudándolos a encontrar a los candidatos más adecuados para su empresa.</p>
                </span>
              </div>
            </Box>
            <Divider sx={{height: '2px', bgcolor: "#DF321A", maxWidth: '97%', margin: '15px auto'}}/>
            <Box sx={{marginX: '30px', display: 'flex', gap: '100px'}}>
              <div>
                <h2><strong>Contáctanos</strong></h2>
                <p>damaris.lescano@krowdy.com</p>
                <span>+51 932 100 662 (Solo WhatsApp)</span>
              </div>
              <div>
                <h2>Síguenos</h2>
                <div style={{display: 'flex', gap: '20px', flexWrap: isSmallerThan670? 'wrap': 'nowrap'}}>
                  <span><a target='_blank' href='https://www.facebook.com' rel="noreferrer"><img src={facebookIcon} alt='redes'/></a></span>
                  <span><a target='_blank' href='https://www.instagram.com' rel="noreferrer"><img src={instagramIcon} alt='redes'/></a></span>
                  <span><a target='_blank' href='https://www.linkedin.com' rel="noreferrer"><img src={linkedinIcon} alt='redes'/></a></span>
                  <span><a target='_blank' href='https://web.whatsapp.com' rel="noreferrer"><img src={whatsappIcon} alt='redes'/></a></span>
                  <span><a target='_blank' href='https://www.google.com' rel="noreferrer"><img src={globeIcon} alt='redes'/></a></span>
                </div>
              </div>
            </Box>
          </Container>
        </Box>
    </div>
  )
}

export default Footer