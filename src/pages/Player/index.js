import Titulo from '../../components/Titulo'
import Banner from '../../components/Banner'
import styles from './Player.module.css'

function Player () {

    return(
        <>
            <Banner imagem='player'/>

            <Titulo>
                <h1>Nome do player</h1>
            </Titulo>
        </>
    )
}

export default Player