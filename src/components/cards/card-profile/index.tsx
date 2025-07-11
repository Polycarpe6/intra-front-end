import { Col_Xl_3 } from '../../col'
import { Link } from 'react-router-dom'
import stl from './card-profile.module.css'
import { BsMortarboard } from 'react-icons/bs'
import { useUser } from '../../../hooks/useUser'

export function CardProfile() {

    const { data, listClasses, listStudents, listTeachers, dataStudent, dataTeacher } = useUser();

    return (
        <Col_Xl_3 className={`${stl.card_profile}`}>

            <div className={stl.content}>

                <div className={stl.img_name_level}>
                    <div className={stl.cicle_img}>
                        <div>
                            <span>
                                {
                                    data.user.nome[0]
                                }
                            </span>
                        </div>
                    </div>
                    <div className={stl.name_level}>
                        <Link to={"/profile"}>
                            {data.user.nome}
                        </Link>
                        <small>
                            <BsMortarboard />
                            <span className="phone-user-online">
                                {
                                    (data.user.role === "student") && (
                                        <>II10A - Nº Proc aluno</>
                                    )
                                }
                                {
                                    (data.user.role === "teacher") && (
                                        <>{dataTeacher?.email}</>
                                    )
                                }
                                {
                                    (data.user.role === "admin") && (
                                        <>{data.user.email}</>
                                    )
                                }
                            </span>
                        </small>
                    </div>
                </div>

                {
                    (data.user.role === "student") && (
                        <ul className={stl.list_class}>

                            <li>
                                <span>{dataStudent?.aluno.processNumber}</span>
                                <small>Nº Processo</small>
                            </li>

                            <li>
                                <span>{dataStudent?.matricula.map((matricula) => matricula.turma.nome)}</span>
                                <small>Minha Turma</small>
                            </li>

                            <li>
                                <span>{dataStudent?.colegas}</span>
                                <small>Colegas</small>
                            </li>
                        </ul>
                    )
                }

                {
                    (data.user.role === "teacher") && (
                        <ul
                            className={stl.list_class}
                        >
                            <li>
                                <span>{dataTeacher?.turmas.length}</span>
                                <small>Minhas Turmas</small>
                            </li>
                            <li>
                                <span>{dataTeacher?.alunos.length}</span>
                                <small>Total de Alunos</small>
                            </li>
                        </ul>
                    )
                }

                {
                    (data.user.role === "admin") && (
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
                    (data.user.role === "student") && (
                        <div className={stl.wellcome}>
                            <strong>Bem-vindo(a) ao INTRA!</strong>
                            <p>
                                <span>
                                    Olá, aluno(a) {data.user.nome}!
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
                    (data.user.role === "teacher") && (
                        <div className={stl.wellcome}>
                            <strong>Bem-vindo(a) ao INTRA – Área do Professor!</strong>
                            <p>
                                <span>
                                    Olá, professor(a) {data.user.nome}!
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
                    (data.user.role === "admin") && (
                        <div className={stl.wellcome}>
                            <strong>Bem-vindo(a) ao INTRA – Painel Administrativo!</strong>
                            <p>
                                <span>
                                    Olá, administrador(a) {data.user.nome}!
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
                    (data.user.role === "student") && (
                        <ChartMain />
                    )
                } */}


            </div>

        </Col_Xl_3>
    )
}
