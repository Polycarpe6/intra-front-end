import React from 'react'
import { NavLink } from 'react-router-dom'
import stl from './card-search.module.css'
import { BsPlus, BsSearch } from 'react-icons/bs'
import { ModalDiscipline, ModalAddStudent, ModalTeacher, ModalClass, ModalCreateBlog, ModalCurso } from '../../modals';
import { UserContext } from '../../../context';
import { useContext } from 'react';


interface ICardSearchProps {
    placeholder: string;
    btnAddStudent?: boolean;
    btnAddTeacher?: boolean;
    btnAddClassT?: boolean;
    btnAddDiscipline?: boolean;
    btnCreateBlog?: boolean;

    bntFilterAllStudent?: () => void;
    bntFilterAllTeacher?: () => void;
}





export function CardSearch({
    placeholder,
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
    const [showModalCurso, setShowModalCurso] = React.useState(false);

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

                {
                    bntFilterAllStudent && (
                        <button 
                            id='bntFilterAllStudent'
                            className='anime-bottom'
                            onClick={bntFilterAllStudent}
                        >
                            Filtrar Alunos
                        </button>
                    )
                }

                {
                    bntFilterAllTeacher && (
                        <button 
                            id='bntFilterAllStudent'
                            className='anime-bottom'
                            onClick={bntFilterAllTeacher}
                        >
                            Filtrar Professores
                        </button>
                    )
                }

                {
                    (user.role === 'admin' && btnAddStudent) && (
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
                    )
                }

                {
                    (user.role === 'admin' && btnAddTeacher) && (
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
                    )
                }
                
                {
                    (user.role === 'admin' && btnAddClassT) && (
                        <>
                            <button 
                                onClick={() => setShowModalAddClassT(true)}
                                className='anime-bottom'
                            >
                                <BsPlus />
                                <span>Adicionar Turma</span>
                            </button>
            
                            <ModalClass
                                show={showModalAddClassT}
                                onHide={() => setShowModalAddClassT(false)}
                            />
                        </>
                    )
                }

                {
                    btnCreateBlog && (user.role === 'admin' || user.role === 'teacher') && (
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
                    )
                }

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

                            <ModalDiscipline
                                show={showModalAddDiscipline}
                                onHide={() => setShowModalAddDiscipline(false)}
                            />
                        </>
                    )
                }

                <button 
                    onClick={() => setShowModalCurso(true)}
                    className='anime-bottom'
                >
                    <BsPlus />
                    <span>Registrar Cursos</span>
                </button>

                <ModalCurso 
                    show={showModalCurso}
                    onHide={() => setShowModalCurso(false)}
                />

            </nav>
            
        </article>
    )
}