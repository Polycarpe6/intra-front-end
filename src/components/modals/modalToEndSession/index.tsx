import { BsXLg } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import stl from "./modalToEndSession.module.css"
import { TitleAndDescription } from "../../titles";
import { useNavigate } from "react-router-dom";

export function ModalToEndSession(props: any) {

    const navigate = useNavigate();

    function logOut() {
      localStorage.removeItem("INTRADB");
      window.location.reload();
      navigate("/");
    }
    
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

            <button
              onClick={logOut}
              className="anime-bottom"
            >
              Terminar Sessão
            </button>

        </div>
       
      </Modal>
    );
}