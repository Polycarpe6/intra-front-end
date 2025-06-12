import React from 'react';
import stl from './card-discipline.module.css';
import { BsBookHalf, BsBookmarkCheck, BsPencil, BsTrash } from 'react-icons/bs';
import { deleteDiscipline } from '../../../api/endpoints';
import { ModalDiscipline } from '../../modals';
import { UserContext } from '../../../context';


interface DIODiscipline {
    id: string;
    counter: string;
    name: string;
}


export function CardDiscipline({ id, counter, name }: DIODiscipline) {

    const { user } = React.useContext(UserContext);

    const [showModal, setShowModal] = React.useState(false);

    async function handelClickDelete(id: number) {
       
        try {
            const response = await deleteDiscipline(id);
            console.log('Disciplina removida com sucesso:', response);
            // Atualize a interface aqui se necessário
        } catch (error) {
            console.error('Erro ao remover disciplina:', error);
        }
    }

    return (
        <article 
            className={`${stl.card_discipline} anime-bottom`}
            style={{
                paddingBottom: user.role !== "admin" ? "1.9rem" : "0"
            }}
        >

            <div className={`${stl.id_counter} anime-bottom`}>
                <BsBookHalf />
                <span>{counter}</span>
            </div>

            <div className={`${stl.name} anime-bottom`}>
                <strong>{name}</strong>
                <p>Disciplina registrada na plataforma INTRA</p>
            </div>

            {
                (user.role === "admin") && (

                    <div className={stl.btns}>
                        
                        <button 
                            className='anime-bottom'
                            onClick={() => setShowModal(true)}
                        >
                            <BsPencil />
                            <span>Editar</span>
                        </button>

                        <ModalDiscipline
                            show={showModal}
                            onHide={() => setShowModal(false)}
                            disciplineToEdit={{ id, nome: name }}
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
    );

}