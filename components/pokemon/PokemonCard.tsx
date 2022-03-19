import { Card } from "primereact/card"
import { Pokemon } from "../../interfaces"
import styles from '../../styles/home.module.css'



export const PokemonCard = (pokemon: Pokemon) => {
    return <>
        <Card className={styles.cardContainer} key={pokemon.id} title={`# ${pokemon.id} - ${pokemon.name}`} >
            <div className={styles.pCardContent}>

                <img className={styles.imgExample} src={pokemon.img} alt={pokemon.name} />
            </div>
        </Card>


    </>
}
