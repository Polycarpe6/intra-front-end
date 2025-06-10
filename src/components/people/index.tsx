import React from 'react'
import { Link } from 'react-router-dom'
import stl from './people.module.css'
import people1 from '../../assets/img/people/people1.jpg'
import people2 from '../../assets/img/people/people2.jpg'
import people3 from '../../assets/img/people/people3.jpg'
import imgUser from '../../assets/img/default.jpg'
import { BsArrowsAngleExpand, BsAt, BsChevronDown, BsFolder, BsMortarboard, BsPencil, BsTrash } from 'react-icons/bs'


interface IPeopleGroup {
    desc?: string
    linkPath?: string | undefined
}

export function PeopleGroup( {desc, linkPath = "#"}:IPeopleGroup ) {

    return (
        <div className={stl.card_list_people}>

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
        <article className={`${stl.people_item} anime-bottom`}>

            <div className={stl.body}>

                {/* <div className={stl.cod_proc}>
                    <BsFolder />
                    <span>Nº Proc {n_process}</span>
                </div> */}

                <div className={stl.img_and_name}>
                    <div className={stl.img}>
                        <Link to={`/profile/${id}`}>
                            <img src={imgUser} alt="" />
                        </Link>
                    </div>
                    <div className={stl.name_email}>
                        <Link to={`/profile/${id}`} className={stl.name}>{name}</Link>
                        <Link 
                            target='_blank' 
                            to={"https://mail.google.com/mail/u/0/"} 
                            className={stl.email}
                        >
                            {email}
                        </Link>
                    </div>
                </div>


                <div className={stl.n_process_or_discipline}>
                    <BsFolder />
                    <strong>{n_process}</strong>
                </div>

                <Link 
                    className={stl.usernameclass}
                    to={`/profile/${id}`}
                >
                    <BsAt />
                    <span>{username}</span>
                </Link>
                

            </div>

            <div className={stl.foot}>

                <button

                >
                    <BsPencil />
                    <span>Editar</span>
                </button>

                <button

                >
                    <BsTrash />
                    <span>Remover</span>
                </button>

            </div>

        </article>
    )
}