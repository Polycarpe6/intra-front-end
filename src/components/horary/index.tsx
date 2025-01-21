import React from 'react'
import { Col_Xl_3 } from '../col'
import stl from './horary.module.css'
import { BsDot, BsGeoAlt } from 'react-icons/bs'


interface IProposHorary {
    day: string;
    horaryClass: [
        {
            time: {
                init: string, 
                end: string
            }, 
            disc: string, 
            state: boolean
        }
    ];
}


export function Horary({day, horaryClass}:IProposHorary) {
     

    return (
            <article className={`${stl.card_horary} anime-bottom`}>

                <strong>{day}</strong>

                    <div className={`${stl.card_body} anime-bottom`}>

                        <ul>

                            {
                                horaryClass.map((element) => {
                                    
                                    const {time} = element

                                    return (
                                        <li>
                                            {
                                                element.state ? <BsGeoAlt className={stl.active}/> : <BsDot/>  // Adicionar icone de checkmark se o horário estiver marcado
                                            }
                        
                                            <div>
                                                <strong>{time.init} - {time.end}</strong>
                                                <span>{element.disc}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            {/* <li>
                                <BsGeoAlt className={stl.active}/>
                                <div className={stl.content_horario}>
                                    <strong>00h:00 - 00h:00</strong>
                                    <span>Disciplina</span>
                                </div>
                            </li>

                            <li>
                                <BsDot/>
                                <div className={stl.content_horario}>
                                    <strong>00h:00 - 00h:00</strong>
                                    <span>Disciplina</span>
                                </div>
                            </li>
                            
                            <li>
                                <BsDot />
                                <div className={stl.content_horario}>
                                    <strong>00h:00 - 00h:00</strong>
                                    <span>Disciplina</span>
                                </div>
                            </li>

                            <li>
                                <BsDot />
                                <div className={stl.content_horario}>
                                    <strong>00h:00 - 00h:00</strong>
                                    <span>Disciplina</span>
                                </div>
                            </li>

                            <li>
                                <BsDot />
                                <div className={stl.content_horario}>
                                    <strong>00h:00 - 00h:00</strong>
                                    <span>Disciplina</span>
                                </div>
                            </li>

                            <li>
                                <BsDot />
                                <div className={stl.content_horario}>
                                    <strong>00h:00 - 00h:00</strong>
                                    <span>Disciplina</span>
                                </div>
                            </li> */}
                        
                        </ul>
                    </div>

            </article>
    )
}
