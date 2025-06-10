import React from 'react'
import stl from './profile.module.css'
import { Tab, Tabs } from 'react-bootstrap'
import img_user from '../../assets/img/default.jpg'
import { CardProfile, Col_Xl_8, ModalUpdateDataUserProfile } from '../../components'
import { BsAt, BsAward, BsBezier2, BsBookmark, BsBookmarks, BsCalendar4Week, BsDot, BsEnvelope, BsFolder, BsGenderNeuter, BsGeo, BsHash, BsHouse, BsMortarboard, BsPencil, BsPerson, BsPhone, BsPinAngle, BsThreads, BsTrash } from 'react-icons/bs'

export function Profile() {

    const [modalUpdateDate, setModalUpdateDate] = React.useState(false)

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
                                title="Meu Perfil" 
                                className={`anime-bottom ${stl.home_profile_page}`}
                            >

                                <div className={stl.card_title_list_content_profile_home}>
                                    <strong>Informações do Usuário</strong>
                                    <ul>

                                        <li>
                                            <strong>Nº BI</strong>
                                            <div>
                                                <span>
                                                    <BsAt />
                                                    <small>009169417LA046</small>
                                                </span>
                                                {/* <button><BsPencil /></button> */}
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Nome Completo</strong>
                                            <div>
                                                <span>
                                                    <BsPerson />
                                                    <small>Osvaldo Pascual</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Residência</strong>
                                            <div>
                                                <span>
                                                    <BsGeo />
                                                    <small>CASA SNº BAIRRO BARRA DO DANDE</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Natural De:</strong>
                                            <div>
                                                <span>
                                                    <BsHouse />
                                                    <small>Cazenga, Cazenga</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Provincia De:</strong>
                                            <div>
                                                <span>
                                                    <BsHash />
                                                    <small>Luanda</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Data de nascimento</strong>
                                            <div>
                                                <span>
                                                    <BsCalendar4Week />
                                                    <small>24 / 12 / 2006</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Gênero</strong>
                                            <div>
                                                <span>
                                                    <BsGenderNeuter />
                                                    <small>Masculino</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Estado Civil</strong>
                                            <div>
                                                <span>
                                                    <BsPerson />
                                                    <small>Solteiro</small>
                                                </span>
                                                {/* <button><BsPencil /></button> */}
                                            </div>
                                        </li>

                                        <li>

                                            <div className={stl.card_update_photo_profile_user}>

                                                <div className={stl.card_img_update_photo}>
                                                    <img src={img_user} alt="" />
                                                </div>

                                                <button 
                                                    className={stl.btn_update_picture_profile}
                                                    onClick={() => setModalUpdateDate(true)}
                                                >
                                                    <BsPencil />
                                                </button>

                                                <ModalUpdateDataUserProfile
                                                    show={modalUpdateDate}
                                                    onHide={() => setModalUpdateDate(false)}
                                                />

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

                            <Tab 
                                eventKey="profile" 
                                title="Minhas Notas" 
                                className={`anime-bottom ${stl.nav_profile_my_notes}`}
                            >
                                
                                


                                <div className={stl.card_note_student}>

                                    <strong>1º Trimestre</strong>

                                    <ul>

                                        <li>
                                            <strong>Matematica</strong>
                                            <div>
                                                <span>
                                                    <BsDot />
                                                    <small>14 Valores</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Inglês</strong>
                                            <div>
                                                <span>
                                                    <BsDot />
                                                    <small>16 Valores</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Física</strong>
                                            <div>
                                                <span>
                                                    <BsDot />
                                                    <small>12 Valores</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Química</strong>
                                            <div>
                                                <span>
                                                    <BsDot />
                                                    <small>15 Valores</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Tic</strong>
                                            <div>
                                                <span>
                                                    <BsDot />
                                                    <small>18 Valores</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>Programação</strong>
                                            <div>
                                                <span>
                                                    <BsDot />
                                                    <small>20 Valores</small>
                                                </span>
                                            </div>
                                        </li>

                                        <li>
                                            <strong>TD</strong>
                                            <div>
                                                <span>
                                                    <BsDot />
                                                    <small>16 Valores</small>
                                                </span>
                                            </div>
                                        </li>

                                    </ul>

                                </div>





                            </Tab>
                            
                        </Tabs>
                    </div>
                </Col_Xl_8>
            
        </main>
    )
}
