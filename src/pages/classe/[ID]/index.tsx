import React, { Suspense, useEffect } from 'react'
import stl from './classeID.module.css'
import { Link, useLocation } from 'react-router-dom'
import { Tab, Tabs } from 'react-bootstrap'
import img_coord from '../../../assets/img/default.jpg'
import { BsAward, BsBook, BsBookmark, BsMortarboard, BsPlus } from 'react-icons/bs'
import { CardProfile, CardSearch, Col_Xl_9, TitleDescLink, TitleAndDescription, CardDisciplineTeacher, ModalDisciplineTeacher, CardPeople, CardNoteStudent, TitleNotFound } from '../../../components'
import { TurmaDetalhada, UserContext } from '../../../context'
import { Aluno, getClasseById, getStudent, getStudentByLevel, Tests } from '../../../api/endpoints'
import { useParams } from 'react-router-dom'
import { useUser } from '../../../hooks/useUser'
import axios from 'axios'

export interface TurmaComAlunos {
  turma: Turma;
  alunos: AlunoComMatriculaETestes[];
}

export interface Turma {
  id: number;
  cursoId: number;
  nome: string;
  ano: number;
  createdAt: string;
  curso: Curso;
}

export interface Curso {
  id: number;
  nome: string;
  createdAt: string;
}

export interface AlunoComMatriculaETestes {
  id: number;
  nome: string;
  email: string;
  processNumber: number;
  birthDate: string;
  matriculaId: number;
  testes: Tests[]; // Você pode substituir `any` pelo tipo real se souber a estrutura dos testes
}


