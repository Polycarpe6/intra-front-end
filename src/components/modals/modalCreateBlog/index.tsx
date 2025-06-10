import { BsXLg } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import stl from "./modalCreateBlog.module.css"
import { TitleAndDescription } from "../../titles";

export function ModalCreateBlog(props: any) {
    
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
            title={"Crie um novo Blog"}
            desc={"Crie um novo blog para compartilhar informações e novidades com a comunidade."}
          />

          <button onClick={props.onHide}>
            <BsXLg />
          </button>

        </div>
        
       
      </Modal>
    );
}