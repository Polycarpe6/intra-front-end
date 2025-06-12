import React from 'react'
import stl from './card-curso.module.css'
import { BsBookmark, BsPencil, BsTrash } from 'react-icons/bs'
import { UserContext } from '../../../context';
import { deleteCurso } from '../../../api/endpoints';


interface ICurso {
    id: number | string;
    key: number;
    nome: string;
}

export function CardCurso({id, key, nome}:ICurso) {

    const { user } = React.useContext(UserContext);

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
                    <span>{key}</span>
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
                            // onClick={() => setShowModal(true)}
                        >
                            <BsPencil />
                            <span>Editar</span>
                        </button>

                        {/* <ModalDiscipline
                            show={showModal}
                            onHide={() => setShowModal(false)}
                            disciplineToEdit={{ id, nome: name }}
                            onDisciplineRegistered={() => setShowModal(false)}
                        /> */}

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