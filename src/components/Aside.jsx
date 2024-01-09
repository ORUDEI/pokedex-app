import PokemonDetail from './PokemonDetail'

const Aside = ({ pokemon, isLoading }) => {
  return (
    <section className='sticky top-0 hidden h-screen lg:block'>
      <article
        className={`z-20 absolute bg-white w-full h-[85%] bottom-0 rounded-tl-3xl rounded-tr-3xl text-center grid place-content-center transition-all duration-500 ${
          pokemon && !isLoading ? 'left-0' : 'left-[50vw]'
        }`}
      >
        <PokemonDetail pokemon={pokemon} />
      </article>
      <article
        className={`z-20 absolute bg-white w-full h-[85%] bottom-0 rounded-tl-3xl rounded-tr-3xl text-center grid place-content-center transition-all duration-500 ${
          pokemon ? 'left-[50vw]' : 'left-0'
        }`}
      >
        <header className='absolute left-1/2 -translate-x-1/2 top-0 scale-90 -translate-y-[70%] '>
          <img src='/no-pokemon-selected.png' alt='' />
        </header>
        <span className='px-20 text-lg text-slate-400'>
          Select a Pokemon to display here.
        </span>
      </article>
      <div className='w-[60px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
        <img className='contrast-50 animate-spin-slow' src='/pokeball-icon.png' alt='pokeball' />
      </div>
    </section>
  )
}

export default Aside
