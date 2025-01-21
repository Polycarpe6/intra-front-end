import React from 'react'
import { Link } from 'react-router-dom'
import style from './list-people.module.css'
import { BsArrowsAngleExpand } from 'react-icons/bs'
import people1 from '../../assets/img/people/people1.jpg'
import people2 from '../../assets/img/people/people2.jpg'
import people3 from '../../assets/img/people/people3.jpg'


interface IListPeople {
    desc?: string
    linkPath: string 
}

export function ListPeople( {desc, linkPath}:IListPeople ) {

    return (
        <div className={style.card_list_people}>

            <ul>
                <li className={"anime-bottom"}>
                    <img 
                        src={people1}
                        alt="Profile Picture" 
                    />
                </li>
                <li className={"anime-bottom"}>
                    <img 
                        src={people2}
                        alt="Profile Picture" 
                    />
                </li>
                <li className={"anime-bottom"}>
                    <img 
                        src={people3}
                        alt="Profile Picture" 
                    />
                </li>
               
                <li className={"anime-bottom"}>
                    <Link to={linkPath}>
                        <BsArrowsAngleExpand />
                    </Link>
                </li>

            </ul>

            <span className={"anime-bottom"}>{desc}</span>

        </div>
    )
}
