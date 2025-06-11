import React from 'react';
import { BsCheck2All, BsCheckLg, BsPlus, BsXLg } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { TitleAndDescription } from '../../titles';
import stl from './modalDisciplineTeacher.module.css';
import { SelectDiscipline, SelectTeacher } from '../../inputs';


export function ModalDisciplineTeacher(props: any) {

    const [disciplineTeacher, setDisciplineTeacher] = React.useState({
        "turmaId": 0,
        "disciplinaId": 0,
        "professorId": 0
    })


    async function handleDisciplineTeacher() {

        if ( disciplineTeacher.disciplinaId === 0 || disciplineTeacher.turmaId === 0 || disciplineTeacher.professorId === 0 )
            return alert("Todos os campos sao obrigatorio!")

        console.log(disciplineTeacher)
    }


    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={stl.modal_discipline_teacher}
        >

            <div className={stl.head}>
                <TitleAndDescription
                    title={"Adicione uma Disciplina e seu Professor nessa turma"}
                    desc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolor dicta accusamus, officia consectetur rerum tempora earum. Iusto nostrum amet cupiditate excepturi est laborum quis velit a iste. Totam, quisquam."}
                    
                />
                
                <button onClick={props.onHide}>
                    <BsXLg />
                </button>
            </div>

            <div className={`${stl.body} anime-bottom`}>
                
                <SelectTeacher
                    value={disciplineTeacher.professorId}
                    onChange={professorId => setDisciplineTeacher({ ...disciplineTeacher, professorId: Number(professorId) })}
                />

                <SelectDiscipline
                    value={disciplineTeacher.disciplinaId}
                    onChange={disciplinaId => setDisciplineTeacher({ ...disciplineTeacher, disciplinaId: Number(disciplinaId) })}
                />

            </div>

            <div className={`${stl.foot} anime-bottom`}>
                <button
                    onClick={handleDisciplineTeacher}
                >
                    <BsCheck2All />
                    <span>Registrar</span>
                </button>
            </div>

        </Modal>
    );
}