// import React from 'react'
import stl from './header.module.css'
import { Link } from 'react-router-dom'
import { BsCaretDownFill, BsFeather,  BsMortarboard} from 'react-icons/bs'
import React from 'react';
import { UserContext } from '../../context';

export function Header() {

    const { data } = React.useContext(UserContext);

    const { user } = data

    return (
        <header className={stl.header} id="header">
            <nav className={`container ${stl.nav_header}`}>

                <div className={stl.card_logo_button_aside}>

                    <Link to={"/"} className={stl.logo}>
                        <BsFeather />
                        <div>
                            <span>n</span>tra
                        </div>
                    </Link>
                    
                </div>

                <div className={stl.nav_header_link}>

                    <div className={stl.card_img_and_name}>

                        <div className={stl.card_img_header} id="card-img-header">
                            <Link to={'/profile'}>
                                <div>
                                    <span>
                                        {user.nome[0]}
                                    </span>
                                </div>
                            </Link>
                        </div>
                        
                        <div className={stl.name_and_icon} id="name-and-icon-header">
                            <strong>
                                <Link to={'/profile'}>
                                    <span id="name-header">
                                        {
                                            user.nome.split(" ")[0]
                                        }
                                    </span>
                                    <BsCaretDownFill />
                                </Link>
                            </strong>
                            <small>
                                <BsMortarboard />
                                {
                                    (user.role === "student") && (
                                        <span>Aluno</span>
                                    )
                                }

                                {
                                    (user.role === "teacher") && (
                                        <span>Professor</span>
                                    )
                                }

                                {
                                    (user.role === "admin") && (
                                        <span>Administrador</span>
                                    )
                                }
                            </small>
                        </div>

                    </div>

                </div>

            </nav>
        </header>
    )
}