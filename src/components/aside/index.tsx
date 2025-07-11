import React from 'react';
import stl from './aside.module.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context';
import { HookShowAside } from '../../hooks';
import { ModalToEndSession } from '../modals';
import { BsArrowBarRight } from 'react-icons/bs';
import { adminRoutes, teacherRoutes, studentRoutes } from './routes';
import { useUser } from '../../hooks/useUser';

export function Aside() {
    const { data: { user }, dataStudent } = useUser();
    const [modalShow, setModalShow] = React.useState(false);
    const { showAside } = HookShowAside()

    const getRoutes = () => {
        switch (user?.role) {
            case "admin":
                return adminRoutes;
            case "teacher":
                return teacherRoutes;
            case "student":
                return studentRoutes(dataStudent?.matricula[0].turma.id || 0);
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
