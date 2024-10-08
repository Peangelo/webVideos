import Titulo from '../../components/Titulo'
import Banner from '../../components/Banner'
import styles from './Player.module.css'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player () {

    const [video, setVideo] = useState()
    const paramentros = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Peangelo/webvideos-api/videos?id=${paramentros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if(!video){
        return <NaoEncontrada/>
    }
    return(
        <>
            <Banner imagem='player'/>

            <Titulo>
                <h1>Nome do player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.titulo}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player