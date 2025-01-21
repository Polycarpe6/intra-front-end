import React from 'react'
import stl from './profile.module.css'
import { CardProfile, Col_Xl_8, InputName } from '../../components'
import { Accordion, Tab, Tabs } from 'react-bootstrap'
import { BsAt, BsAward, BsBezier2, BsBookmark, BsBookmarks, BsCalendar4Week, BsEnvelope, BsFolder, BsGenderNeuter, BsGeo, BsHash, BsHouse, BsMortarboard, BsPencil, BsPerson, BsPhone, BsPinAngle, BsThreads } from 'react-icons/bs'

export function Profile() {

    return (
        <main className={`container d-flex ${stl.profile_page}`}>

                <CardProfile />

                <Col_Xl_8>
                    <div className={stl.content_profile}>
                        <Tabs
                            defaultActiveKey="home"
                            transition={true}
                            id="noanim-tab-example"
                            className={stl.nav_profile}
                        >
                            <Tab 
                                eventKey="home" 
                                title="Início" 
                                className={`anime-bottom ${stl.home_profile_page}`}
                            >

                                <div className={stl.card_title_list_content_profile_home}>
                                    <strong>Informações do Usuário</strong>
                                    <ul>
                                        <li>
                                            <strong>Nome do Usuário</strong>
                                            <div>
                                                <span>
                                                    <BsAt />
                                                    <small>osvaldo.intra@ipil</small>
                                                </span>
                                                {/* <button><BsPencil /></button> */}
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Endereço Email</strong>
                                            <div>
                                                <span>
                                                    <BsEnvelope />
                                                    <small>osvaldo@gmail.com</small>
                                                </span>
                                                <button><BsPencil /></button>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Primeiro Nome</strong>
                                            <div>
                                                <span>
                                                    <BsPerson />
                                                    <small>Osvaldo</small>
                                                </span>
                                                <button><BsPencil /></button>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Ultimo Nome</strong>
                                            <div>
                                                <span>
                                                    <BsPerson />
                                                    <small>Pascual</small>
                                                </span>
                                                <button><BsPencil /></button>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Gênero</strong>
                                            <div>
                                                <span>
                                                    <BsGenderNeuter />
                                                    <small>Masculino</small>
                                                </span>
                                                <button><BsPencil /></button>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Data de nascimento</strong>
                                            <div>
                                                <span>
                                                    <BsCalendar4Week />
                                                    <small>24 / 12 / 2006</small>
                                                </span>
                                                <button><BsPencil /></button>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className={stl.card_title_list_content_profile_home}>
                                    <strong>Dados do Processo</strong>
                                    <ul>
                                        <li>
                                            <strong>Nº de Processo</strong>
                                            <div>
                                                <span>
                                                    <BsFolder />
                                                    <small>34524</small>
                                                </span>
                                                {/* <button><BsPencil /></button> */}
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Area de Formação</strong>
                                            <div>
                                                <span>
                                                    <BsBookmarks />
                                                    <small>Informática</small>
                                                </span>
                                                {/* <button><BsPencil /></button> */}
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Curso</strong>
                                            <div>
                                                <span>
                                                    <BsBezier2 />
                                                    <small>Tecnico de Informatica</small>
                                                </span>
                                                {/* <button><BsPencil /></button> */}
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Classe</strong>
                                            <div>
                                                <span>
                                                    <BsAward />
                                                    <small>10ª</small>
                                                </span>
                                                {/* <button><BsPencil /></button> */}
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Turma</strong>
                                            <div>
                                                <span>
                                                    <BsBookmark />
                                                    <small>II10A</small>
                                                </span>
                                                {/* <button><BsPencil /></button> */}
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Sala</strong>
                                            <div>
                                                <span>
                                                    <BsPinAngle />
                                                    <small>63</small>
                                                </span>
                                                {/* <button><BsPencil /></button> */}
                                            </div>
                                        </li>




                                    </ul>
                                </div>

                                <div className={stl.card_title_list_content_profile_home}>
                                    <strong>Contacto & Localização</strong>
                                    <ul>
                                        <li>
                                            <strong>Telefone</strong>
                                            <div>
                                                <span>
                                                    <BsPhone />
                                                    <small>+244 941 234 834</small>
                                                </span>
                                                <button><BsPencil /></button>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Email</strong>
                                            <div>
                                                <span>
                                                    <BsEnvelope />
                                                    <small>osvaldop@gmail.com</small>
                                                </span>
                                                <button><BsPencil /></button>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Endereço</strong>
                                            <div>
                                                <span>
                                                    <BsGeo />
                                                    <small>Luanda, viana</small>
                                                </span>
                                                <button><BsPencil /></button>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className={stl.card_title_list_content_profile_home}>
                                    <strong>Descrição</strong>
                                    <ul>
                                        <li className={stl.desc}>
                                            <strong>Sorbe mim!</strong>
                                            <div>
                                                <span>
                                                    <BsPerson />
                                                    <small>Olá, seja bem-vindo no meu perfil!!</small>
                                                </span>
                                                <button><BsPencil /></button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </Tab>

                            <Tab eventKey="profile" title="Desempenho" className="anime-bottom">
                                Tab content for Profile
                            </Tab>

                            <Tab eventKey="Configurações" title="Configurações" className="anime-bottom">
                                Tab content for Profile
                            </Tab>
                            
                        </Tabs>
                    </div>
                </Col_Xl_8>
            
        </main>
    )
}
