import React from 'react'
import { Col_Xl_3 } from '../../col'
import { ChartMain } from '../../chart'
import { Link } from 'react-router-dom'
import { PeopleGroup } from '../../people'
import stl from './card-profile.module.css'
import { BsMortarboard } from 'react-icons/bs'
import { UserContext } from '../../../context';


export function CardProfile() {

    const { user } = React.useContext(UserContext);

    return (
        <Col_Xl_3 className={`${stl.card_profile}`}>

            <div className={stl.content}>
                    
                <div className={stl.img_name_level}>
                    <div className={stl.cicle_img}>
                        <div>
                            <span>Op</span> 
                        </div>
                    </div>
                    <div className={stl.name_level}>
                        <Link to={"/profile"}>
                            Osvaldo Pascual
                        </Link>
                        <small>
                            <BsMortarboard />
                            <span className="phone-user-online">
                                {
                                    (user.role === "student") && (
                                        <>II10A - Nº Proc 34524</>
                                    )
                                }
                                {
                                    (user.role === "teacher") && (
                                        <>emailprofessor@gmail.com</>
                                    )
                                }
                                {
                                    (user.role === "admin") && (
                                        <>emailadmim@gmail.com</>
                                    )
                                }
                            </span>
                        </small>
                    </div>
                </div>

                {/* {
                    (user.role === "student") && (
                        <PeopleGroup
                            desc={"+35 colegas de turma"}
                            // linkPath={"/people"}
                        />
                    )
                }

                {
                    (user.role === "teacher") && (
                        <PeopleGroup
                            desc={"+103 para formar..."}
                            linkPath={"/people"}
                        />
                    )
                } */}

                <ul className={stl.list_class}>

                    <li>
                        <span>00</span>
                        <small>Alunos</small>
                    </li>

                    <li>
                        <span>00</span>
                        <small>Turmas</small>
                    </li>

                    
                </ul>
                


                {/* boas vindas*/}

                {
                    (user.role === "student") && (
                        <div className={stl.wellcome}>
                            <strong>Bem-vindo(a) ao INTRA!</strong>
                            <p>
                                <span>
                                    Olá, aluno(a) {user.name}!
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
                                    Olá, professor(a) {user.name}!
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
                                    Olá, administrador(a) {user.name}!
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
