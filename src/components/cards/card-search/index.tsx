import React from 'react'
import { NavLink } from 'react-router-dom'
import stl from './card-search.module.css'
import { BsPlus, BsSearch } from 'react-icons/bs'
import { ModalAddClassT, ModalAddStudent, ModalAddTeacher } from '../../modals';
import { UserContext } from '../../../context';
import { useContext } from 'react';


interface ICardSearchProps {
    placeholder: string;
    sugest1: string;
    sugest2?: string;
    sugest3?: string;
    btnAddStudent?: boolean;
    btnAddTeacher?: boolean;
    btnAddClassT?: boolean;
}
export function CardSearch({placeholder, sugest1, sugest2, sugest3, btnAddStudent = false, btnAddTeacher = false, btnAddClassT = false }: ICardSearchProps) {

    const [showModalAddStudent, setShowModalAddStudent] = React.useState(false);
    const [showModalAddTeacher, setShowModalAddTeacher] = React.useState(false);
    const [showModalAddClassT, setShowModalAddClassT] = React.useState(false);

    const { user } = useContext(UserContext);    

    return (
        <article className={`${stl.card_search} anime-bottom`}>

            <div className={stl.card_input_icon}>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                />
                <BsSearch />
            </div>

            <nav className={stl.nav_search}>
                <NavLink to={""}>{sugest1}</NavLink>
                <NavLink 
                    to={""}
                    style={{display: sugest2 ? "flex" : "none"}}
                    className='anime-bottom'
                >
                    {sugest2}
                </NavLink>
                <NavLink 
                    to={""}
                    style={{display: sugest3 ? "flex" : "none"}}
                    className='anime-bottom'
                >
                    {sugest3}
                </NavLink>
            
                <button 
                    onClick={() => setShowModalAddStudent(true)}
                    style={{display: user.role === 'admin' ? "flex" : "none"}}
                    className='anime-bottom'
                >
                    <BsPlus />
                    <span>Registrar Aluno</span>
                </button>

                <ModalAddStudent
                    show={showModalAddStudent}
                    onHide={() => setShowModalAddStudent(false)}
                />

                <button 
                    onClick={() => setShowModalAddTeacher(true)}
                    style={{display: user.role === 'admin' ? "flex" : "none"}}
                    className='anime-bottom'
                >
                    <BsPlus />
                    <span>Registrar Professor</span>
                </button>

                <ModalAddTeacher
                    show={showModalAddTeacher}
                    onHide={() => setShowModalAddTeacher(false)}
                />

                <button 
                    onClick={() => setShowModalAddClassT(true)}
                    style={{display: btnAddClassT ? "flex" : "none"}}
                    className='anime-bottom'
                >
                    <BsPlus />
                    <span>Adicionar Turma</span>
                </button>

                <ModalAddClassT
                    show={showModalAddClassT}
                    onHide={() => setShowModalAddClassT(false)}
                />

            </nav>
        </article>
    )
}

