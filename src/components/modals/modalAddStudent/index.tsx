import Modal from 'react-bootstrap/Modal';
import stl from './modalAddStudent.module.css';
import { TitleAndDescription } from '../../titles';
import { InputCodProcess, InputEmail } from '../../inputs';
import { BsCheck2All, BsCloudArrowUp, BsXLg } from 'react-icons/bs';
import React from 'react';
import { postAluno } from '../../../api/endpoints';




export function ModalAddStudent(props: any) {


    const [student, setStudent] = React.useState({
        nome: "",
        email: "",

        // n_processo: "",
        // email: ""
    })

    const handleSubmit = async () => {

        const response = await postAluno(student);

        if (response) {
            console.log("Student registered successfully:", response);
            // Optionally, you can reset the form or close the modal here
            setStudent({ nome: "", email: "" });
            props.onHide(); // Close the modal after submission
        } else {
            console.error("Failed to register student");
        }

        console.log("Student data submitted:", student);
    };

    
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={stl.modal_student}
        >

            <div className={stl.head}>

                <TitleAndDescription
                title={"Registre um Aluno"}
                desc={"Preencha os campos abaixo para registrar um novo aluno no sistema. Certifique-se de inserir as informações corretas, incluindo o código de processo e o e-mail do aluno. Você também pode associá-lo a uma turma específica e, se necessário, fazer o upload de uma planilha com múltiplos registros."}
                />

                <button onClick={props.onHide}>
                <BsXLg />
                </button>
            </div>

            <div className={`${stl.body} anime-bottom`}>

                <InputCodProcess 
                    value={student.nome}
                    onChange={(e) => setStudent({...student, nome: e.target.value })}
                />
                
                <InputEmail 
                    value={student.email}
                    onChange={(e) => setStudent({...student, email: e.target.value })}
                />  
                
                
            </div>

            <div className={stl.foot}>

                <button 
                    className='anime-bottom'
                    onClick={handleSubmit}
                >
                    <BsCheck2All />
                    <span>Registrar Novo Aluno</span>
                </button>

                <button className='anime-bottom'>
                    <input type="file" />
                    <BsCloudArrowUp />
                    <span>Faz upload de uma planilha excel</span>
                </button>
                
            </div>
        
        </Modal>
    );
}