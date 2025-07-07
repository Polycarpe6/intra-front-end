import { Modal } from "react-bootstrap";
import stl from "./alert.module.css"
import { BsHeart, BsMortarboard, BsQuote, BsSend, BsThreeDotsVertical } from "react-icons/bs";






export function Alert(props: any) {
    
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={stl.modal_Container}
        >
            <div className={stl.head}>
                    <div className={stl.img_name_level}>
                        <div className={stl.cicle_img}>
                            {/* <img src={img_use_post_blog} alt="" /> */}
                        </div>
                        <div className={stl.name_level}>
                            {/* <Link to={"profile/id"}>Lucas Pazito</Link> */}
                            <small>
                                <BsMortarboard />
                                <span>Coordenador do curo - há 20 min</span>
                            </small>
                        </div>
                    </div>

                    <small className={stl.dot}> 
                        <BsThreeDotsVertical />
                    </small>
                </div>
            
            <div className={stl.body_blog}>

                <div className={stl.left}>
                    <strong className={stl.title}>
                    <BsQuote />
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi sed corporis unde recusandae ratione delectus necessitatibus iusto!
                        </span>
                    </strong>
                    <span className={stl.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur inventore earum nulla sunt aspernatur reprehenderit ab sed. Blanditiis et praesentium corporis nemo nostrum, mollitia sequi qui quod quaerat cumque?
                    </span>
                </div>

                <div className={stl.right}>
                   
                </div>
                
            </div>
    
            <div className={stl.foot_blog}>
    
                <div className={stl.card_react}>
                <button>
                    <BsHeart />
                    <span>197 Gostos</span>
                </button>
    
                <button>
                    <BsSend />
                    <span>164 Comentarios</span>
                </button>
    
                
                </div>

                 <div className={stl.card_input_btn_comments}>
                    <input type="text" placeholder="Deixe aqui sua opinião..." />
                    <button>
                        <BsSend />
                    </button>
                </div>
    
    
            </div>
    
        </Modal>
    );
}












































































// import React from 'react';
// import stl from './alert.module.css'
// import { UncontrolledAlert } from 'reactstrap'

// interface IAlert {
//     color?: "success" | "warning" | "danger" | "" | undefined;
//     message?: string;
//     state: boolean;
// }

// export function useHookAlert() {
//     const [alert, setAlert] = React.useState<IAlert>({
//         color: "",
//         message: "",
//         state: true
//     });

//     function showAlert(message: string, color: "success" | "warning" | "danger" | "" = "success") {
//         setAlert({
//             color,
//             message,
//             state: true
//         });
//     }

//     function hideAlert() {
//         setAlert({
//             color: "",
//             message: "",
//             state: false
//         });
//     }

//     return {
//         alert,
//         setAlert,
//         showAlert,
//         hideAlert,
//     };
// }

// // O componente Alert recebe o estado do alerta por props
// export function Alert({ alert }: { alert: IAlert }) {
//     return (
//         <UncontrolledAlert
//             color={alert.color}
//             className={`${stl.alert} anime-top`}
//             style={{
//                 display: alert.state ? "flex" : "none"
//             }}
//         >
//             {alert.message}
//         </UncontrolledAlert>
//     )
// }