import { Modal } from "react-bootstrap";
import { TitleAndDescription } from "../../titles";
import { BsXLg } from "react-icons/bs";
import stl from "./modalUpdateDataUserProfile.module.css"


export function ModalUpdateDataUserProfile(props: any) {

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={stl.modal_Container}
      >
          <div className={stl.head}>
            <TitleAndDescription
              title={"Esse é o modal de atualizar o perfil!!"}
              desc={"..."}
            />
  
            <button onClick={props.onHide}>
              <BsXLg/>
            </button>
          </div>
       
      </Modal>
    );
      
    
}
