import Modal from 'react-bootstrap/Modal';
import stl from './modalAddStudent.module.css';
import { TitleAndDescription } from '../../titles';
import { InputCodProcess, InputEmail } from '../../inputs';
import { BsCheck2All, BsCloudArrowUp, BsXLg } from 'react-icons/bs';
import React from 'react';
import { postMatricula, postStudent } from '../../../api/endpoints';


interface IStudent {
    processNumber: string | number,
    email: string
}

export function ModalAddStudent(props: any) {


    const [student, setStudent] = React.useState<IStudent>({
        processNumber: "",
        email: ""
    })


    const handleSubmit = async () => {

        const response = await postStudent(student);

        if (response) {

            const respMatricula = await postMatricula(
                
                {
                    alunoId: Number(response.id),
                    turmaId: Number(props.classId)
                }
            )

            alert("Aluno Registrado com Sucesso");
            setStudent({ processNumber: 0, email: "" });
            props.onHide();
            window.location.reload()
            
        } else {
            console.error("Failed to register student");
        }

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
                    value={student.processNumber}
                    onChange={(e) => setStudent({...student, processNumber: Number(e.target.value) })}
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