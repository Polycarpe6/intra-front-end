import { Link } from 'react-router-dom'
import { UserContext } from '../../../context';
import imgUser from '../../../assets/img/default.jpg'
import stl from './card-discipline-teacher.module.css'
import { BsBookmarks, BsPencil, BsTrash } from 'react-icons/bs'
import React from 'react';


export function CardDisciplineTeacher() {

    const { data } = React.useContext(UserContext);

    const { user } = data;
    
    return (
        <article 
            className={`${stl.card_discipline_teacher} anime-bottom`}
            style={{
                paddingBottom: user.role !== 'admin' ? "1.8rem" : "0"
            }}
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

            {
                (user.role === 'admin') && (

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
                    
                )
            }
        
        
        </article>
    )
}