import React from 'react'
import stl from './card-curso.module.css'
import { BsBookmark, BsPencil, BsTrash } from 'react-icons/bs'
import { UserContext } from '../../../context';
import { deleteCurso } from '../../../api/endpoints';
import { ModalCurso } from '../../modals';


interface ICurso {
    id: number | string;
    index: number | string;
    nome: string;
}

export function CardCurso({id, index, nome}:ICurso) {

    const { data } = React.useContext(UserContext);

    const { user } = data;

    const [showModal, setShowModal] = React.useState(false)

    async function handelClickDelete(id: number) {

        if (!window.confirm("Você tem certeza que deseja deletar este usuário?")) 
            return;

        try {
            const response = await deleteCurso(id);
            alert("Curso removida com sucesso");
            // Atualize a interface aqui se necessário
        } catch (error) {
            alert('Erro ao remover Curso!!:');
        }

    }
        
    return (
        <article 
            className={`${stl.card_curso} anime-bottom`}
            style={{
                paddingBottom: user.role !== 'admin' ? "1.8rem" : "0"
            }}
        >

            <div className={`${stl.body} anime-bottom`}>

                <div className={`${stl.id_counter} anime-bottom`}>
                    <BsBookmark />
                    <span>{index}</span>
                    <small>|</small>
                </div>

                <div className={`${stl.name} anime-bottom`}>
                    <strong>{nome}</strong>
                    <p>Curso registrado na plataforma INTRA</p>
                </div>

            </div>

            {
                (user.role === 'admin') && (

                    <div className={stl.foot}>
                        
                        <button 
                            className='anime-bottom'
                            onClick={() => setShowModal(true)}
                        >
                            <BsPencil />
                            <span>Editar</span>
                        </button>

                        <ModalCurso
                            show={showModal}
                            onHide={() => setShowModal(false)}
                            cursoToEdit={{ id, nome: nome }}
                            onDisciplineRegistered={() => setShowModal(false)}
                        />

                        <button 
                            className='anime-bottom'
                            onClick={() => handelClickDelete(Number(id))}
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