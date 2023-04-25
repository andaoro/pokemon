import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Pokemon as Consulta} from '../../components/API/Pokemon'
import './Pokemon.css'

export const Pokemon = () => {
  const { name } = useParams()
  const [pokemonData, setpokemonData] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    Consulta(name)
    .then((response)=>{
      console.log(response)
      setpokemonData(response)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  
  return (
    <div className='PokemonContainer'>
      {pokemonData !== null?(
        <>
        <h1 className='text-center p-4' onClick={()=>{navigate('/')}}>{pokemonData.name}</h1>
        <div className='infoPokemon'>
          <section>
            <img src={pokemonData.sprites.other['official-artwork'].front_default}/>
          </section>
          <section>
            {
              pokemonData.stats.map((stats)=>(
                <div>
                  <span key={stats.stat.name}>{stats.stat.name}: {stats.base_stat}</span>
                </div>
              ))
            }
          </section>
        </div>
        
        </>):
        (<div>

        </div>)
      }
      
    </div>
  )
}
