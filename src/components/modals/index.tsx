import stl from './modals.module.css'
import Modal from 'react-bootstrap/Modal';
import { TitleAndDescription } from '../titles';
import { BsCheck2All, BsCloudArrowUp, BsXLg } from 'react-icons/bs';



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





// all export 

export * from './modalBlog';
export * from './modalClass';
export * from './modalAddStudent'
export * from './modalDiscipline'
export * from './modalCreateBlog'
export * from './modalToEndSession'
export * from './modalUpdateDataUserProfile'