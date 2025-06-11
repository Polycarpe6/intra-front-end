import React from 'react';
import stl from './aside.module.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context';
import { HookShowAside } from '../../hooks';
import { ModalToEndSession } from '../modals';
import { BsArrowBarRight } from 'react-icons/bs';
import { adminRoutes, teacherRoutes, studentRoutes } from './routes';

export function Aside() {
    const { user } = React.useContext(UserContext);
    const [modalShow, setModalShow] = React.useState(false);
    const { showAside } = HookShowAside()

    const getRoutes = () => {
        switch (user?.role) {
            case "admin":
                return adminRoutes;
            case "teacher":
                return teacherRoutes;
            case "student":
                return studentRoutes;
            default:
                return [];
        }
    };


    return (
        <aside 
            className={stl.aside}
            style={{
                display: !showAside ? "flex" : "none"
            }}
        >
            <ul>
                {getRoutes().map((route) => (
                    <li key={route.path}>
                        <NavLink to={route.path}>
                            {route.icon}
                            <small>{route.label}</small>
                        </NavLink>
                    </li>
                ))}

                <li>
                    <button 
                        onClick={() => setModalShow(true)}
                    >
                        <BsArrowBarRight />
                        <small>Terminar sessão</small>
                    </button>

                    <ModalToEndSession
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </li>
            </ul>
        </aside>
    );
}
