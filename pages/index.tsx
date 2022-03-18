import type { NextPage,GetStaticProps} from 'next'
import { Card } from 'primereact/card';
import { baseUrl } from '../api/pokeApi';
import { Layout } from '../components/layouts/Layout';
import { Pokemon, PokemonResponse } from '../interfaces';

interface Props {
  pokemons:Pokemon[]
}
const Home: NextPage<Props> = ({pokemons}) => {
  console.log(pokemons)
  return <Layout title='Pokemon App'>
    {
      pokemons.map(pokemon =>{
    return <Card key={pokemon.id} title={pokemon.name} subTitle="SubTitle"> Content <img src={pokemon.img} alt={pokemon.name} /> </Card>
      })
    }
  </Layout>
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const res = await fetch(`${baseUrl}/pokemon?limit=151`)
  const data = await res.json() as PokemonResponse
  const pokemons:Pokemon[] = data.results.map((poke,i)=>({
    ...poke,
    id:i +1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))
    return {
    props: {
      pokemons

    }
  }

}

export default Home
