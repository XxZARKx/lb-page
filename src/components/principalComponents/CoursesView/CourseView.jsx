import { useParams } from "react-router-dom";
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import logo from '../../../assets/icons/logo.png'
import Buttons from "../Buttons";
import Divider from '@mui/joy/Divider'

export const ProductView = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: 'Producto 1',
      price: '$10.00',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: '$15.00',
    },
    {
      id: 3,
      name: 'Producto 3',
      price: '$20.00',
    },
    {
      id: 4,
      name: 'Producto 4',
      price: '$25.00',
    },
    {
      id: 5,
      name: 'Producto 5',
      price: '$30.00',
    },
    {
      id: 6,
      name: 'Producto 6',
      price: '$35.00',
    },
    {
      id: 7,
      name: 'Producto 7',
      price: '$40.00',
    },
  ];

  // Buscar el producto correspondiente según el ID en la URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <Container maxWidth="xl" >
        <Box sx={{width: '100%'}}>
          <img src={logo} alt="logo" style={{margin: '50px auto', display: 'block', cursor: 'pointer'}} onClick={() => window.history.back()}/>
          <Divider sx={{height: '3px'}}/>
          <Buttons/>
          <Box>
            <div>
              {/* component */}
            </div>
            <div>
              {/* component big */}
            </div>
            <article>
              <p>Asesoría Personalizada para creación de CV (con Exp/sin Exp)</p>
              <span>Asesorías</span>
              <Divider sx={{height: '2px'}}/>
              <span>Costo total</span>
              <span>S/00.00</span>
              <p>Tipo: Minutos</p>
              <div>
                <span>30 min</span>
                <span>40 min</span>
                <span>60 min</span>
              </div>
              <p>Cantidad</p>
              <span>-</span>
              <span>0</span>
              <span>+</span>
              <p>Reservar Asesoría</p>
            </article>
          </Box>
        </Box>
      </Container>
    </div>
  );
};