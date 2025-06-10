import { Modal } from "react-bootstrap";
import stl from "./modalClass.module.css"
import { BsXLg } from "react-icons/bs";
import { TitleAndDescription } from "../../titles";
import { InputClasseName, InputClasseYear, SelectCursos } from "../../inputs";
import React from "react";
import { postTurma } from "../../../api/endpoints";



export function ModalClass(props: any) {

  const [dataClass, setDataClass] = React.useState({
    nome: "",
    ano: "",
    cursoId: 0,
  });

  async function handleCreateClass() {
    if (!dataClass.nome || !dataClass.ano || dataClass.cursoId === 0) 
      return alert("Preencha todos os campos corretamente!");

    // Remove "/" e converte para inteiro
    const anoFormatado = parseInt(dataClass.ano.replace(/\D/g, ""), 10);

    const dataToSend = {
      nome: dataClass.nome,
      cursoId: dataClass.cursoId,
      ano: anoFormatado,
    };

    const response = await postTurma(dataToSend);
    if (response) {
      alert("Turma criada com sucesso!");
      props.onHide();
      setDataClass({ nome: "", ano: "", cursoId: 0 });
    } else {
      alert("Erro ao criar turma. Tente novamente.");
    }
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
            onChange={cursoId => setDataClass({ ...dataClass, cursoId: Number(cursoId) })}
        />

        <InputClasseName
          value={dataClass.nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataClass({ ...dataClass, nome: e.target.value })}
        />

        <InputClasseYear
          value={dataClass.ano}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataClass({ ...dataClass, ano: e.target.value })}
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