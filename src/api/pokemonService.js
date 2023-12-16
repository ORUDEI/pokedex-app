import axios from "axios"

const getEvolutionsData = (evolutions) => {
    return evolutions.map(async (evo) => await axios.get(`https://pokeapi.co/api/v2/pokemon/${evo.name}/`))
}

export {
    getEvolutionsData
}
