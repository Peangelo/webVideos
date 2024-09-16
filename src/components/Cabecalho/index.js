import { Link } from "react-router-dom"
import logo from './logo.png'
import styles from './Cabecalho.module.css'
import CabecalhoLink from "../CabecalhoLink"

function Cabecalho (){
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo"></img>
            </Link>
            <nav>
                <CabecalhoLink url='./'>
                    home
                </CabecalhoLink>
                <CabecalhoLink url='./favoritos'>
                    favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho