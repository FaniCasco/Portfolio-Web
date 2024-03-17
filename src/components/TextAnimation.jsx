import React, { useState, useEffect } from 'react';
import './TextAnimation.css';


//Esto crea un nuevo componente de React llamado TextAnimation.
// Este componente acepta un argumento llamado text.
const TextAnimation = ({ text }) => {
  //Aquí se están utilizando "hooks" de estado. 
  //visibleText es una variable de estado que almacena el texto que será visible en la pantalla. 
  //setVisibleText es una función que puedes usar para cambiar el valor de visibleText.
  // Inicialmente, visibleText está vacío.
  const [visibleText, setVisibleText] = useState('');
  //currentIndex es una variable de estado que guarda la posición actual del índice del texto que estás mostrando. 
  const [currentIndex, setCurrentIndex] = useState(0);
  //setCurrentIndex es la función que puedes utilizar para actualizar ese índice. 
  //Inicialmente, el índice está en 0.

  //uso useEffect para iniciar una animación después de que el componente se haya montado.
  useEffect(() => {
    //setInterval es una función de JavaScript que ejecuta repetidamente una función a intervalos específicos. 
    //En este caso, se está creando un intervalo que se ejecutará cada 100 milisegundos.
    const intervalId = setInterval(() => {
      if (currentIndex < text.length)
      //Esta línea verifica si todavía hay caracteres en el texto para mostrar. 
      //Si es cierto, ejecutará el bloque de código dentro del if.
      {
        //Actualiza el texto visible al agregar el carácter actual del text al visibleText. 
        //Utiliza la función de flecha para asegurarse de que el valor previo (prevText) se tenga en cuenta antes de hacer la actualización.
        setVisibleText((prevText) => prevText + text.charAt(currentIndex));
        //Incrementa el índice en 1 para pasar al siguiente carácter en el siguiente ciclo del intervalo.
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else
      //Si ya se han mostrado todos los caracteres, detiene el intervalo para detener la animación.
      {
        clearInterval(intervalId);
      }
    }, 100); // Ajusta la velocidad de aparición según tus preferencias


    return () => clearInterval(intervalId);
  }, [text, currentIndex]);
  //Finalmente, devuelve un elemento div que muestra el texto animado. 
  //El contenido de este div es el visibleText.
  return <div className="text-animation">{visibleText}</div>;
};

export default TextAnimation;



