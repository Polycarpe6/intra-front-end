import React from 'react'
import stl from './classeID.module.css'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from 'react-bootstrap'
import img_coord from '../../../assets/img/default.jpg'
import { ListStudentClassT, WeeklySchedule } from '../../../api/mock'
import { BsAward, BsBookmarks, BsMortarboard, BsPencil, BsPlus, BsStopwatch, BsThreeDotsVertical } from 'react-icons/bs'
import { CardProfile, CardSearch, Col_Xl_9, TitleDescLink, Schedules, TitleAndDesc, TitleAndDescription, BtnAdd, LispDisciplineClass } from '../../../components'
import { UserContext } from '../../../context'


export function ClasseID() {

    const { user } = React.useContext(UserContext);

    const { listStudentT } = ListStudentClassT()

    const { weeklySchedule } = WeeklySchedule()    

    return (
        <main className={`container ${stl.class_page}`}>

            <Col_Xl_9 className={stl.section_content_class}>

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

                    <TitleAndDescription
                        title={"Horário"}
                        desc={"Veja o horário da sua Turma quais disciplinas terás hoje!"}
                    />
                    
                    <div className={stl.body}>
                        {
                            weeklySchedule.map((element) => {

                                return (
                                    <Schedules
                                        day={element.day}
                                        times={element.times}
                                        role={user.role}
                                    />
                                )
                            })
                        }
                    </div>

                </div>

                <div className={stl.containr_tab}>

                    <Tabs
                        defaultActiveKey="alunos"
                        transition={true}
                        id="noanim-tab-example"
                        className={`${stl.nav_classe} anime-bottom`}
                    >

                        {user.role !== "student" && (

                            <Tab 
                                eventKey="alunos" 
                                title="Alunos" 
                                className={`anime-bottom ${stl.tab_nav_student_class}`}
                            >
                                <TitleDescLink 
                                    title={"Lista da Turma IG13A"}
                                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium recusandae eveniet ut! Dolorum esse at excepturi repellendus sit beatae, laudantium aliquam reiciendis earum iure, incidunt officia, vel quibusdam consequatur!"}
                                    linkPath={""}
                                />

                                <CardSearch 
                                    placeholder={"Busca alunos..."}
                                    sugest1={"Todos"}
                                    sugest2={"Com Melhor desempenho"}
                                    sugest3={"Sem Melhor desempenho"}
                                    btnAddStudent={true}
                                />

                                <div>
                                    {/* {listStudentT.map(student => (
                                        <PeopleItem 
                                            key={student.n_processo} 
                                            n_process={student.n_processo}
                                            name={student.nome}
                                            email={student.email}
                                            username={student.username}
                                        />
                                    ))} */}
                                </div>
                            </Tab>
                        )}

                        {/* <Tab 
                            eventKey="Professores" 
                            title="Professores" 
                            className={`anime-bottom ${stl.tab_nav_teacher_class}`}
                        >

                            <div className={stl.head}>
                                <TitleAndDescription
                                    title={"Professores"}
                                    desc={"Aqui você encontra a lista de professores, suas disciplinas e informações de contato. Conecte-se com seus professores para tirar dúvidas e acompanhar o andamento das aulas."}
                                />

                                {user.role !== "student" && <BtnAdd text={"Adicionar Professor"}/>}
                            </div>



                        </Tab> */}

                        <Tab 
                            eventKey="Disciplinas" 
                            title="Disciplinas e Professores" 
                            className={`anime-bottom ${stl.tab_nav_discipline_class}`}
                        >
                            <div className={stl.head}>

                                <TitleAndDescription
                                    title={"Disciplinas"}
                                    desc={"Nesta seção, você encontrará todas as disciplinas disponíveis, com detalhes sobre cada uma delas. Explore o conteúdo, acompanhe seu progresso e acesse materiais exclusivos para aprimorar seus estudos."}
                                />

                                {user.role !== "student" && <BtnAdd text={"Adicionar Disciplina"} />}

                            </div>

                            <LispDisciplineClass />
                            
                            

                        </Tab>

                        {
                            user.role !== "student" && (
                                <Tab 
                                    eventKey="Pauta" 
                                    title="Mini-Pauta" 
                                    className={`anime-bottom ${stl.tab_nav_note_class}`}
                                >
                                    
                                    <TitleDescLink
                                        title={"Mini Pauta"}
                                        desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officia totam fugit maiores in doloremque sed odit nulla ex blanditiis excepturi sint, accusamus similique ratione labore. Nihil aut repudiandae in?"}
                                        linkPath={""}
                                    />

                                    <div className={stl.card_pauta_classT}>

                                    </div>



                                </Tab>
                            )
                        }

                        {
                            user.role !== "student" && (
                                <Tab 
                                    eventKey="Atualizar" 
                                    title="Atualizar" 
                                    className={`anime-bottom ${stl.tab_nav_update_data_class}`}
                                >
                                    <h2>Atualizar dados</h2>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officia totam fugit maiores in doloremque sed odit nulla ex blanditiis excepturi sint, accusamus similique ratione labore. Nihil aut repudiandae in?
                                    </p>
                                </Tab>

                            )
                        }


                    </Tabs>

                </div>
            </Col_Xl_9>
            
        
            <CardProfile />
        </main>
    )
}
