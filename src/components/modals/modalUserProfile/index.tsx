import { Modal } from "react-bootstrap";
import stl from "./modalUserProfile.module.css"
import { getMatriculas, getStudentById } from "../../../api/endpoints";
import React from "react";


export function ModalUserProfile(props: any) {

    const [user, setUser] = React.useState<any>()

    async function findStudentById() {

        const resMatricule = await getMatriculas()

        const posicao = resMatricule.findIndex(m => m.alunoId === 1);
      
        if (!resMatricule)
            return alert("User not found")

        setUser(resMatricule[posicao])

    }

    React.useEffect(() => {    
        findStudentById();
    }, []);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={stl.modal_Container}
      >

        <div className={stl.head}>
          
        </div>

        <div className={stl.body}>
            <div className={stl.img_name_email}>

                <div className={stl.img_circle}>
                    <div>
                        <span>L</span>
                    </div>
                </div>

                <div className={stl.name_email}>
                    <span>
                        username
                    </span>

                    <small>useremail@.com</small>

                </div>
            </div>

          
        </div>
        
        <div className={stl.foot}>

        </div>
       
      </Modal>
    );
}