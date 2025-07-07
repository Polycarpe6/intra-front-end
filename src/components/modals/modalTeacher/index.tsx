import { BsCheck2, BsCheck2All, BsTrash2, BsTrash3, BsXLg } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import stl from "./modalTeacher.module.css";
import { TitleAndDescription } from "../../titles";
import { InputBI, InputEmail } from "../../inputs";
import React from "react";
import { postTeacher } from "../../../api/endpoints";



interface ITeacher {
    biNumber: string;
    email: string;
    url: string;
}


export function ModalTeacher(props: any) {

    const [dataTeacher, setDataTeacher] = React.useState<ITeacher>({
        biNumber: "",
        email: "",
        url: ""    
    });

    async function handleTeacher() {

        dataTeacher.url = "http://localhost:5173/signup/teacher"

        console.log(dataTeacher)

        const response = await postTeacher(dataTeacher);
        if (response) {
            alert("Professor registrado com sucesso!");
            props.onHide();
        }
        else {
            alert("Erro ao registrar professor. Tente novamente.");
        }
    }
    
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={stl.modal_teacher}
        >
            <div className={stl.head}>

                <TitleAndDescription
                title={"Registre um Professor"}
                desc={"Preencha os campos abaixo para registrar um novo professor."}
                />

                <button onClick={props.onHide}>
                <BsXLg />
                </button>

            </div>
            
            <div className={stl.body}>

                <InputBI
                    value={dataTeacher.biNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataTeacher({ ...dataTeacher, biNumber: e.target.value })}
                />

                <InputEmail
                    value={dataTeacher.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataTeacher({ ...dataTeacher, email: e.target.value })}
                />

            </div>

            <div className={stl.foot}>

                <button
                    className="anime-bottom"
                    onClick={handleTeacher}
                >
                    <BsCheck2All />
                    <span>Registrar Professor</span>
                </button>


                <button
                    className="anime-bottom"
                >
                    <BsTrash3 />
                    <span>Remover</span>
                </button>

            </div>
        
        
        
        </Modal>
    );
}