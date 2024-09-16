import Rodape from "../../components/Rodape";
import Cabecalho from "../../components/Cabecalho";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";

function Inicio () {

    return(
        <>
            <Cabecalho/>
            <Banner imagem="home"/>
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes</h1>
            </Titulo>
            <Card id='1' titulo='teste' capa='https://github.com/Peangelo.png'/>
            <Rodape/>
        </>
    )
}

export default Inicio