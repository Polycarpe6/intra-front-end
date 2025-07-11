import { Link } from 'react-router-dom'
import { TurmaDisciplina } from '../../../context';
import imgUser from '../../../assets/img/default.jpg'
import stl from './card-discipline-teacher.module.css'
import { BsBookmarks, BsPencil, BsTrash } from 'react-icons/bs'
import { useUser } from '../../../hooks/useUser';


export function CardDisciplineTeacher(props: TurmaDisciplina) {

    const { data: { user } } = useUser();
    
    return (
        <article 
            className={`${stl.card_discipline_teacher} anime-bottom`}
            style={{
                paddingBottom: user.role !== 'admin' ? "1.8rem" : "0"
            }}
        >
            <div className={`${stl.head} anime-bottom`}>
                <BsBookmarks />
                <span>-  {props.disciplina.nome}</span>
            </div>
            <div className={`${stl.body} anime-bottom`}>

                <div className={stl.img}>
                    <Link to={"/profile"}>
                        <img src={imgUser} alt="" />
                    </Link>
                </div>
                <div className={stl.name_email}>
                    <Link to={"/profile"} className={stl.name}>{props.professor.nome}</Link>
                    <Link target='_blank' to={"https://mail.google.com/mail/u/0/"} className={stl.email}>
                        {props.professor.email}
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