import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { styled } from '@mui/material/styles';
import image1 from "../../assets/Images/j1.jpg"
import image2 from "../../assets/Images/t1.jpg"
import image3 from "../../assets/Images/p1.jpg"
import image4 from "../../assets/Images/c1.jpg"
import image5 from "../../assets/Images/d1.jpg"
import './landing.css'
const StyledCarousel = styled(Carousel)(({ theme }) => ({
  '& .MuiCarousel-root': {
    height: 400,
  },
  '& .MuiCarousel-slide': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    minHeight: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 48,
  },
}));
//require('')
const images = [
  image1,
  image2,
  image3,
  image4,
  image5
];

function Slideshow() {
  const [index, setIndex] = React.useState(0);

  const handleSlideChange = (event, newIndex) => {
    setIndex(newIndex);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <StyledCarousel
    className='carausel-header'
      autoPlay
      animation="slide"
      cycleNavigation
      navButtonsAlwaysVisible
      index={index}
      onChange={handleSlideChange}
      indicatorIconButtonProps={{
        'aria-label': 'slide',
      }}
      indicatorContainerProps={{
        sx: {
          position: 'absolute',
          bottom: 0,
        },
      }}
      navButtonsProps={{
        // Change the colors and styles of the nav buttons
        style: {
          backgroundColor: 'transparent',
          borderRadius: 0,
          boxShadow: 'none',
        },
      }}
    >
      {images.map((image) => (
        <img className="carausel-image" key={image} src={image} alt="Slide" />
      ))}
    </StyledCarousel>
    
  );
}

export default Slideshow;
