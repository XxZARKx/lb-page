import { useParams } from "react-router-dom";
import { Container, Box } from '@mui/material';
import logo from '../../../assets/icons/logo.png'
import Buttons from "../Buttons";
import Divider from '@mui/joy/Divider'
import { products } from "../../../data/CoursesPreviewData";
import CardsCourses from "../CardsCourses";
import { firstCarouselCourses, bootcampCarousel, asesoriaCarousel } from '../../../data/CoursesData'

export const ProductView = () => {
  const { id } = useParams();

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
              <CardsCourses courses={bootcampCarousel}/>
            </div>
            <div>
              {product.id}
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