import './App.css';
import kobeniImg from './imagenes/Kobeni.webp' 
import Boton  from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numCLiks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numCLiks + 1);   
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };
  
  return (
    <div className="App">
      <div className='kobeni-logo-contenedor'>
        <img className='kobe-logo' 
        src={kobeniImg} 
        alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numCLiks={numCLiks}/>
        <Boton 
          texto ='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}/>
        <Boton 
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
