import { useEffect, useState } from 'react'
import { Pokemons } from './components/API/PokemonsApi'
import { Card } from './components/Card/Card'
import '../Styles.css'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


function App() {
  const [dataPokemons, setdataPokemons] = useState([])
  const [ArrowNext, setArrowNext] = useState(null)
  const [ArrowPrev, setArrowPrev] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    Pokemons().then((res) => {
      setArrowNext(res.data.next)
      setArrowPrev(res.data.previous)
      setdataPokemons(res.pokemonsArray)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const SearchNewPokemons = (url)=>{
    Pokemons(url)
    .then((res)=>{
      setArrowNext(res.data.next)
      setArrowPrev(res.data.previous)
      setdataPokemons(res.pokemonsArray)
    }).catch((err)=>{
      console.log(err)
    })
  }

  console.log(dataPokemons.length)

  return (
    <>
      <div className='container-fluid cont'>
        <h1 className='text-center' onClick={()=>{navigate('/')}}>POKEDEX</h1>
        <hr/>
        <div className='PokemonsContainer'>
          {
            dataPokemons.length > 0 ?(
              dataPokemons.map((pokemon) => (
                <Card pokemon={pokemon} key={pokemon.id} />
              ))
            ):
            (
              <div className="loader"></div>
            )
          }
        </div>
      </div>
      <div className='ChangeUrl'>
        <span onClick={()=>{
            setdataPokemons([])
            SearchNewPokemons(ArrowPrev)
          }}><AiOutlineArrowLeft size={20}/></span>
        <span onClick={()=>{
            setdataPokemons([])
            SearchNewPokemons(ArrowNext)
          }}><AiOutlineArrowRight size={20}/></span>
      </div>

    </>
  )
}

export default App
