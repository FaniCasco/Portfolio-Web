import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardHome.css';

const LanguageCarousel2 = () => {
    const logos = [
        'arg-prog.png',
        'cac.png',
        'coder.png',
        'codo.png',
        'udemy.png',
        'unlapam.png',
        'pearson.png',
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

    const logoStyle = {
        width: '70%',          
        height: 'auto',           
        margin: '10% auto',      
        display: 'block',  // Evita el espacio adicional debajo de las imágenes
        justifyContent: 'center', // Centra el logo horizontalmente
        borderRadius: '10px', 


    };

    const carousel = {
        marginTop: '-21%',
        
    }

    return (
        <Slider {...settings} className='carrusel' 
        style= {carousel}>
            {logos.map((logo, index) => (
                <div key={index}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/logos/${logo}`}
                        alt={`Logo ${index + 1}`}
                        style={logoStyle}  // Aplicar el estilo aquí
                    />
                </div>
            ))}
        </Slider>
    );
};

export default LanguageCarousel2;
