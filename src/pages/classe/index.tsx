import React from 'react'
import stl from './classe.module.css'
import { Link } from 'react-router-dom'
import { TitleDescLink } from '../../components'
import img_user from '../../assets/img/default.jpg'
import { BsAward, BsMortarboard, BsPinAngle } from 'react-icons/bs'
import { CardProfile, CardSearch, PeopleGroup } from '../../components'

export function Classe() {

    return (
        <main className={`container ${stl.classes_page}`}>

            <section className={stl.section_content_classes}>

                <TitleDescLink 
                    title={"Turmas e Classes"}
                    desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil delectus omnis nostrum, quos adipisci porro saepe enim, fugiat vero architecto incidunt qui a dolorum aliquid, aut repellendus iure doloremque quam?"}
                    linkPath={""}
                />

                <CardSearch
                    placeholder={"Pesquisar turma ou classes..."}
                    sugest1={"Todos"}
                    btnAddClassT={true}
                />


                <article className={stl.card_classe}>
                    <div className={stl.head}>
                        <div>
                            <BsPinAngle />
                            <span>10ª Classe</span>
                        </div>

                        <strong>2024/2025</strong>
                    </div>

                    <div className={stl.body}>

                        <div className={stl.content_left}>
                            <div className={stl.cod_class}>
                                <Link to={"/classe/ig13a"}>
                                    <div>
                                        <BsMortarboard/>
                                        <strong>IG10B</strong>
                                    </div>
                                </Link>
                            </div>
                            <div className={stl.img_name_level_teacher_classe}>
                                <div className={stl.img_teacher_class}>
                                    <Link to={"/profile"}>
                                        <img 
                                            src={img_user} 
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className={stl.name_level_teacher_classe}>
                                    <Link to={"/profile"}>Nome do Dr. Turma</Link>
                                    <small>
                                        <BsAward />
                                        <span>Direitor de Turma</span>
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div className={stl.content_right}>
                            <PeopleGroup
                                desc={"+ 45 Alunos"}
                                linkPath={""}
                            />

                            <small>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita perferendis consequatur ullam possimus in, atque itaque, explicabo assumenda dolor velit deserunt! Veritatis totam tempore consectetur necessitatibus voluptatibus in magni?
                            </small>

                        </div>

                        <PeopleGroup
                                desc={"Essa turma esta composta por 55 alunos"}
                                linkPath={""}
                            />

                    </div>


                </article>


            </section>

            <CardProfile />
        
        </main>
    )
}
