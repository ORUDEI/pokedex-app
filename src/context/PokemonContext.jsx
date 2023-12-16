import { createContext, useState } from 'react'
import {
  formatTypes,
  formatAbilities,
  formatStats,
  getPokemonDescription,
  getEvolutions,
  getImageByPokemon,
} from '../helpers/pokemon.js'
import axios from 'axios'

const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
  const [pokemonDetail, setPokemonDetail] = useState(null)
  const [showDetailPokemon, setShowDetailPokemon] = useState(false)

  const showPokemon = async (pokemonInfo) => {
    const { data: dataSpecies } = await axios.get(pokemonInfo.species.url)
    const { data: dataEvolution } = await axios.get(
      dataSpecies.evolution_chain.url
    )

    const { id, name, height, weight, stats, types, abilities } = pokemonInfo
      const evolutions = await getEvolutions(dataEvolution)

    setPokemonDetail({
      id,
      name,
      height,
      weight,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities),
      description: getPokemonDescription(dataSpecies),
      evolutions,
      image: getImageByPokemon(pokemonInfo.sprites)
    })

    setShowDetailPokemon(true)
  }

  const closePokemonDetail = () => {
    setShowDetailPokemon(false)
  }

  return (
    <PokemonContext.Provider
      value={{
        showDetailPokemon,
        showPokemon,
        closePokemonDetail,
        pokemonDetail,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export { PokemonContext, PokemonProvider }
