import React from 'react';
import '../stylesheets/Bio.css'

function Bio(props){
  return(
    <div className='contenedor-bio'>
      <img 
      className='img-bio'
      src={require(`../img/nombre-${props.img}.jpg`)}
      alt='Foto de Rudeus'/>
      <div className='contenedor-texto-bio'>
        <p className='nombre-bio'><strong>{props.nombre}</strong></p>
        <p className='texto-frase'><q>{props.frase}</q></p>
        <p className='texto-bio'>{props.bio}</p>
      </div>
    </div>
  );
}

export default Bio;