export function ClasseID() {

    const { data: { user }, dataStudent, studentClass, dataTeacher } = useUser()

    const discipline = dataTeacher ? (dataTeacher.turmaDisciplinas.length > 0 ? dataTeacher?.turmaDisciplinas[0].disciplina.id : null):null;
  
    const [modalDisciplineTeacher, setModalDisciplineTeacher] = React.useState(false)

    const [listStudent, setListStudent] = React.useState<Aluno[]>([])
    const [todosAlunos, setTodosAlunos] = React.useState<TurmaComAlunos | null>(null)
    const [classe, setClasse] = React.useState<TurmaDetalhada | null>(null)

    const { id } = useParams();

    console.log(id);
    
    useEffect(() => {
        const getClasseByIdAsync = async () => {
            if (!id) return;
            const result = await getClasseById(Number(id))
            setClasse(result)
        }

        const getAllStudentByLevel = async () => {
            const result = await axios.get<Aluno[]>("https://school.baikasaude.click/alunos/turma/"+id)
            setListStudent(result.data)
        }

        const stududentsTests = async () => {
            const res = await axios.get<TurmaComAlunos>(`https://school.baikasaude.click/professores/${id}/testes-alunos`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("INTRADB") ?? "{}")?.token}`
                }
            })
            if (res.data) {
                console.log(res.data);
                
                setTodosAlunos(res.data)
            }
        }
        if (id) {
            getClasseByIdAsync()
            getAllStudentByLevel()
            stududentsTests()
        }
    }, [id])



    return (
        <Suspense fallback={"Carregando..."}>
            <main className={`container ${stl.class_page}`}>

                <Col_Xl_9 className={stl.section_content_class}>

                    <div className={stl.card_info_class}>
                        
                        <div className={`${stl.card_info_class_left} anime-bottom`}>
                            <div>
                                <div className={stl.card_img_class}>
                                    <div>
                                        <BsMortarboard />
                                        <span>{classe?.nome}</span>
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
                                            <span>{classe?.nome}</span>
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
                                Turma da área de Informática, composta por alunos do curso {classe?.curso.nome} na 10ª classe. Oferece conteúdos práticos e teóricos, com foco em formação sólida e preparação para o mercado. Destaca-se pelo compromisso acadêmico, ambiente colaborativo e apoio de professores qualificados, sendo uma etapa importante no desenvolvimento dos alunos.
                            </small>

                        </div>

                        <div className={`${stl.card_info_class_right} anime-left`}>

                            <ul>

                                <li className="anime-bottom">
                                    <strong>
                                        <BsAward />
                                        <span>Area de formação</span>
                                    </strong>
                                    <span>- Informática</span>
                                </li> 

                                <li className="anime-bottom">

                                    <strong>
                                        <BsMortarboard />
                                        <span>Curso</span>
                                    </strong>
                                    <span>- {classe?.curso.nome}</span>

                                </li>

                                <li className="anime-bottom">

                                    <strong>
                                        <BsBookmark />
                                        <span>Classe</span>
                                    </strong>
                                    <span>- 10ª</span>

                                </li>

                                <li className="anime-bottom">

                                    <strong>
                                        <BsBook />
                                        <span>Turma</span>
                                    </strong>
                                    <span>- {classe?.nome}</span>

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

                                <div className={stl.head}>

                                    <TitleDescLink 
                                        title={`Alunos da turma ${classe?.nome}`}
                                        desc={"Aqui voce consegue ver todos os alunos dessa turma"}
                                        linkPath={""}
                                    />

                                    <CardSearch 
                                        placeholder={"Busca alunos..."}
                                        btnAddStudent={true}
                                        classId={classe?.id}
                                    />

                                </div>

                                <div className={stl.list_student_class}>
                                    
                                    {
                                        classe?.matriculas.map((student) => (
                                            <CardPeople 
                                                key={student.id}
                                                id={student.id}
                                                n_process={student.aluno.processNumber}
                                                name={student.aluno.nome}
                                                email={student.aluno.email}
                                            />
                                        ))
                                    }


                                    {
                                        (classe?.matriculas.length === 0) && (
                                            <TitleNotFound
                                                title={"Nenhum aluno encontrado!"}
                                                desc={"Parece que não há alunos registrados nessa turma."}
                                            />
                                        )
                                    }

                                </div>
                                
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
                                        (user.role === "admin") && (
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
                                                    turmaId={Number(classe?.id)}
                                                />
                                            </>
                                        )
                                    }

                                </div>

                                <div
                                    className={`anime-bottom ${stl.list_discipline_teacher}`}
                                >
                                    {
                                        classe?.turmaDisciplinas.map((props) => {
                                            return (
                                                <CardDisciplineTeacher {...props}/>
                                            )
                                        })
                                    }
                                </div>
                            </Tab>

                            {
                                (user.role === "teacher") && (

                                    <Tab 
                                        eventKey="Mini-Pauta" 
                                        title="Mini-Pauta" 
                                        className={`anime-bottom ${stl.tab_nav_mini_note_class}`}
                                    >

                                        <div className={stl.head}>

                                            <TitleDescLink
                                                title={"Mini Pauta"}
                                                desc={"Nesta seção, você encontrará a mini pauta da turma, que inclui informações sobre as disciplinas, professores e desempenho dos alunos. Acompanhe o progresso acadêmico e obtenha uma visão geral do desempenho da turma."}
                                                linkPath={""}
                                            />

                                            <button>
                                            </button>
                                            
                                        </div>
                                        

                                        <div className={stl.body}>
                                            {todosAlunos?.alunos.map((aluno, i) => <CardNoteStudent props={aluno} index={i + 1} discipline={discipline}/>)}
                                        </div>
                                    </Tab>
                                )
                            }

                            {
                                (user.role === "admin") && (

                                    <Tab 
                                        eventKey="Pauta Geral" 
                                        title="Pauta Geral" 
                                        className={`anime-bottom ${stl.tab_nav_discipline_teacher}`}
                                    >
                                        <div className={stl.head}>

                                            <TitleAndDescription
                                                title={"Pauta Geral da Turma"}
                                                desc={"Nesta seção, você encontrará a pauta geral da turma, que inclui informações sobre as disciplinas, professores e desempenho dos alunos. Acompanhe o progresso acadêmico e obtenha uma visão geral do desempenho da turma."}
                                            />

                                            {/* {
                                                user.role === "admin" && (
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
                                                            turmaId={Number(id)}
                                                        />
                                                    </>
                                                )
                                            } */}

                                        </div>

                                        <div
                                            className={`anime-bottom ${stl.list_discipline_teacher}`}
                                        >

                                            

                                        </div>

                                        
                                        

                                    </Tab>
                                    
                                )
                            }




                        </Tabs>

                    </div>

                </Col_Xl_9>
                
            
                <CardProfile />

            </main>
        </Suspense>
    )
}
