import React, { useState } from 'react';
import stl from './processes.module.css';
import { BsFeather } from 'react-icons/bs';
import { TitleAndDescription } from '../titles' 
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';


export function Processes() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${stl.processes} anime-move-my-cart`}
        onClick={toggleOffcanvas}
      >
        <BsFeather />
      </button>

      <Offcanvas 
            isOpen={isOpen} 
            toggle={toggleOffcanvas}
            direction={"end"}
            className={stl.offcanvasNotasStudent}
        >

        <div className={stl.head}>
            
            <TitleAndDescription 
                title="Notas & Desempenho"
                desc="Acompanhe de forma clara e detalhada todas as suas notas, médias e evolução ao longo do tempo. Visualize seu desempenho por disciplina, identifique pontos fortes e áreas que precisam de mais atenção."
            />

            <OffcanvasHeader 
                toggle={toggleOffcanvas}
                className="anime-left"
            ></OffcanvasHeader>

        </div>

        <div className={`${stl.body} `}>
            
            <strong className="anime-left">1º Trimestre</strong>

            <div className={`${stl.card_note_home_page} anime-bottom`}>

              <strong>
                  Tic
              </strong>

              <div className={stl.card_note_home_page_content}>
                  <h2>8.5</h2>
                  <small>Nota Final</small>
              </div>

            </div>

            <div className={`${stl.card_note_home_page} anime-bottom`}>

              <strong>
                  Tic
              </strong>

              <div className={stl.card_note_home_page_content}>
                  <h2>8.5</h2>
                  <small>Nota Final</small>
              </div>

            </div>

            <div className={`${stl.card_note_home_page} anime-bottom`}>

              <strong>
                  Tic
              </strong>

              <div className={stl.card_note_home_page_content}>
                  <h2>8.5</h2>
                  <small>Nota Final</small>
              </div>

            </div>

            <div className={`${stl.card_note_home_page} anime-bottom`}>

              <strong>
                  Tic
              </strong>

              <div className={stl.card_note_home_page_content}>
                  <h2>8.5</h2>
                  <small>Nota Final</small>
              </div>

            </div>

        </div>

      </Offcanvas>
    </>
  );
}
