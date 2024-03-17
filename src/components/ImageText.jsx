import { useState } from 'react';
import Fade from 'react-bootstrap/Fade';

function Imagenes() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const textStyles = index => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Montserrat Alternates, sans-serif',
        fontSize:'30px',
        backgroundColor: hoveredIndex === index ? 'rgb(255, 20, 147, 0.7)' : 'transparent',
        color: '#fff',
        padding: '10px',
        margin: 0,
        opacity: hoveredIndex === index ? 1 : 0,
        transition: 'opacity 0.3s ease, background-color 0.3s ease',
    });

    const containerStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '80%',
        margin: '-500px auto 400px auto',
    };

    const imageStyles = {
        cursor: 'pointer',
        maxWidth: '50%',
        width: '300px', //  ancho deseado
        height: '250px', //  altura deseada
        boxSizing: 'border-box',
        position: 'relative',
        margin: '50px',
    };

    const imageNames = ['teamwork.jpg','comunicacion.jpg','inciativa.svg'];
    const texto = ['TRABAJO EN EQUIPO','COMUNICACIÓN EFECTIVA','INICIATIVA'];

    return (
        <div style={containerStyles}>
            {imageNames.map((imageName, index) => (
                <div
                    key={index}
                    style={{ ...imageStyles }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/img/${imageName}`} 
                        alt={`Imagen ${index + 1}`}
                        style={{ width: '100%', height: '100%' }}
                    />
                    <Fade in={hoveredIndex === index}>
                        <div id={`img-text-${index}`} style={textStyles(index)}>
                            {texto[index]}
                        </div>
                    </Fade>
                </div>
            ))}
        </div>
    );
}

export default Imagenes;







