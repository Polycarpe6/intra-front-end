import React, { useContext } from 'react'
import { Col_Xl_3 } from '../../col'
import { Link } from 'react-router-dom'
import stl from './card-profile.module.css'
import { BsMortarboard } from 'react-icons/bs'
import { UserContext } from '../../../context';
import { getClasses, getStudent, getTeacher, getStudentById } from '../../../api/endpoints'


export function CardProfile() {

    const { data } = useContext(UserContext); 
    const { user } = data;


    const [listClasses, setListClasses] = React.useState<any[]>([]);
    const [listStudents, setListStudents] = React.useState<any[]>([]);
    const [listTeachers, setListTeachers] = React.useState<any[]>([]);

    const [dataStudent, setDataStudent] = React.useState<any>()


    if ( user.role === "admin" ) {


        async function countClass() {
            const response = await getClasses()

            if (!response) return;

            setListClasses(response);
        }
        

        async function countStudent() {
            const response = await getStudent()

            if (!response) return;

            setListStudents(response);
        }

        async function countTeacher() {
            const response = await getTeacher()

            if (!response) return;

            setListTeachers(response);
        }

        React.useEffect(() => {
            countClass();
            countStudent();
            countTeacher();
        }, []);


    }
    

    if ( user.role === "student" ) {

        async function getDataStudent() {

            const response = await getStudentById(user.id)

            if (!response) return;

            setDataStudent(response);
        }




        React.useEffect(() => {
            getDataStudent();
        }, []);
    }

    console.log(dataStudent)
    // const { matriculas, aluno } = dataStudent


    return (
        <Col_Xl_3 className={`${stl.card_profile}`}>

            <div className={stl.content}>
                    
                <div className={stl.img_name_level}>
                    <div className={stl.cicle_img}>
                        <div>
                            <span>
                                {
                                    user.nome[0]
                                }
                            </span> 
                        </div>
                    </div>
                    <div className={stl.name_level}>
                        <Link to={"/profile"}>
                            {user.nome}
                        </Link>
                        <small>
                            <BsMortarboard />
                            <span className="phone-user-online">
                                {
                                    (user.role === "student") && (
                                        <>II10A - Nº Proc aluno</>
                                    )
                                }
                                {
                                    (user.role === "teacher") && (
                                        <>emailprofessor@gmail.com</>
                                    )
                                }
                                {
                                    (user.role === "admin") && (
                                        <>{user.email}</>
                                    )
                                }
                            </span>
                        </small>
                    </div>
                </div>

                {
                    (user.role === "student") && (
                        <ul className={stl.list_class}>

                            <li>
                                <span>46382</span>
                                <small>Nº Processo</small>
                            </li>

                            <li>
                                <span>ii10a</span>
                                <small>Minha Turma</small>
                            </li>

                            <li>
                                <span>45</span>
                                <small>Colegas</small>
                            </li>

                            
                        </ul>
                    )
                }

                {
                    (user.role === "teacher") && (
                        <ul 
                            className={stl.list_class}

                        >

                            <li>
                                <span>02</span>
                                <small>Minhas Turmas</small>
                            </li>

                            <li>
                                <span>103</span>
                                <small>Total de Alunos</small>
                            </li>
                            
                        </ul>
                    )
                }

                {
                    (user.role === "admin") && (
                        <ul 
                            className={stl.list_class}

                        >

                            <li>
                                <span>
                                    {
                                        listTeachers.length < 10 ? `0${listTeachers.length}` : listTeachers.length
                                    }
                                </span>
                                <small>Professores</small>
                            </li>

                            <li>
                                <span>
                                    {
                                        listStudents.length < 10 ? `0${listStudents.length}` : listStudents.length
                                    }
                                </span>
                                <small>Alunos</small>
                            </li>

                            <li>
                                <span>
                                    {
                                        listClasses.length < 10 ? `0${listClasses.length}` : listClasses.length
                                    }
                                </span>
                                <small>Turmas</small>
                            </li>
                            
                        </ul>
                    )
                }
                

                
                


                {/* boas vindas*/}

                {
                    (user.role === "student") && (
                        <div className={stl.wellcome}>
                            <strong>Bem-vindo(a) ao INTRA!</strong>
                            <p>
                                <span>
                                    Olá, aluno(a) {user.nome}!
                                </span>

                                <span>
                                    Acompanhe aqui suas notas, presença, boletins e avisos importantes do IPIL.
                                    Esta plataforma foi feita para te ajudar a organizar melhor a tua vida académica.
                                </span>
                                
                                <span>
                                    Bom estudo e boa navegação!
                                </span>
                                
                            </p>
                        </div>
                    )
                }

                {
                    (user.role === "teacher") && (
                        <div className={stl.wellcome}>
                            <strong>Bem-vindo(a) ao INTRA – Área do Professor!</strong>
                            <p>
                                <span>
                                    Olá, professor(a) {user.nome}!
                                </span>

                                <span>
                                    Aqui você poderá lançar notas, registar presenças, consultar turmas e enviar comunicados.
                                    O INTRA foi criado para tornar sua rotina mais prática, rápida e organizada.
                                </span>
                                
                                <span>
                                    -- Bom trabalho e ótima navegação!
                                </span>
                                
                            </p>
                        </div>
                    )
                }

                {
                    (user.role === "admin") && (
                        <div className={stl.wellcome}>
                            <strong>Bem-vindo(a) ao INTRA – Painel Administrativo!</strong>
                            <p>
                                <span>
                                    Olá, administrador(a) {user.nome}!
                                </span>

                                <span>
                                    Gerencie usuários, turmas, disciplinas, trimestres e dados acadêmicos com total controle.
                                    O INTRA oferece as ferramentas necessárias para uma gestão eficiente e segura do IPIL.
                                </span>
                                
                                <span>
                                    -- Boa gestão e excelente navegação!
                                </span>
                                
                            </p>
                        </div>
                    )
                }

                {/* boas vindas fim*/}



                

                {/* {
                    (user.role === "student") && (
                        <ChartMain />
                    )
                } */}
                

            </div>

        </Col_Xl_3>
    )
}
