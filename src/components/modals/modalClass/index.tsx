import { Modal } from "react-bootstrap";
import stl from "./modalClass.module.css"
import { BsXLg } from "react-icons/bs";
import { TitleAndDescription } from "../../titles";
import { InputClasseName, InputClasseYear, SelectCursos } from "../../inputs";
import React from "react";
import { postClasse, putClasse } from "../../../api/endpoints";

type ModalClassProps = {
  show: boolean;
  onHide: () => void;
  classToEdit?: {
    id?: number;
    nome: string;
    ano: string | number;
    curso_id: number;
  };
};

export function ModalClass(props: ModalClassProps) {

  const [dataClass, setDataClass] = React.useState({
    id: props.classToEdit ? props.classToEdit.id : undefined,
    nome: "",
    ano: "",
    cursoId: 0,
  });

  // Preenche o formulário ao abrir para edição
  React.useEffect(() => {
    if (props.classToEdit) {
      setDataClass({
        id: props.classToEdit.id,
        nome: props.classToEdit.nome,
        ano: String(props.classToEdit.ano),
        cursoId: props.classToEdit.curso_id,
      });
    } else {
      setDataClass({ id: 0, nome: "", ano: "", cursoId: 0 });
    }
  }, [props.classToEdit, props.show]);

  async function handleSubmit() {
    if (!dataClass.nome || !dataClass.ano || dataClass.cursoId === 0)
      return alert("Preencha todos os campos corretamente!");

    const anoFormatado = parseInt(dataClass.ano.replace(/\D/g, ""), 10);

    let dataToSend: any = {}

    let response;

    if (props.classToEdit) {
      
      dataToSend = {
        id: dataClass.id,
        nome: dataClass.nome,
        curso_id: dataClass.cursoId,
        ano: anoFormatado,
      };

      response = await putClasse(dataToSend);

    } else {

      dataToSend = {
        nome: dataClass.nome,
        curso_id: dataClass.cursoId,
        ano: anoFormatado,
      };

      response = await postClasse(dataToSend);

    }

    if (response) {
      alert(props.classToEdit ? "Turma editada com sucesso!" : "Turma criada com sucesso!");
      props.onHide();
      setDataClass({ id: 0, nome: "", ano: "", cursoId: 0 });
    } else {
      alert("Erro ao salvar turma. Tente novamente.");
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
          title={props.classToEdit ? "Editar Turma" : "Criar Turma"}
          desc={props.classToEdit
            ? "Altere os campos abaixo para editar a turma."
            : "Preencha os campos abaixo para criar uma nova turma."}
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
          onClick={handleSubmit}
        >
          {props.classToEdit ? "Salvar Alterações" : "Criar Turma"}
        </button>

      </div>
    </Modal>
  );
}