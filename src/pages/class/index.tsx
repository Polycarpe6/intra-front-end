import React from 'react'
import stl from './class.module.css'
import { CardProfile, CardSearch, ChartBar, Col_Xl_9, Horary, TitleDescLink } from '../../components'
import { BsAt, BsAward, BsFolder, BsMortarboard, BsPencil } from 'react-icons/bs'
import img_coord from '../../assets/img/default.jpg'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from 'react-bootstrap'

export function Class() {

    const [horary, setHorary] = React.useState([
        {
            day: "2ª feira",
            horary: [
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },

            ]
        },
        {
            day: "3ª feira",
            horary: [
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },

            ]
        },
        {
            day: "4ª feira",
            horary: [
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },

            ]
        },
        {
            day: "5ª feira",
            horary: [
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },

            ]
        },
        {
            day: "6ª feira",
            horary: [
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: true
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },
                {
                    time: {
                        init: "00h:00", 
                        end: "00h:00"
                    }, 
                    disc: "Nome da disciplina", 
                    state: false
                },

            ]
        },
    ])    


    return (
        <main className={`container ${stl.class_page}`}>

            <Col_Xl_9>
                <section className={stl.section_content_class}>
                    <div className={stl.card_info_class}>
                        
                        <div className={`${stl.card_info_class_left} anime-bottom`}>
                            <div>
                                <div className={stl.card_img_class}>
                                    <div>
                                        <BsMortarboard />
                                        <span>IG13A</span>
                                    </div>
                                </div>
                                <div className={stl.card_img_and_name_coord_class}>
                                    <div className={stl.card_img_coord}>
                                        <Link to={"/profile"}>
                                            <img src={img_coord} alt="" />
                                        </Link>
                                    </div>
                                    <div className={stl.name_and_icon_coord_class}>
                                        <strong>
                                            <Link to={"/profile"}>
                                                <span>Lucas Pazito</span>
                                            </Link>
                                        </strong>
                                        <small>
                                            <BsAward />
                                            <span>Coordenador da turma</span>
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <small className="anime-left">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nobis officiis molestiae eos eligendi explicabo repudiandae minus saepe aut enim totam, quos dolores id incidunt possimus, corporis alias modi sequi!
                            </small>

                        </div>

                        <div className={`${stl.card_info_class_right} anime-left`}>

                            <ul>
                                <li className="anime-bottom">
                                    <strong>Area de formação</strong>
                                    <span>Informáticos</span>
                                </li> 
                                <li className="anime-bottom">
                                    <strong>Curso</strong>
                                    <span>Gestão de sistemas informáticos</span>
                                </li>
                                <li className="anime-bottom">
                                    <strong>Classe</strong>
                                    <span># 13ª</span>
                                </li>
                                <li className="anime-bottom">
                                    <strong>Turma</strong>
                                    <span>IG13A</span>
                                </li>
                                                             
                            </ul>

                        </div>

                    </div>

                    <div className={stl.horary_class}>
                        <TitleDescLink
                            title={"Horário"}
                            desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore rem iusto debitis illo praesentium nulla, laudantium et asperiores similique doloribus eligendi doloremque. Fugiat provident rerum qui rem eos! Cumque, inventore?"}
                            linkPath={""}
                        />

                        <div className={stl.table_horary}>
                            {
                                horary.map((element) => {

                                    return (
                                        <Horary
                                            day={element.day}
                                            horaryClass={element.horary}
                                        />
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className={stl.content_classe}>
                        <Tabs
                            defaultActiveKey="alunos"
                            transition={true}
                            id="noanim-tab-example"
                            className={`${stl.nav_classe} anime-bottom`}
                        >
                            <Tab 
                                eventKey="alunos" 
                                title="Alunos" 
                                className={`anime-bottom ${stl.home_profile_page}`}
                            >

                                <TitleDescLink 
                                    title={"Alunos"}
                                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium recusandae eveniet ut! Dolorum esse at excepturi repellendus sit beatae, laudantium aliquam reiciendis earum iure, incidunt officia, vel quibusdam consequatur!"}
                                    linkPath={""}
                                />

                                <CardSearch 
                                    placeholder={"Busca alunos..."}
                                    sugest1={"Todos"}
                                    sugest2={"Com Melhor desempenho"}
                                    sugest3={"Sem Melhor desempenho"}
                                />

                                
                                <ul className={stl.list_student}>
                                    <li className="anime-left">

                                        <p className={stl.num}>
                                            Nº 01
                                        </p>

                                        <div className={stl.cod_proc}>
                                            <BsFolder />
                                            <span>Nº Proc 61789</span>
                                        </div>

                                        <div className={stl.img_and_name}>
                                            <div className={stl.img}>
                                                <Link to={"/profile"}>
                                                    <img src={img_coord} alt="" />
                                                </Link>
                                            </div>
                                            <div className={stl.name_email}>
                                                <Link to={"/profile"} className={stl.name}>Gerson Ndombasi Paulo</Link>
                                                <Link target='_blank' to={"https://mail.google.com/mail/u/0/"} className={stl.email}>
                                                    gersonnpaulo@gmail.com
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={stl.usernameclass}>
                                            <BsAt />
                                            <span>gerson.intra@ipil</span>
                                        </div>

                                        <div className={stl.media}>
                                            <BsAward />
                                            <strong>16 Valores</strong>
                                        </div>

                                    </li>

                                    <li className="anime-left">

                                        <p className={stl.num}>
                                            Nº 01
                                        </p>

                                        <div className={stl.cod_proc}>
                                            <BsFolder />
                                            <span>Nº Proc 61789</span>
                                        </div>

                                        <div className={stl.img_and_name}>
                                            <div className={stl.img}>
                                                <Link to={"/profile"}>
                                                    <img src={img_coord} alt="" />
                                                </Link>
                                            </div>
                                            <div className={stl.name_email}>
                                                <Link to={"/profile"} className={stl.name}>Gerson Ndombasi Paulo</Link>
                                                <Link target='_blank' to={"https://mail.google.com/mail/u/0/"} className={stl.email}>
                                                    gersonnpaulo@gmail.com
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={stl.usernameclass}>
                                            <BsAt />
                                            <span>gerson.intra@ipil</span>
                                        </div>

                                        <div className={stl.media}>
                                            <BsAward />
                                            <strong>16 Valores</strong>
                                        </div>

                                    </li>

                                    <li className="anime-left">

                                        <p className={stl.num}>
                                            Nº 01
                                        </p>

                                        <div className={stl.cod_proc}>
                                            <BsFolder />
                                            <span>Nº Proc 61789</span>
                                        </div>

                                        <div className={stl.img_and_name}>
                                            <div className={stl.img}>
                                                <Link to={"/profile"}>
                                                    <img src={img_coord} alt="" />
                                                </Link>
                                            </div>
                                            <div className={stl.name_email}>
                                                <Link to={"/profile"} className={stl.name}>Gerson Ndombasi Paulo</Link>
                                                <Link target='_blank' to={"https://mail.google.com/mail/u/0/"} className={stl.email}>
                                                    gersonnpaulo@gmail.com
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={stl.usernameclass}>
                                            <BsAt />
                                            <span>gerson.intra@ipil</span>
                                        </div>

                                        <div className={stl.media}>
                                            <BsAward />
                                            <strong>16 Valores</strong>
                                        </div>

                                    </li>

                                    <li className="anime-left">

                                        <p className={stl.num}>
                                            Nº 01
                                        </p>

                                        <div className={stl.cod_proc}>
                                            <BsFolder />
                                            <span>Nº Proc 61789</span>
                                        </div>

                                        <div className={stl.img_and_name}>
                                            <div className={stl.img}>
                                                <Link to={"/profile"}>
                                                    <img src={img_coord} alt="" />
                                                </Link>
                                            </div>
                                            <div className={stl.name_email}>
                                                <Link to={"/profile"} className={stl.name}>Gerson Ndombasi Paulo</Link>
                                                <Link target='_blank' to={"https://mail.google.com/mail/u/0/"} className={stl.email}>
                                                    gersonnpaulo@gmail.com
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={stl.usernameclass}>
                                            <BsAt />
                                            <span>gerson.intra@ipil</span>
                                        </div>

                                        <div className={stl.media}>
                                            <BsAward />
                                            <strong>16 Valores</strong>
                                        </div>

                                    </li>

                                    <li className="anime-left">

                                        <p className={stl.num}>
                                            Nº 01
                                        </p>

                                        <div className={stl.cod_proc}>
                                            <BsFolder />
                                            <span>Nº Proc 61789</span>
                                        </div>

                                        <div className={stl.img_and_name}>
                                            <div className={stl.img}>
                                                <Link to={"/profile"}>
                                                    <img src={img_coord} alt="" />
                                                </Link>
                                            </div>
                                            <div className={stl.name_email}>
                                                <Link to={"/profile"} className={stl.name}>Gerson Ndombasi Paulo</Link>
                                                <Link target='_blank' to={"https://mail.google.com/mail/u/0/"} className={stl.email}>
                                                    gersonnpaulo@gmail.com
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={stl.usernameclass}>
                                            <BsAt />
                                            <span>gerson.intra@ipil</span>
                                        </div>

                                        <div className={stl.media}>
                                            <BsAward />
                                            <strong>16 Valores</strong>
                                        </div>

                                    </li>

                                    <li className="anime-left">

                                        <p className={stl.num}>
                                            Nº 01
                                        </p>

                                        <div className={stl.cod_proc}>
                                            <BsFolder />
                                            <span>Nº Proc 61789</span>
                                        </div>

                                        <div className={stl.img_and_name}>
                                            <div className={stl.img}>
                                                <Link to={"/profile"}>
                                                    <img src={img_coord} alt="" />
                                                </Link>
                                            </div>
                                            <div className={stl.name_email}>
                                                <Link to={"/profile"} className={stl.name}>Gerson Ndombasi Paulo</Link>
                                                <Link target='_blank' to={"https://mail.google.com/mail/u/0/"} className={stl.email}>
                                                    gersonnpaulo@gmail.com
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={stl.usernameclass}>
                                            <BsAt />
                                            <span>gerson.intra@ipil</span>
                                        </div>

                                        <div className={stl.media}>
                                            <BsAward />
                                            <strong>16 Valores</strong>
                                        </div>

                                    </li>

                                    

                                    
                                </ul>

                            </Tab>

                            <Tab 
                                eventKey="Professores" 
                                title="Professores" 
                                className="anime-bottom"
                            >
                                <h2>Professores</h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officia totam fugit maiores in doloremque sed odit nulla ex blanditiis excepturi sint, accusamus similique ratione labore. Nihil aut repudiandae in?
                                </p>
                            </Tab>

                            <Tab 
                                eventKey="Disciplinas" 
                                title="Disciplinas" 
                                className="anime-bottom"
                            >
                                <TitleDescLink 
                                    title={"Disciplinas"}
                                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium recusandae eveniet ut! Dolorum esse at excepturi repellendus sit beatae, laudantium aliquam reiciendis earum iure, incidunt officia, vel quibusdam consequatur!"}
                                    linkPath={""}
                                />

                                <ul className={stl.disc}>
                                    <li>
                                        <strong>
                                            Cod. - Mat
                                        </strong>

                                        <strong>
                                            Nome. - Matematica
                                        </strong>

                                        <strong>
                                            Professor. -
                                        </strong>

                                        <BsPencil />
                                    </li>
                                </ul>
                                
                                

                            </Tab>

                            <Tab 
                                eventKey="Pauta" 
                                title="Pauta" 
                                className="anime-bottom"
                            >
                                <h2>Pauta</h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officia totam fugit maiores in doloremque sed odit nulla ex blanditiis excepturi sint, accusamus similique ratione labore. Nihil aut repudiandae in?
                                </p>
                            </Tab>

                            <Tab 
                                eventKey="Atualizar" 
                                title="Atualizar" 
                                className="anime-bottom"
                            >
                                <h2>Atualizar dados</h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officia totam fugit maiores in doloremque sed odit nulla ex blanditiis excepturi sint, accusamus similique ratione labore. Nihil aut repudiandae in?
                                </p>
                            </Tab>

                        </Tabs>
                    </div>
                </section>
            </Col_Xl_9>
            
        
            <CardProfile />
        </main>
    )
}
