import React from 'react'
import { Link } from 'react-router-dom'
import img_coord from '../../assets/img/default.jpg'
import stl from './discipline.module.css'
import { BsBookmarks, BsThreeDotsVertical } from 'react-icons/bs'

export function LispDisciplineClass() {

    return (
        <ul className={stl.list_discipline}>

            <li className="anime-bottom">
            
                <p className={stl.num}>
                    Nº 01
                </p>
            
                <div className={stl.cod_disc}>
                    <BsBookmarks />
                    <span>-  MATEMATICA</span>
                </div>
            
                <div className={stl.img_and_name_teacher}>
                    <div className={stl.img}>
                        <Link to={"/profile"}>
                            <img src={img_coord} alt="" />
                        </Link>
                    </div>
                    <div className={stl.name_email}>
                        <Link to={"/profile"} className={stl.name}>Professora Maria da Silva</Link>
                        <Link target='_blank' to={"https://mail.google.com/mail/u/0/"} className={stl.email}>
                            msilva@gmail.com
                        </Link>
                    </div>
                </div>
            
                <button 
                    className={stl.btnEdit}
                    onClick={() => alert("Ok!")}
                >
                    <BsThreeDotsVertical />
                </button>

                
            
            </li>
        </ul>
    )
}
