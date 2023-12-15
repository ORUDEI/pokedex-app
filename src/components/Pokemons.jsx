import { IconSearch } from '@tabler/icons-react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import PokemonList from './PokemonList'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const INITIAL_LIMIT = 40
const INCREASE_LIMIT = 20

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState('')
  const [limit, setLimit] = useState(INITIAL_LIMIT)

  const targetObserver = useRef(null)
  const entry = useIntersectionObserver(targetObserver, {})
  const isVisible = !!entry?.isIntersecting

  const pokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  )

  const handleChangePokemonName = (e) => {
    setPokemonName(e.target.value.toLowerCase())
  }

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=898')
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const maxPokemons = pokemonsByName.length
    if (isVisible && maxPokemons !== 0) {
      const newLimit = limit + INCREASE_LIMIT
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit)
    }
  }, [isVisible])

  useEffect(() => {
    setLimit(INITIAL_LIMIT)
  }, [pokemonName])

  return (
    <section className='p-4 py-5'>
      <form>
        <div className='flex p-2 text-lg bg-white rounded-2xl'>
          <input
            className='flex-1 outline-none'
            type='text'
            placeholder='Search your Pokemon'
            name='pokemonName'
            onChange={handleChangePokemonName}
          />
          <button
            type='button'
            className='p-2 transition-colors bg-red-500 shadow-md shadow-red-500/50 rounded-xl hover:bg-red-400'
          >
            <IconSearch color='white' stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName.slice(0, limit)} />
      <span ref={targetObserver}></span>
    </section>
  )
}

export default Pokemons
