import { IconX } from '@tabler/icons-react'
import { colorByType } from '../constants/pokemon'

const colorByStat = {
  HP: "[&>div]:bg-red-500 bg-slate-100",
  ATK: "[&>div]:bg-orange-500 bg-slate-100",
  DEF: "[&>div]:bg-yellow-500 bg-slate-100",
  SpA: "[&>div]:bg-blue-300 bg-slate-100",
  SpD: "[&>div]:bg-gree-500 bg-slate-100",
  SPD: "[&>div]:bg-pink-500 bg-slate-100",
  TOT: "[&>div]:bg-blue-500 bg-slate-100",
}

const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  return (
    <section
      className={` fixed top-0 left-0 right-0 h-screen bg-green-200 transition-all duration-500 ${
        showModal ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <button
        onClick={onCloseModal}
        className='absolute p-1 transition-opacity bg-white rounded-lg top-4 right-4 hover:opacity-80'
      >
        <IconX size={32} stroke={4} />
      </button>
      <article
        className={`bg-white h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 px-4 grid gap-2 content-start ${
          showModal ? 'bottom-0' : '-bottom-full'
        }`}
      >
        <header>
          <img src={pokemon?.image} alt='pokemon img' />
        </header>
        <span className='text-sm font-semibold text-slate-400'>
          Nº {pokemon?.id}
        </span>
        <h2 className='text-xl font-bold capitalize'>{pokemon?.name}</h2>
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
                className={`p-1 rounded-full ${
                  colorByStat[stat.name]
                }`}
              >
                <div className=' bg-green-500 rounded-full w-[28px] aspect-square grid place-content-center'>
                  <span className='text-xs font-semibold text-white'>
                    {stat.name}
                  </span>
                </div>
                <span className='text-sm font-semibold'>{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4>Evolutions</h4>
        </section>
      </article>
    </section>
  )
}

export default ModalPokemon
