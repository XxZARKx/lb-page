import React from 'react'
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/joy/Divider'

const Footer = () => {
  return (
    <div>
        <Box sx={{bgcolor: '#F4F4F4', height: '100%', marginTop: '100px'}}>
          <Container maxWidth="xl" sx={{marginX: 'auto', padding: '30px 0px'}}>
            <Box sx={{display: 'flex', gap: '30px'}}>
              <div style={{backgroundColor: '#DF321A', padding:'54px 20px 40px 25px', marginTop: '5px', borderRadius: "50%", width: 'max-content', height: 'max-content'}}>
                <img src='src/assets/icons/logoBlanco.png' style={{objectFit: "cover"}}/>
              </div>
              <div style={{maxWidth:'70%'}}>
                <span style={{fontSize: '20px'}}><strong>Acerca de Laborum</strong></span>
                <p>Con una trayectoria de más de 20 años de continuo crecimiento, nos hemos convertido en el socio estratégico de las principales empresas del Perú. Creamos soluciones innovadoras que se adaptan a la necesidad de nuestros clientes, ayudándolos a encontrar a los candidatos más adecuados para su empresa.</p>
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
                <div>
                  <span><img src='src/assets/icons/facebookIcon.png' alt='redes'/></span>
                  <span><img src='src/assets/icons/instagramIcon.png' alt='redes'/></span>
                  <span><img src='src/assets/icons/linkedinIcon.png' alt='redes'/></span>
                  <span><img src='src/assets/icons/whatsappIconGray.png' alt='redes'/></span>
                  <span><img src='src/assets/icons/globeIcon.png' alt='redes'/></span>
                </div>
              </div>
            </Box>
          </Container>
        </Box>
    </div>
  )
}

export default Footer