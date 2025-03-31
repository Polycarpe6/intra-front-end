import React from 'react'
import stl from './schedules.module.css'
import { BsDot, BsGeoAlt, BsPencil } from 'react-icons/bs'

interface IProposSchedules {
    day: string;
    times: 
        [
            {
                time: {
                    init: string, 
                    end: string
                }, 
                nameOfTheDiscipline: string, 
                state: boolean,
            }
        ],
    role: string,
}


export function Schedules({day, times, role}:IProposSchedules) {


    return (
            <article className={`${stl.card_horary} anime-bottom`}>

                <strong>
                    {day}
                </strong>

                    <div className={`${stl.card_body} anime-bottom`}>

                        <ul>

                            {
                                times.map((element) => {

                                    return(
                                        <li>
                                            <div className={stl.content}>
                                                {
                                                    element.state? <BsGeoAlt className={stl.active}/> : <BsDot/>
                                                }

                                                <div>
                                                    <strong>{element.time.init} - {element.time.end}</strong>
                                                    <span>{element.nameOfTheDiscipline}</span>
                                                </div>
                                            </div>
                                            <div className={stl.card_button}>
                                                {role !== "student" && (<button> <BsPencil /> </button>)}
                                            </div>
                                        </li>
                                    )
                                    
                                })
                            }
                        
                        </ul>

                    </div>

            </article>
    )
}
