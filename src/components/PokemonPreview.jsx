import axios from 'axios'
import { useEffect, useState } from 'react'
import { colorByType } from '../constants/pokemon'

const PokemonPreview = ({ pokemonURL }) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <article className='text-center bg-white rounded-[30px] relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-2 border-transparent hover:border-slate-200 cursor-pointer group gap-2'>
      <header className='h-9'>
        <img
          className='absolute top-0 transition-transform -translate-x-1/2 -translate-y-1/2 left-1/2 group-hover:scale-110 pixelated'
          src={
            pokemon?.sprites.versions['generation-v']['black-white']
              .front_default
          }
          alt='pokemon image'
        />
      </header>
      <span className='text-sm text-slate-400'>Nº {pokemon?.id}</span>
      <h4 className='text-lg'>{pokemon?.name}</h4>
      <ul className='flex justify-center gap-2'>
        {pokemon?.types.map((type) => (
          <li
            className={`p-1 px-2 text-white text-sm rounded-md ${
              colorByType[type.type.name]
            }`}
            key={type.type.name}
          >
            {type.type.name}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default PokemonPreview
