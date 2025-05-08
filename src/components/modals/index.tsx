import stl from './modals.module.css'
import Modal from 'react-bootstrap/Modal';
import { TitleAndDescription } from '../titles';
import { InputClassNameT, InputCodProcess, InputEmail, Select } from '../inputs';
import { BsCheck2All, BsCloudArrowUp, BsXLg } from 'react-icons/bs';



export function ModalAddStudent(props: any) {
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={stl.modal_add_people_and_more}
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
        <InputCodProcess />
        <InputEmail />  
        {/* <Select
          label={"Seleccione Uma Turma"}
          placeholder={"Nenhuma Turma Seleccionada"}
          values={["II10A", "II10B", "II10C"]}
        />       */}
      </div>

     <div className={stl.foot}>

      <button 
        className='anime-bottom'
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

export function ModalAddTeacher(props: any) {
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={stl.modal_add_people_and_more}
    >
      <div className={stl.head}>
        <TitleAndDescription
          title={"Registre um Professor"}
          desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at inventore itaque debitis eaque incidunt veniam, officia temporibus facilis modi, nulla totam consectetur! Quaerat excepturi reiciendis error fuga. Quisquam, sit."}
        />

        <button onClick={props.onHide}>
          <BsXLg />
        </button>
      </div>

      
      
    </Modal>
  );
}

export function ModalAddClassT(props: any) {
    
  return (
    <Modal
      {...props}
      size="fullscreen"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={stl.modal_Container}
    >

      <div className={stl.head}>
        <TitleAndDescription
          title={"Crie Uma Nova Turma"}
          desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at inventore itaque debitis eaque incidunt veniam, officia temporibus facilis modi, nulla totam consectetur! Quaerat excepturi reiciendis error fuga. Quisquam, sit."}
        />

        <button onClick={props.onHide}>
          <BsXLg />
        </button>
      </div>

      <div className={stl.body_ModalAddClassT}> 

        <div className={stl.left}>

          <Select
            label={"Seleciona Um Curo"}
            placeholder={"Nenhum Curso Selecionado"}
            values={["Tecnico", "Gestão"]}
          />

          <Select
            label={"Seleciona Uma Classe"}
            placeholder={"Nenhuma Classe Selecionada"}
            values={["10ª", "11ª", "12ª", "13ª"]}
          />

          <InputClassNameT
            
          />

        </div>

        <div className={stl.right}>

          <TitleAndDescription
            title={"Seleciona as Disciplinas para essa turma"}
            desc={"Seleciona as disciplinas para essa turma. Clique em + para adicionar mais disciplinas."}
          />

          


          {/* <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Accordion Item #1
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Accordion Item #1
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}



           
        </div>


      </div>

      <div className={stl.foot_ModalAddClassT}>

      </div>
      
    </Modal>
  );
}



// all export 

export * from './modalBlog';
export * from './modalToEndSession'
export * from './modalUpdateDataUserProfile'