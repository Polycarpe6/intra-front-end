import React from 'react'
import stl from './classes.module.css'
import { CardProfile, CardSearch, ListPeople, TitleAndDesc } from '../../components'
import { TitleDescLink } from '../../components'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export function Classes() {

    return (
        <main className={`container ${stl.classes_page}`}>

            <section className={stl.section_content_classes}>

                <TitleDescLink 
                    title={"Turmas e Classes"}
                    desc={"Veja as turmas e classes disponíveis"}
                    linkPath={""}
                />

                <CardSearch
                    placeholder={"Pesquisar turma ou classes..."}
                />


                <ul className={stl.list_class}>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                    <li className={"anime-bottom"}>


                        <div className={stl.info_class}>
                            <strong>Gestão de sistema informatico</strong>
                            <Link to={"class/id"}>IG10A</Link>
                        </div>

                        <ListPeople 
                            desc={"+39 alunos"}
                            linkPath={"/class/id"}
                        />

                        <span>Char</span>

                        <BsThreeDotsVertical />

                    </li>

                </ul>


            </section>

            <CardProfile />
        
        </main>
    )
}
