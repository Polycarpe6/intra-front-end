import React from 'react';
import stl from './card-discipline.module.css';
import { BsBookmarkCheck, BsPencil, BsTrash } from 'react-icons/bs';
import { deleteDisciplinas } from '../../../api/endpoints';
import { ModalAddDiscipline } from '../../modals';


interface DIODiscipline {
    id: string;
    counter: string;
    name: string;
}


export function CardDiscipline({ id, counter, name }: DIODiscipline) {

    const [showModal, setShowModal] = React.useState(false);

    async function handelClickDelete(id: number) {

        console.log( typeof(id) )
       
        try {
            const response = await deleteDisciplinas(id);
            console.log('Disciplina removida com sucesso:', response);
            // Atualize a interface aqui se necessário
        } catch (error) {
            console.error('Erro ao remover disciplina:', error);
        }
    }

    return (
        <article className={`${stl.card_discipline} anime-bottom`}>
            <div className={`${stl.id_counter} anime-bottom`}>
                <BsBookmarkCheck />
                <span>{counter}</span>
            </div>
            <div className={`${stl.name} anime-bottom`}>
                <strong>{name}</strong>
                <p>Disciplina registrado na plataforma INTRA</p>
            </div>
            <div className={stl.btns}>
                
                <button 
                    className='anime-bottom'
                    onClick={() => setShowModal(true)}
                >
                    <BsPencil />
                    <span>Editar</span>
                </button>

                <ModalAddDiscipline
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    disciplineToEdit={{ id, nome: name }}
                    onDisciplineRegistered={() => setShowModal(false)}
                />

                <button 
                    className='anime-bottom'
                    onClick={() => handelClickDelete(id)}
                >
                    <BsTrash />
                    <span>Remover</span>
                </button>
            </div>
        </article>
    );
}