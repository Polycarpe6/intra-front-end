import React from 'react';
import { BsCheck2All, BsCheckLg, BsPlus, BsXLg } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { TitleAndDescription } from '../../titles';
import stl from './modalDisciplineTeacher.module.css';
import { SelectDiscipline, SelectTeacher } from '../../inputs';
import { postClassDiscipline } from '../../../api/endpoints';


export function ModalDisciplineTeacher(props: any) {

    const [disciplineTeacher, setDisciplineTeacher] = React.useState({
        "turma_id": 0,
        "disciplina_id": 0,
        "professor_id": 0
    })

    console.log(props);
    


    async function handleDisciplineTeacher(turmaId: number) {

        disciplineTeacher.turma_id = turmaId;
        if (disciplineTeacher.disciplina_id === 0 || disciplineTeacher.professor_id === 0) 
            return alert("Selecione uma disciplina e um professor");

        const response = await postClassDiscipline(disciplineTeacher);

        if (!response)
            return alert("Erro ao registrar turma-disciplina");

        alert("Turma-disciplina registrada com sucesso");
        props.onHide();
        window.location.reload();
        
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
                    value={disciplineTeacher.professor_id}
                    onChange={professorId => setDisciplineTeacher({ ...disciplineTeacher, professor_id: Number(professorId) })}
                />

                <SelectDiscipline
                    value={disciplineTeacher.disciplina_id}
                    onChange={disciplinaId => setDisciplineTeacher({ ...disciplineTeacher, disciplina_id: Number(disciplinaId) })}
                />

            </div>

            <div className={`${stl.foot} anime-bottom`}>
                <button
                    onClick={() => handleDisciplineTeacher(props.turmaId)}
                >
                    <BsCheck2All />
                    <span>Registrar</span>
                </button>
            </div>

        </Modal>
    );
}