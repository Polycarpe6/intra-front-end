import React from 'react'
import { Link } from 'react-router-dom'
import style from './people.module.css'
import people1 from '../../assets/img/people/people1.jpg'
import people2 from '../../assets/img/people/people2.jpg'
import people3 from '../../assets/img/people/people3.jpg'
import { BsArrowsAngleExpand, BsAt, BsChevronDown, BsFolder, BsMortarboard } from 'react-icons/bs'


interface IPeopleGroup {
    desc?: string
    linkPath?: string | undefined
}

export function PeopleGroup( {desc, linkPath = "#"}:IPeopleGroup ) {

    return (
        <div className={style.card_list_people}>

            <ul>
                <li>
                    <img 
                        src={people1}
                        alt="Profile Picture" 
                    />
                </li>
                <li>
                    <img 
                        src={people2}
                        alt="Profile Picture" 
                    />
                </li>
                <li>
                    <img 
                        src={people3}
                        alt="Profile Picture" 
                    />
                </li>
               
                <li>
                    <Link to={linkPath}>
                        <BsArrowsAngleExpand />
                    </Link>
                </li>

            </ul>

            <span>{desc}</span>

        </div>
    )
}


interface IPeopleItem {
    id: number
    n_process?: string
    name: string
    email: string
    username: string
    classOrDiscipline: string | undefined
}

export function PeopleItem({id, n_process, name, email, username, classOrDiscipline}:IPeopleItem) {

    return (
        <article className={`${style.people_item} anime-bottom`}>

            <div className={style.cod_proc}>
                <BsFolder />
                <span>Nº Proc {n_process}</span>
            </div>

            <div className={style.img_and_name}>
                <div className={style.img}>
                    <Link to={`/profile/${id}`}>
                        <img src={people3} alt="" />
                    </Link>
                </div>
                <div className={style.name_email}>
                    <Link to={`/profile/${id}`} className={style.name}>{name}</Link>
                    <Link 
                        target='_blank' 
                        to={"https://mail.google.com/mail/u/0/"} 
                        className={style.email}
                    >
                        {email}
                    </Link>
                </div>
            </div>

            <Link 
                className={style.usernameclass}
                to={`/profile/${id}`}
            >
                <BsAt />
                <span>{username}</span>
            </Link>

            <div className={style.class_or_discipline}>
                <BsMortarboard />
                <strong>{classOrDiscipline}</strong>
            </div>

            <button 
                className={style.status}
                onClick={() => {alert("Deve aparecer um modal com mais informacoes do aluno!!")}}
            >
                <BsChevronDown />
            </button>

        </article>
    )
}