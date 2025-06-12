import React from 'react';
import { Link } from 'react-router-dom';
import stl from './card-classe.module.css';
import { BsPencil, BsTrash, BsPinAngle, BsMortarboard } from 'react-icons/bs';
import { UserContext } from '../../../context';


interface ICardClasseItem {
    id: number;
    name: string;
    year: string;
}

export function CardClasse({ id, name, year }: ICardClasseItem) {

    const { user } = React.useContext(UserContext);
    
    return (
        <article 
            className={`${stl.card_classe} anime-bottom`}
            style={{
                paddingBottom: user.role !== "admin" ? "1.8rem" : "0"
            }}
        >

            <div className={stl.head}>
                <div>
                    <BsPinAngle />
                    <span>10ª Classe</span>
                </div>
                <strong>{year}</strong>
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

            {

                (user.role === "admin") && (

                    <div className={stl.foot}>
                        <button className="anime-bottom">
                            <BsPencil />
                            <span>Editar</span>
                        </button>
                        <button className="anime-bottom">
                            <BsTrash />
                            <span>Remover</span>
                        </button>
                    </div>
                )

            }


        </article>
    );
}