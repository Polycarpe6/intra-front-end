import React from 'react'
import stl from './card-trimestre.module.css'
import { BsAward, BsGeoAlt, BsPencil, BsTrash } from 'react-icons/bs'
import { deleteTrimestre } from '../../../api/endpoints';

interface ITrimestre {
    id: number;
    ano: number;
    numero: number;
    inicio: string;
    fim: string;
}

export function CardTrimestre(trimestreData: ITrimestre) {
    const anoStr = trimestreData.ano.toString();
    const anoFormatado = anoStr.length === 8 ? `${anoStr.slice(0, 4)}/${anoStr.slice(4)}` : anoStr;

    function formatDate(dateStr: string) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('pt-BR');
    }

    async function handelClickDelete(id: number) {
    
            if (!window.confirm("Você tem certeza que deseja deletar este trimestre?")) 
                return;
    
            try {
                const response = await deleteTrimestre(id);

                if (response)
                    return alert("trimestre removido com sucesso");
            } catch (error) {
                alert('Erro ao remover o trimestre!!:');
            }
    
    }

    return (
        <article className={`${stl.card_trimestre} anime-bottom`}>
            <div className={stl.head}>
                <div className='anime-bottom'>
                    {/* <BsGeoAlt className='anime-move-my-cart' /> */}
                    <BsAward />
                    <span>{trimestreData.numero}º Trimestre</span>
                </div>
                <strong className='anime-bottom'>{anoFormatado}</strong>
            </div>

            <div className={stl.body}>
                <BsAward className='anime-bottom' />
                <div className='anime-bottom'>
                    <strong>
                        Inicio: {formatDate(trimestreData.inicio)}
                    </strong>
                    <strong>
                        Fim: {formatDate(trimestreData.fim)}
                    </strong>
                </div>
            </div>

            <div className={stl.foot}>

                <button className="anime-bottom">
                    <BsPencil />
                    <span>Editar</span>
                </button>
                
                <button 
                    className="anime-bottom"
                    onClick={() => handelClickDelete(trimestreData.id)}
                >
                    <BsTrash />
                    <span>Remover</span>
                </button>

            </div>
        </article>
    )
}