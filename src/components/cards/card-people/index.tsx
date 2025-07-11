import React from 'react'
import { Link } from 'react-router-dom'
import stl from './card-people.module.css'
import { UserContext } from '../../../context'
import imgUser from '../../../assets/img/default.jpg'
import { deleteStudent } from '../../../api/endpoints'
import { BsFolder, BsPencil, BsPerson, BsTrash } from 'react-icons/bs'
import { ModalUserProfile } from '../../modals/modalUserProfile'



interface ICardPeopleItem {
    id: number
    n_process?: string | number
    name: string | null
    email: string
    role?: string
}

export function CardPeople({id, n_process, name, email, role}:ICardPeopleItem) {

    const { data } = React.useContext(UserContext);
    
    const { user } = data;
    
    const [modalUserProfile, setModalUserProfile] = React.useState(false)

    async function handleDelete(id: number) {

        if (!window.confirm("Você tem certeza que deseja deletar este usuário?")) 
            return;

        const response = await deleteStudent(id);

        if (!response) {
            alert("Usuário deletado com sucesso")  
            window.location.reload()          
        } else {
            alert("Erro ao deletar usuário");
        }
    }

    return (
        <article 
            className={`${stl.card_people} anime-bottom`}
            style={{
                paddingBottom: user.role !== "admin" ? "1.8rem" : "0",
            }}
        >

            <div className={stl.body}>

                <div className={`${stl.img_and_name} anime-bottom`}>

                    <div className={stl.img}>
                        <div>
                            <span>
                                {name ? name[0] : "C"}
                            </span>
                        </div>
                    </div>

                    <div className={stl.name_email}>
                        <Link 
                            to={`#`} 
                            className={stl.name}
                            onClick={() => setModalUserProfile(true)}
                        >
                            {
                                name ? name : "Conta não ativada"
                            }
                        </Link>

                        <ModalUserProfile
                            show={modalUserProfile}
                            onHide={() => setModalUserProfile(false)}
                            userId={id}
                        />

                        <Link 
                            target='_blank' 
                            to={"https://mail.google.com/mail/u/0/"} 
                            className={stl.email}
                        >
                            {
                                email ? email : "Indisponivel"
                            }
                        </Link>
                    </div>

                </div>

                <div 
                    className={`${stl.n_process_or_discipline} anime-bottom`}
                >
                    <BsPerson />
                    <strong>
                        { (
                            (email === "lucaspazito@gmail.com") ? "Administrador" : ((role === "student") ? "Aluno" : (
                                    (role === "teacher") ? "Professor" : "Indisponivel"
                                )
                            )
                        )}
                    </strong>
                </div>


                {
                    n_process && (

                    <div 
                        className={`${stl.n_process_or_discipline} anime-bottom`}
                    >
                        <BsFolder />
                        <strong>{n_process}</strong>
                    </div>
                    )
                }

            </div>
            {
                (user.email === "lucaspazito@gmail.com") && (
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