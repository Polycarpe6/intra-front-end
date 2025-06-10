import { Modal } from "react-bootstrap";
import stl from "./modalClass.module.css"
import { BsXLg } from "react-icons/bs";
import { TitleAndDescription } from "../../titles";
import { InputClasseName, InputClasseYear, SelectCursos } from "../../inputs";
import React from "react";



export function ModalClass(props: any) {

  const [dataClass, setDataClass] = React.useState({
    nome: "",
    ano: "2024/2025",
    cursoId: undefined,
  });

  async function handleCreateClass() {
    console.log(dataClass)
  }
    
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={stl.modal_Container}
    >

      <div className={stl.head}>
        <TitleAndDescription
          title={"Criar Turma"}
          desc={"Preencha os campos abaixo para criar uma nova turma."}
        />

        <button onClick={props.onHide}>
          <BsXLg />
        </button>
      </div>

      <div className={stl.body}> 


        <SelectCursos
          value={dataClass.cursoId}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDataClass({ ...dataClass, cursoId: parseInt(e.target.value) })}
        />

        <InputClasseName
          value={dataClass.nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataClass({ ...dataClass, nome: e.target.value })}
        />

        <InputClasseYear
          value={dataClass.ano}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataClass({ ...dataClass, ano: parseInt(e.target.value) })}
        />


      </div>

      <div className={stl.foot}>

        <button 
          className="anime-bottom"
          onClick={handleCreateClass}
        >
          Criar Turma
        </button>

      </div>
      
    </Modal>
  );
}