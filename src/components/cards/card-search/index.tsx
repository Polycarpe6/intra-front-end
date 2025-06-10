import React from 'react'
import { NavLink } from 'react-router-dom'
import stl from './card-search.module.css'
import { BsPlus, BsSearch } from 'react-icons/bs'
import { ModalAddDiscipline, ModalAddStudent, ModalTeacher, ModalClass, ModalCreateBlog } from '../../modals';
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
    btnAddDiscipline?: boolean;
    btnCreateBlog?: boolean;

    bntFilterAllStudent?: () => void;
    bntFilterAllTeacher?: () => void;
}





export function CardSearch({
    placeholder, sugest1, sugest2, sugest3, 
    btnAddStudent = false, 
    btnAddTeacher = false, 
    btnAddClassT = false, 
    btnCreateBlog = false, 
    btnAddDiscipline = false,
    bntFilterAllStudent,
    bntFilterAllTeacher

    }: ICardSearchProps) {

    const [showModalAddStudent, setShowModalAddStudent] = React.useState(false);
    const [showModalTeacher, setShowModalTeacher] = React.useState(false);
    const [showModalAddClassT, setShowModalAddClassT] = React.useState(false);
    const [showModalCreateBlog, setShowModalCreateBlog] = React.useState(false);
    const [showModalAddDiscipline, setShowModalAddDiscipline] = React.useState(false);

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
                <NavLink to={""}
                    style={{display: sugest1 ? "flex" : "none"}}
                    className='anime-bottom'
                >
                    {sugest1}
                </NavLink>

                <button 
                    id='bntFilterAllStudent'
                    className='anime-bottom'
                    onClick={bntFilterAllStudent}
                >
                    Alunos
                </button>

                <button 
                    id='bntFilterAllStudent'
                    className='anime-bottom'
                    onClick={bntFilterAllTeacher}
                >
                    Professor
                </button>

                {/* <NavLink 
                    to={""}
                    style={{display: sugest3 ? "flex" : "none"}}
                    className='anime-bottom'
                >
                    {sugest3}
                </NavLink> */}
            
                {user.role === 'admin' && btnAddStudent && (
                    <>
                        <button 
                            onClick={() => setShowModalAddStudent(true)}
                            className='anime-bottom'
                        >
                            <BsPlus />
                            <span>Registrar Aluno</span>
                        </button>

                        <ModalAddStudent
                            show={showModalAddStudent}
                            onHide={() => setShowModalAddStudent(false)}
                        />
                    </>
                )}

                {user.role === 'admin' && btnAddTeacher && (
                    <>
                        <button 
                            onClick={() => setShowModalTeacher(true)}
                            className='anime-bottom'
                        >
                            <BsPlus />
                            <span>Registrar Professor</span>
                        </button>

                        <ModalTeacher
                            show={showModalTeacher}
                            onHide={() => setShowModalTeacher(false)}
                        />
                    </>
                )}
                

                <button 
                    onClick={() => setShowModalAddClassT(true)}
                    style={{display: btnAddClassT ? "flex" : "none"}}
                    className='anime-bottom'
                >
                    <BsPlus />
                    <span>Adicionar Turma</span>
                </button>

                <ModalClass
                    show={showModalAddClassT}
                    onHide={() => setShowModalAddClassT(false)}
                />

                {(user.role === 'admin' || user.role === 'teacher') && btnCreateBlog && (
                    <>
                        <button 
                            onClick={() => setShowModalCreateBlog(true)}
                            className='anime-bottom'
                        >
                            <BsPlus />
                            <span>Crie um Blog</span>
                        </button>

                        <ModalCreateBlog
                            show={showModalCreateBlog}
                            onHide={() => setShowModalCreateBlog(false)}
                        />
                    </>
                )}

                {
                    user.role === 'admin' && btnAddDiscipline && (
                        <>
                            <button 
                                onClick={() => setShowModalAddDiscipline(true)}
                                className='anime-bottom'
                            >
                                <BsPlus />
                                <span>Registrar Disciplinas</span>
                            </button>

                            <ModalAddDiscipline
                                show={showModalAddDiscipline}
                                onHide={() => setShowModalAddDiscipline(false)}
                            />
                        </>
                    )
                }


            </nav>
        </article>
    )
}