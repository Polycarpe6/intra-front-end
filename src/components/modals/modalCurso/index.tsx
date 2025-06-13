import React from "react";
import { BsXLg } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import stl from "./modalCurso.module.css"
import { InputCurso } from "../../inputs";
import { TitleAndDescription } from "../../titles";
import { postCurso, putCurso } from "../../../api/endpoints";



export function ModalCurso(props: any) {

    const [curso, setCurso] = React.useState(
        props.cursoToEdit || {  id: "", nome: ""}
    )
    
    React.useEffect(() => {
        setCurso(props.cursoToEdit || { id: "", nome: "" });
    }, [props.cursoToEdit, props.show]);

    async function handleCurso() {

        if (!curso.nome.trim())
            return alert("Preenche o campo a baixo!!")

        if (props.cursoToEdit) {

            const response = await putCurso(curso)

            if (response) {
                props.onHide();
                return alert("Curso Atualizado com sucesso!!!")
            }


        } else {

            const response = await postCurso({nome: curso.nome})
    
            if (response) {
                props.onHide();
                return alert("Curso registrado com sucesso!!!")
            }
        }

    }
    
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={stl.modal_curso}
        >

            <div className={stl.head}>

                <TitleAndDescription
                    title={
                        props.cursoToEdit ? "Editar o curso" : "Registre um curso"
                    }
                    desc={
                        props.cursoToEdit ? "Altere os campos abaixo para atualizar o curso." : "Preencha os campos abaixo para registrar um novo curso."
                    }
                />

                <button onClick={props.onHide}>
                    <BsXLg />
                </button>

            </div>

            <div className={stl.body}> 
                <InputCurso
                    value={curso.nome}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurso({ ...curso, nome: e.target.value })}
                />
            </div>

            <div className={stl.foot}>

                <button 
                    className="anime-bottom"
                    onClick={handleCurso}
                >
{                   props.cursoToEdit ? "Salvar Alterações" : "Registrar Novo curso"}
                </button>

            </div>
        
        </Modal>
    );

}