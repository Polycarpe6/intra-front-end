import React from 'react'
import stl from './classe.module.css'
import { Link } from 'react-router-dom'
import { TitleAndDescription, TitleDescLink } from '../../components'
import img_user from '../../assets/img/default.jpg'
import { BsAward, BsMortarboard, BsPinAngle } from 'react-icons/bs'
import { CardProfile, CardSearch, PeopleGroup } from '../../components'

export function Classe() {

    return (
        <main className={`container ${stl.classes_page}`}>

            <section className={stl.section_content_classes}>

                <TitleAndDescription
                    title={"Classes & Turmas"}
                    desc={"Aqui você pode ver todas as turmas e classes que estão disponíveis no sistema."}
                />

                <CardSearch
                    placeholder={"Pesquisar turma ou classes..."}
                    sugest1={"Todos"}
                    btnAddClassT={true}
                />

                <div className={stl.list_class}>

                    <article className={`${stl.card_classe} anime-bottom`}>
                        <div className={stl.head}>
                            <div>
                                <BsPinAngle />
                                <span>10ª Classe</span>
                            </div>

                            <strong>2024/2025</strong>
                        </div>

                        <div className={stl.body}>

                            <div className={stl.left}>
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

                        </div>
                    </article>

                    <article className={`${stl.card_classe} anime-bottom`}>
                        <div className={stl.head}>
                            <div>
                                <BsPinAngle />
                                <span>10ª Classe</span>
                            </div>

                            <strong>2024/2025</strong>
                        </div>

                        <div className={stl.body}>

                            <div className={stl.left}>
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

                        </div>
                    </article>

                    <article className={`${stl.card_classe} anime-bottom`}>
                        <div className={stl.head}>
                            <div>
                                <BsPinAngle />
                                <span>10ª Classe</span>
                            </div>

                            <strong>2024/2025</strong>
                        </div>

                        <div className={stl.body}>

                            <div className={stl.left}>
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

                        </div>
                    </article>

                    <article className={`${stl.card_classe} anime-bottom`}>
                        <div className={stl.head}>
                            <div>
                                <BsPinAngle />
                                <span>10ª Classe</span>
                            </div>

                            <strong>2024/2025</strong>
                        </div>

                        <div className={stl.body}>

                            <div className={stl.left}>
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

                        </div>
                    </article>

                    <article className={`${stl.card_classe} anime-bottom`}>
                        <div className={stl.head}>
                            <div>
                                <BsPinAngle />
                                <span>10ª Classe</span>
                            </div>

                            <strong>2024/2025</strong>
                        </div>

                        <div className={stl.body}>

                            <div className={stl.left}>
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

                        </div>
                    </article>

                    <article className={`${stl.card_classe} anime-bottom`}>
                        <div className={stl.head}>
                            <div>
                                <BsPinAngle />
                                <span>10ª Classe</span>
                            </div>

                            <strong>2024/2025</strong>
                        </div>

                        <div className={stl.body}>

                            <div className={stl.left}>
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

                        </div>
                    </article>

                    <article className={`${stl.card_classe} anime-bottom`}>
                        <div className={stl.head}>
                            <div>
                                <BsPinAngle />
                                <span>10ª Classe</span>
                            </div>

                            <strong>2024/2025</strong>
                        </div>

                        <div className={stl.body}>

                            <div className={stl.left}>
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

                        </div>
                    </article>

                    <article className={`${stl.card_classe} anime-bottom`}>
                        <div className={stl.head}>
                            <div>
                                <BsPinAngle />
                                <span>10ª Classe</span>
                            </div>

                            <strong>2024/2025</strong>
                        </div>

                        <div className={stl.body}>

                            <div className={stl.left}>
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

                        </div>
                    </article>

                    <article className={`${stl.card_classe} anime-bottom`}>
                        <div className={stl.head}>
                            <div>
                                <BsPinAngle />
                                <span>10ª Classe</span>
                            </div>

                            <strong>2024/2025</strong>
                        </div>

                        <div className={stl.body}>

                            <div className={stl.left}>
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

                        </div>
                    </article>

                </div>

            </section>

            <CardProfile />
        
        </main>
    )
}
