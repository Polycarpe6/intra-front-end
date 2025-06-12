import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { InputDiscipline } from '../../inputs';
import stl from './modalAddDiscipline.module.css';
import { TitleAndDescription } from '../../titles';
import { BsCheck2All, BsXLg } from 'react-icons/bs';
import { postDisciplinas, putDisciplinas } from '../../../api/endpoints';

export function ModalDiscipline(props: any) {
    const [discipline, setDiscipline] = React.useState(
        props.disciplineToEdit || { id: "", nome: "" }
    );

    React.useEffect(() => {
        setDiscipline(props.disciplineToEdit || { id: "", nome: "" });
    }, [props.disciplineToEdit, props.show]);

    const handleSubmit = async () => {

        let response;

        
        if (discipline.id) {
            response = await putDisciplinas({id: discipline.id, nome: discipline.nome});
        } else {
            response = await postDisciplinas({nome: discipline.nome});
        }
        if (response) {
            if (props.onDisciplineRegistered) {
                props.onDisciplineRegistered();
            }
            props.onHide();
        } else {
            console.error("Erro ao registrar disciplina");
        }
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={stl.modal_add_discipline}
        >
            <div className={stl.head}>
                <TitleAndDescription
                    title={props.disciplineToEdit ? "Editar Disciplina" : "Registre uma Disciplina"}
                    desc={props.disciplineToEdit
                        ? "Altere os campos abaixo para atualizar a disciplina."
                        : "Preencha os campos abaixo para registrar uma nova disciplina no sistema."}
                />
                <button onClick={props.onHide}>
                    <BsXLg />
                </button>
            </div>

            <div className={`${stl.body} anime-bottom`}>
                <InputDiscipline 
                    value={discipline.nome}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDiscipline({...discipline, nome: e.target.value})}
                />
            </div>

            <div className={`${stl.foot} anime-bottom`}>
                <button 
                    className='anime-bottom'
                    onClick={handleSubmit}
                >
                    <BsCheck2All />
                    <span>{props.disciplineToEdit ? "Salvar Alterações" : "Registrar Nova disciplina"}</span>
                </button>
            </div>
        </Modal>
    );
}