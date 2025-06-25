import { BsXLg } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import stl from "./modalTrimestre.module.css";
import { TitleAndDescription } from "../../titles";
import React from "react";
import { InputNumberTrimestre, InputYearEndTrimestre, InputYearInitTrimestre, InputYearTrimestre } from "../../inputs";
import { postTrimestre } from "../../../api/endpoints";



export function ModalTrimestre(props: any) {

    const [trimestre, setTrimestre] = React.useState(
        {  
            id: "",
            ano: "",
            numero: "",
            dataInicio: "",
            dataFim: "",
        }
    )
    
    

    async function handleTrimestre() {

        if (!trimestre.numero.trim() || !trimestre.ano.trim() || !trimestre.dataInicio.trim() || !trimestre.dataFim.trim())
            return alert("Preencha o campo número do trimestre!!")

        let trimestreData = {
                numero: Number(trimestre.numero.trim()),
                ano: Number(trimestre.ano.trim().replace("/", "")),
                inicio: new Date(trimestre.dataInicio.trim()),
                fim: new Date(trimestre.dataFim.trim())
        }

        try {
            const response = await postTrimestre(trimestreData);

            if (response) {
                alert("Trimestre registrado com sucesso!");
                props.onHide(); // Fecha o modal após o registro
            }
        } catch (error) {
            console.error("Erro ao registrar trimestre:", error);
            alert("Erro ao registrar trimestre. Tente novamente.");
        }


    }
    
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={stl.modal_trimestre}
        >

            <div className={stl.head}>

                <TitleAndDescription
                    title={"Registrar Trimestre"}
                    desc={"Preencha os campos a baixo para registrar um novo trimestre."}
                />

                <button onClick={props.onHide}>
                    <BsXLg />
                </button>

            </div>

            <div className={stl.body}> 

                <InputNumberTrimestre
                    value={trimestre.numero}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTrimestre({ ...trimestre, numero: e.target.value })}
                />

                <InputYearTrimestre
                    value={trimestre.ano}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTrimestre({ ...trimestre, ano: e.target.value })}
                />

                <InputYearInitTrimestre
                    value={trimestre.dataInicio}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTrimestre({ ...trimestre, dataInicio: e.target.value })}
                />

                <InputYearEndTrimestre
                    value={trimestre.dataFim}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTrimestre({ ...trimestre, dataFim: e.target.value })}
                />

            </div>

            <div className={stl.foot}>

                <button 
                    className="anime-bottom"
                    onClick={handleTrimestre}
                >
                    <span>Registrar Trimestre</span>
                </button>

            </div>
        
        </Modal>
    );

}