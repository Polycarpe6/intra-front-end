import { BsXLg } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import stl from "./modalToEndSession.module.css"
import { TitleAndDescription } from "../../titles";

export function ModalToEndSession(props: any) {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={stl.modal_Container}
      >
        <div className={stl.head}>
          <TitleAndDescription
            title={"Terminar a sessão"}
            desc={"Deseja realmente terminar sua sessão?"}
          />

          <button onClick={props.onHide}>
            <BsXLg />
          </button>
        </div>
        
        <div className={stl.foot}>
            <button className="anime-bottom">Terminar Sessão</button>
        </div>
       
      </Modal>
    );
}