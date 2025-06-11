import { BsBookmarks, BsPencil, BsTrash } from 'react-icons/bs'
import stl from './card-discipline-teacher.module.css'
import { Link } from 'react-router-dom'
import imgUser from '../../../assets/img/default.jpg'

export function CardDisciplineTeacher() {

    return (
        <article 
            className={`${stl.card_discipline_teacher} anime-bottom`}
        >
        
            <div className={`${stl.head} anime-bottom`}>
                <BsBookmarks />
                <span>-  MATEMATICA</span>
            </div>
        
            <div className={`${stl.body} anime-bottom`}>

                <div className={stl.img}>
                    <Link to={"/profile"}>
                        <img src={imgUser} alt="" />
                    </Link>
                </div>

                <div className={stl.name_email}>
                    <Link to={"/profile"} className={stl.name}>Maria da Silva</Link>
                    <Link target='_blank' to={"https://mail.google.com/mail/u/0/"} className={stl.email}>
                        msilva@gmail.com
                    </Link>
                </div>

            </div>
        
            <div className={stl.foot}>
                
                <button 
                    className='anime-bottom'
                >
                    <BsPencil />
                    <span>Editar</span>
                </button>

                <button 
                    className='anime-bottom'
                >
                    <BsTrash />
                    <span>Remover</span>
                </button>

            </div>
        
        </article>
    )
}