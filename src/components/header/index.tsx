import React from 'react'
import stl from './header.module.css'
import { Link } from 'react-router-dom'
// import logo from '../../assets/images/logo.png'
import {BsBell, BsCaretDownFill, BsList, BsMortarboard} from 'react-icons/bs'
import img_profile from '../../assets/img/default.jpg'

export function Header() {

    return (
        <header className={stl.header} id="header">
            <nav className={`container ${stl.nav_header}`}>

                <div className={stl.card_logo_button_aside}>

                    <Link to={"/"} className={stl.logo}>
                        {/* <img src={logo} alt="" /> */}
                        <span>IN</span>TRA
                    </Link>

                    <BsList id="showAside" />
                    
                </div>

                <div className={stl.nav_header_link}>

                    {/* <Link to={"/notifacations"} className={stl.link_news} id="news-user-online">
                        <BsBell className={stl.icon_news} />
                    </Link> */}

                    <div className={stl.card_img_and_name}>

                        <div className={stl.card_img_header} id="card-img-header">
                            <Link to={'/profile'}>
                                <img 
                                    src={img_profile} 
                                    id="img-header"
                                />
                            </Link>
                        </div>
                        <div className={stl.name_and_icon} id="name-and-icon-header">
                            <strong>
                                <Link to={'/profile'}>
                                    <span id="name-header">Osvaldo</span>
                                    <BsCaretDownFill />
                                </Link>
                            </strong>
                            <small>
                                <BsMortarboard />
                                <span>II10A - Nº Proc 34524</span>
                            </small>
                        </div>

                        {/* <ul className={stl.list_dropdown_header} id="list-dropdown-header">

                            <li>
                                <a href="#">
                                    <i className="bi bi-person"></i>
                                    <span>Meu Perfil</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="bi bi-gear"></i>
                                    <span>Configurações</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="bi bi-info-lg"></i>
                                    <span>Ajuda?</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Terminar sessão</span>
                                </a>
                            </li>
                            
                        </ul> */}

                    </div>

                </div>

            </nav>
        </header>
    )
}