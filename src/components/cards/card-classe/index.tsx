import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import stl from './card-classe.module.css';
import { BsPencil, BsTrash, BsPinAngle, BsMortarboard } from 'react-icons/bs';
import { UserContext } from '../../../context';
import { deleteClasse } from '../../../api/endpoints';
import { ModalClass } from '../../modals';

interface ICardClasseItem {
    id: number;
    name: string;
    year: string;
    curso_id?: number; // Adicione se você tiver o curso_id disponível
}

export function CardClasse({ id, name, year, curso_id = 0 }: ICardClasseItem) {

    const { data } = React.useContext(UserContext);

    const { user } = data;

    const [showModal, setShowModal] = React.useState(false);

    function formatYear(year: string | number) {
        const yearStr = year.toString();
        if (yearStr.length === 8) {
            return `${yearStr.slice(0, 4)}/${yearStr.slice(4)}`;
        }
        return yearStr;
    }

    const anoExibido = formatYear(year);

    const classe = name.slice(2, 4);

    async function handelClickDelete(id: number) {
        if (!window.confirm("Você tem certeza que deseja deletar esta turma?")) 
            return;
        
        try {
            const response = await deleteClasse(id);

            if (response) 
                return alert("Erro ao remover turma!");

            alert("Turma removida com sucesso");
            return window.location.reload();
            

        } catch (error) {
            alert('Erro ao remover Turma!!:');
        }
    }
    
    return (
        <Suspense fallback={"Carregando..."}>
            <article 
                className={`${stl.card_classe} anime-bottom`}
                style={{
                    paddingBottom: user.role !== "admin" ? "1.8rem" : "0"
                }}
            >

                <div className={stl.head}>
                    <div>
                        <BsPinAngle />
                        <span>{classe}ª Classe</span>
                    </div>
                    <strong>{anoExibido}</strong>
                </div>

                <div className={stl.body}>
                    <Link 
                        to={`/classe/${id}`} 
                        className={`${stl.name} anime-bottom`}
                    >
                        <BsMortarboard/>
                        <strong>{name}</strong>
                    </Link>
                </div>

                {user.role === "admin" && (
                    <div className={stl.foot}>
                        <button 
                            className='anime-bottom'
                            onClick={() => setShowModal(true)}
                        >
                            <BsPencil />
                            <span>Editar</span>
                        </button>
                        
                        <ModalClass
                            show={showModal}
                            onHide={() => setShowModal(false)}
                            classToEdit={{
                                id: id,
                                nome: name,
                                ano: year,
                                curso_id: curso_id
                            }}
                        />

                        <button 
                            className="anime-bottom"
                            onClick={() => handelClickDelete(Number(id))}
                        >
                            <BsTrash />
                            <span>Remover</span>
                        </button>
                    </div>
                )}
            </article>
        </Suspense>
    );
}