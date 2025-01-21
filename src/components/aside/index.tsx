import React from 'react'
import stl from './aside.module.css'
import { NavLink } from 'react-router-dom'
import { BsArrowBarRight, BsBarChart, BsBell, BsHouse, BsMortarboard, BsSearch } from 'react-icons/bs'
import { ModalToEndSession } from '../modals'


export function Aside() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <aside className={stl.aside}>

            <ul>
                
                <li>
                    <NavLink to={"/"}>
                        <BsHouse />
                        <small>Inicio</small>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/search"}>
                        <BsSearch />
                        <small>Explore</small>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/class"}>
                        <BsMortarboard />
                        <small>Turma</small>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/notification"}>
                        <BsBell />
                        <small>Noti...</small>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/char"}>
                        <BsBarChart />
                        <small>Desem...</small>
                    </NavLink>
                </li>

                <li>
                    <button onClick={() => setModalShow(true)}>
                        <BsArrowBarRight />
                        <small>Term...</small>
                    </button>

                    <ModalToEndSession 
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </li>

            </ul>

        </aside>
    )
}
