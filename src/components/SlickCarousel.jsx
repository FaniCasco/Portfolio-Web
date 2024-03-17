import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardHome.css';



const LanguageCarousel = () => {
  const logos = [
    'html.png',
    'css.png',
    'js.png',
    'react.png',
    'git.png',
    'github.png',
    'mysql.png',
    'php.png',
    'nodejs.png',
    'firebase.png',
    'bootstrap.png',

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    arrows: false,
  };

 // const logoStyle = {
   // width: '100%',
   // padding: '0',
    //margin: '0 auto', // Centra el logo en el contenedor

  //};
 


  return (

    <Slider {...settings} className='carrusel'>
      {logos.map((logo, index) => (
        <div key={index}>
          <img
           src={`${process.env.PUBLIC_URL}/assets/logos/${logo}`}
           alt={`Logo ${index + 1}`}
            style={{ width: '40%', height: 'auto', margin: '10% auto' }}
          />
        </div>
      ))}
    </Slider>

  );
};

export default LanguageCarousel;
