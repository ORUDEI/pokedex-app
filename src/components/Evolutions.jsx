import usePokemonContext from '../hooks/usePokemonContext'

const Evolutions = ({ evolutions }) => {

  const {showPokemon} = usePokemonContext()

  return (
    <div className='flex items-center justify-center gap-2'>
      {evolutions.map((evolution, index) => (
        <article key={evolution.name} className='flex flex-wrap items-center gap-2'>
          {index !== 0 && (
            <div className='p-2 text-sm font-bold rounded-full bg-slate-100'>
              <span>Lv. {evolution.min_level}</span>
            </div>
          )}
          <button onClick={() => showPokemon(evolution.pokemonInfo)} className='transition-colors hover:bg-slate-100 rounded-3xl'>
            <img src={evolution.image} alt='evo_image' />
          </button>
        </article>
      ))}
    </div>
  )
}

export default Evolutions
