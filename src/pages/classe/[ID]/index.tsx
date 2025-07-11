import React, { Suspense } from 'react'
import stl from './classeID.module.css'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from 'react-bootstrap'
import img_coord from '../../../assets/img/default.jpg'
import { BsAward, BsBook, BsBookmark, BsMortarboard, BsPlus } from 'react-icons/bs'
import { CardProfile, CardSearch, Col_Xl_9, TitleDescLink, TitleAndDescription, CardDisciplineTeacher, ModalDisciplineTeacher, CardPeople, CardNoteStudent, TitleNotFound } from '../../../components'
import { UserContext } from '../../../context'
import { getClasseById, getStudent, getStudentByLevel } from '../../../api/endpoints'
import { useParams } from 'react-router-dom'


export function ClasseID() {

    const { data } = React.useContext(UserContext);

    const { user } = data;
  
    const [modalDisciplineTeacher, setModalDisciplineTeacher] = React.useState(false)

    const [listStudent, setListStudent] = React.useState([])


    const [classe, setClasse] = React.useState<any>({});

    // Função para buscar todos os alunos da turma
    const { id } = useParams()

    async function getClasse() {

        const response = await getClasseById(Number(id));

        if (response) {
            setClasse(response);
        } else {
            console.error("Erro ao buscar a turma");
        }

        console.log(classe)

    }

    React.useEffect(() => {
        getClasse();
    }, [id]);

    const { turmaDisciplinas } = classe

    
    const getAllStudentByLevel = async () => {
    
            const students: any = await getStudentByLevel(Number(id));
            setListStudent(students);
    }

    React.useEffect(() => {
            getAllStudentByLevel();
    }, []);

    const cursoName = classe.curso ? classe.curso.nome : "Curso não definido";
    const classeLeve = classe.nome ? classe.nome.slice(2, 4) : "Classe não definida";
    const className = classe.nome ? classe.nome : "Nome da classe não definido";


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
                                        <span>{classe.nome}</span>
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
                                            <span>Não definido</span>
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
                                Turma da área de Informática, composta por alunos do curso {cursoName} na {classeLeve}ª classe ({className}). Oferece conteúdos práticos e teóricos, com foco em formação sólida e preparação para o mercado. Destaca-se pelo compromisso acadêmico, ambiente colaborativo e apoio de professores qualificados, sendo uma etapa importante no desenvolvimento dos alunos.
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
                                    <span>- {cursoName}</span>

                                </li>

                                <li className="anime-bottom">

                                    <strong>
                                        <BsBookmark />
                                        <span>Classe</span>
                                    </strong>
                                    <span>- {classeLeve}ª</span>

                                </li>

                                <li className="anime-bottom">

                                    <strong>
                                        <BsBook />
                                        <span>Turma</span>
                                    </strong>
                                    <span>- {className}</span>

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
                                        title={`Alunos da turma ${className}`}
                                        desc={"Aqui voce consegue ver todos os alunos dessa turma"}
                                        linkPath={""}
                                    />

                                    <CardSearch 
                                        placeholder={"Busca alunos..."}
                                        btnAddStudent={true}
                                        classId={id}
                                    />

                                </div>

                                <div className={stl.list_student_class}>
                                    
                                    {
                                        listStudent.map((student) => (
                                            <CardPeople 
                                                key={student.id}
                                                id={student.id}
                                                n_process={student.processNumber}
                                                name={student.nome}
                                                email={student.email}
                                            />
                                        ))
                                    }


                                    {
                                        (listStudent.length === 0) && (
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
                                                    turmaId={Number(id)}
                                                />
                                            </>
                                        )
                                    }

                                </div>

                                <div
                                    className={`anime-bottom ${stl.list_discipline_teacher}`}
                                >

                                    {/*{
                                        turmaDisciplinas.map((m) => {
                                            return (
                                                <CardDisciplineTeacher/>
                                            )
                                        })
                                    }
*/}
                                    


                                </div>

                                
                                

                            </Tab>

                            {
                                (user.role === "admin") && (

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

                                            <CardNoteStudent />

                                            <CardNoteStudent />

                                            <CardNoteStudent />

                                            <CardNoteStudent />
                                            



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
