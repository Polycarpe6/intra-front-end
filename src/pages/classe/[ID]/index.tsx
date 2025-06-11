import React from 'react'
import stl from './classeID.module.css'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from 'react-bootstrap'
import img_coord from '../../../assets/img/default.jpg'
import { BsAward, BsMortarboard, BsPlus } from 'react-icons/bs'
import { ListStudentClassT, WeeklySchedule } from '../../../api/mock'
import { CardProfile, CardSearch, Col_Xl_9, TitleDescLink, Schedules, TitleAndDescription, BtnAdd, LispDisciplineClass, CardDisciplineTeacher, ModalDisciplineTeacher } from '../../../components'
import { UserContext } from '../../../context'


export function ClasseID() {

    const { user } = React.useContext(UserContext);
  
    const [modalDisciplineTeacher, setModalDisciplineTeacher] = React.useState(false)

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

                <div className={stl.containr_tab}>

                    <Tabs
                        defaultActiveKey="alunos"
                        transition={true}
                        id="noanim-tab-example"
                        className={`${stl.nav_classe} anime-bottom`}
                    >

                     
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

                            
                        </Tab>
    
                        <Tab 
                            eventKey="Disciplinas" 
                            title="Disciplinas e Professores" 
                            className={`anime-bottom ${stl.tab_nav_discipline_teacher}`}
                        >
                            <div className={stl.head}>

                                <TitleAndDescription
                                    title={"Disciplinas & Professores"}
                                    desc={"Nesta seção, você encontrará todas as disciplinas disponíveis, com detalhes sobre cada uma delas. Explore o conteúdo, acompanhe seu progresso e acesse materiais exclusivos para aprimorar seus estudos."}
                                />

                                {
                                    user.role !== "student" && (
                                        <>
                                            <button
                                                className={stl.btn_add_discipline_teacher}
                                                onClick={() => setModalDisciplineTeacher(true)}
                                            >
                                                <BsPlus />
                                                <span>
                                                    Adicione Disciplina e seu Professor
                                                </span>
                                            </button>

                                            <ModalDisciplineTeacher
                                                show={modalDisciplineTeacher}
                                                onHide={() => setModalDisciplineTeacher(false)}
                                            />
                                        </>
                                    )
                                }

                            </div>

                            <div
                                className={`anime-bottom ${stl.list_discipline_teacher}`}
                            >

                                <CardDisciplineTeacher/>

                                <CardDisciplineTeacher/>

                                <CardDisciplineTeacher/>

                                <CardDisciplineTeacher/>

                                <CardDisciplineTeacher/>

                                <CardDisciplineTeacher/>

                                <CardDisciplineTeacher/>

                                <CardDisciplineTeacher/>

                            </div>

                            
                            

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



                    </Tabs>

                </div>
            </Col_Xl_9>
            
        
            <CardProfile />
        </main>
    )
}
