import type { NextPage, GetStaticProps } from 'next'
import { Card } from 'primereact/card';
import { baseUrl } from '../api/pokeApi';
import { Layout } from '../components/layouts/Layout';
import { PokemonCard } from '../components/pokemon';
import { Pokemon, PokemonResponse } from '../interfaces';
import styles from '../styles/home.module.css'

interface Props {
  pokemons: Pokemon[]
}
const Home: NextPage<Props> = ({ pokemons }) => {



  return <Layout title='Pokemon App'>
    <div className={styles.container}>

      <div className={styles.gridPokemons}>

        {
          pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)
        }
      </div>
    </div>
  </Layout>
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const res = await fetch(`${baseUrl}/pokemon?limit=151`)
  const data = await res.json() as PokemonResponse
  const pokemons: Pokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))
  return {
    props: {
      pokemons

    }
  }

}

export default Home
