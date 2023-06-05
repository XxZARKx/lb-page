import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';

const useStyles = makeStyles({
  rightPosition: {
    position: 'absolute',
    right: 0,
  },
  leftPosition: {
    position: 'absolute',
    left: 0,
  },
  topPosition: {
    position: 'absolute',
    top: 0,
  },
  bottomPosition: {
    xs: '',
    bottom: 0,
  },
});


  export const NextArrow = (props) => {

    const classes = useStyles()
    // eslint-disable-next-line react/prop-types
    const {onClick} = props;
    return (
      <div style={{position: 'relative', cursor: 'pointer'}} onClick={onClick}>
        <img src="src/assets/rightArrow.png" style={{position: 'absolute', bottom: '250px', right: '-40px', border: '2px solid black', padding:'5px 7px', borderRadius:'50%', cursor: 'pointer'}}/>
      </div>
    );
  };

  export const PrevArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const {onClick} = props;
    return (
      <div
        onClick={onClick}
      >
        <img src="src/assets/leftArrow.png" style={{position: 'absolute', bottom: '250px', left: '-40px', border: '2px solid black', padding:'5px 7px', borderRadius:'50%', cursor: 'pointer'}}/>
      </div>
    );
  };

  export const settingsFourElements = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  export const settingsThreeElements = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };