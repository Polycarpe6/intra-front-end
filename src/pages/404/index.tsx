import { Link } from 'react-router-dom'
import stl from './404.module.css'
import img_404 from "../../assets/img/404.svg"


export function PageNotFound() {

    return (
        <main className={stl.container}>
            <img 
                src={img_404}
                alt="imagem 404" 
                className={`${stl.img_404} anime-bottom`} 
            />
            <strong className='anime-bottom'>Error 404</strong>
            <p className='anime-bottom'>Página não encontrada.</p>
            <Link to={"/"} className='anime-bottom'>Voltar</Link>
        </main>
    )
}