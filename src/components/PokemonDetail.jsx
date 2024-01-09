import { colorByStat, colorByType } from '../constants/pokemon'
import Evolutions from './Evolutions'

const PokemonDetail = ({ pokemon }) => {
  return (
    <>
      <header className='absolute -translate-x-1/2 -translate-y-[90%] left-1/2 scale-[180%] '>
        <img className='pixelated' src={pokemon?.image} alt='pokemon img' />
      </header>
      <div className='grid content-start h-full gap-2 px-4 pt-12 overflow-y-auto hidden-scroll'>
        <span className='text-sm font-semibold text-slate-400'>
          Nº {pokemon?.id}
        </span>
        <h2 className='text-2xl font-bold capitalize'>{pokemon?.name}</h2>
        <ul className='flex justify-center gap-2'>
          {pokemon?.types.map((type) => (
            <li
              className={`p-1 px-2 text-white text-sm rounded-md ${colorByType[type]}`}
              key={type}
            >
              {type}
            </li>
          ))}
        </ul>
        <div>
          <h4 className='font-bold capitalize'>Pokedex Entry</h4>
          <p className='text-slate-400'>{pokemon?.description}</p>
        </div>
        <section className='grid grid-cols-2 gap-4'>
          <div className='grid gap-2'>
            <h4 className='font-bold capitalize'>Height</h4>
            <span className='block p-1 rounded-full bg-slate-100'>0.7m</span>
          </div>
          <div className='grid gap-2'>
            <h4 className='font-bold capitalize'>Weight</h4>
            <span className='block p-1 rounded-full bg-slate-100'>6.0 kg</span>
          </div>
        </section>
        <section className='grid gap-2'>
          <div>
            <h4 className='font-bold capitalize'>Abilities</h4>
            <ul className='grid grid-cols-2 gap-4'>
              {pokemon?.abilities.map((ability) => (
                <li
                  key={ability}
                  className='block p-1 capitalize rounded-full bg-slate-100'
                >
                  <span>{ability}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='grid gap-2'>
          <h4 className='font-bold capitalize'>Stats</h4>
          <ul className='flex flex-wrap justify-center gap-3'>
            {pokemon?.stats.map((stat) => (
              <li
                key={stat.name}
                className={`p-1 rounded-full ${colorByStat[stat.name]}`}
              >
                <div className=' bg-green-500 rounded-full w-[26px] aspect-square grid place-content-center'>
                  <span className='text-[10px] font-semibold text-white'>
                    {stat.name}
                  </span>
                </div>
                <span className='font-bold text-sxs'>{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className='grid gap-2'>
          <h4 className='font-bold capitalize'>Evolutions</h4>
          <Evolutions evolutions={pokemon?.evolutions ?? []} />
        </section>
      </div>
    </>
  )
}

export default PokemonDetail
