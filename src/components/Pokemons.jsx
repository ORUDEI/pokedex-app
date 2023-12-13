import { IconSearch } from '@tabler/icons-react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PokemonList from './PokemonList'

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className='p-4 py-5'>
      <form>
        <div className='flex p-2 text-lg bg-white rounded-2xl'>
          <input
            className='flex-1 outline-none'
            type='text'
            placeholder='Search your Pokemon'
          />
          <button className='p-2 transition-colors bg-red-500 shadow-md shadow-red-500/50 rounded-xl hover:bg-red-400'>
            <IconSearch color='white' stroke={3} />
          </button>
        </div>
      </form>
    <PokemonList pokemons={allPokemons}/>
    </section>
  )
}

export default Pokemons
