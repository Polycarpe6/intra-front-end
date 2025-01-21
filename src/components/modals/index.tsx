import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import stl from './modals.module.css'

export function ModalToCommentBlog(props: any) {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Modal dos comentarios</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at inventore itaque debitis eaque incidunt veniam, officia temporibus facilis modi, nulla totam consectetur! Quaerat excepturi reiciendis error fuga. Quisquam, sit.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}


export function ModalToEndSession(props: any) {
    
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={stl.modal_Container}
      >
        <strong className={stl.title_modal}>Terminar a sessão</strong>
        <p>
            Deseja realmente terminar sua sessão?
        </p>
        
        <div className={stl.btn_group}>
            <button className={stl.btn_cancelar}>Cancelar</button>
            <button className={stl.btn_confirmar} onClick={props.onHide}>Confirmar</button>
        </div>
       
          {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal>
    );
}