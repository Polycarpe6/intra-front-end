import React from 'react';
import { BsCheck2All, BsCheckLg, BsPlus, BsXLg } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { TitleAndDescription } from '../../titles';
import stl from './modalMiniPauta.module.css';



export function ModalMiniPauta(props: any) {
    

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={stl.modal_mini_pauta}
        >

            <div className={stl.head}>
                <TitleAndDescription
                    title={"Mini pauta"}
                    desc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolor dicta accusamus, officia consectetur rerum tempora earum. Iusto nostrum amet cupiditate excepturi est laborum quis velit a iste. Totam, quisquam."}
                    
                />
                
                <button onClick={props.onHide}>
                    <BsXLg />
                </button>
            </div>

            <div className={`${stl.body} anime-bottom`}>
                
                

            </div>

            <div className={`${stl.foot} anime-bottom`}>
                <button
                >
                    <BsCheck2All />
                    <span>Registrar</span>
                </button>
            </div>

        </Modal>
    );
}