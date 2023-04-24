import React from 'react'
import './Card.css'
import './Tipos.css'

export const Card = ({pokemon}) => {
  const image = pokemon.images.other['official-artwork'].front_default
  return (
    <>
      <div key={pokemon.id} className='Card'>
          <img src={pokemon.images.front_default}/>
          <section className='imagenHover'>
              <img src={image} className='imagen-oficial'/>
              <span>#{pokemon.id}</span>
          </section>
          <span>{(pokemon.name).toUpperCase()}</span>
          <hr/>
          <section className='TiposContainer'>
            {
              pokemon.types.map((tipo)=>(
                <span key={tipo.type.name} className={`tipoDefault tipo-${tipo.type.name}`}>{(tipo.type.name).toUpperCase()}</span>
              ))
            }
          </section>
      </div>
      
    </>
    
  )
}
