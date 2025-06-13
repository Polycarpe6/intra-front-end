import React from 'react'
import { Link } from 'react-router-dom'
import stl from './card-people.module.css'
import { UserContext } from '../../../context'
import imgUser from '../../../assets/img/default.jpg'
import { deleteStudent } from '../../../api/endpoints'
import { BsAt, BsFolder, BsPencil, BsTrash } from 'react-icons/bs'
import { SuccessAlert } from '../../overview'



interface ICardPeopleItem {
    id: number
    n_process?: string | number
    name: string
    email: string
    username: string
    discipline?: string
}

export function CardPeople({id, n_process, name, email, username, discipline}:ICardPeopleItem) {

    const { user } = React.useContext(UserContext);

    async function handleDelete(id: number) {

        if (!window.confirm("Você tem certeza que deseja deletar este usuário?")) 
            return;

        const response = await deleteStudent(id);

        if (!response) {
            <SuccessAlert 
                message='Usuário deletado com sucesso'
            />
            console.log("");
            
        } else {
            console.error("Erro ao deletar usuário");
        }
    }

    return (
        <article 
            className={`${stl.card_people} anime-bottom`}
            style={{
                paddingBottom: user.role !== "admin" ? "1.8rem" : "0"
            }}
        >

            <div className={stl.body}>

                <div className={`${stl.img_and_name} anime-bottom`}>

                    <div className={stl.img}>
                        <Link to={`/profile/${id}`}>
                            <img src={imgUser} alt="" />
                        </Link>
                    </div>

                    <div className={stl.name_email}>
                        <Link to={`/profile/${id}`} className={stl.name}>{name}</Link>
                        <Link 
                            target='_blank' 
                            to={"https://mail.google.com/mail/u/0/"} 
                            className={stl.email}
                        >
                            {email}
                        </Link>
                    </div>

                </div>

                <div 
                    className={`${stl.n_process_or_discipline} anime-bottom`}
                >
                    <BsFolder />
                    <strong>{n_process}</strong>
                </div>

                <Link 
                    className={`${stl.usernameclass} anime-bottom`}
                    to={`/profile/${id}`}
                >
                    <BsAt />
                    <span>{username}</span>
                </Link>

            </div>
            {
                (user.role === "admin") && (
                    <div className={stl.foot}>

                        <button
                            className="anime-bottom"
                        >
                            <BsPencil />
                            <span>Editar</span>
                        </button>

                        <button
                            onClick={() => handleDelete(id)}
                            className="anime-bottom"
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