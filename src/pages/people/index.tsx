import React from 'react'
import stl from './people.module.css'
import { CardProfile, CardSearch, Col_Xl_9, TitleDescLink, PeopleItem } from '../../components'
import { ListStudentClassT, ListUsers } from '../../api/mock'

export function People() {

    const { listUsers } = ListUsers()

    return (
        <main className={`container ${stl.people_page}`}>
            <Col_Xl_9 className={stl.section_people}>

                    <TitleDescLink
                        title={"Todos os usuários"}
                        desc={"Veja todos os professores, alunos, e outros usuários do seu curso. Você também pode se registrar."}
                        linkPath={""}
                    />

                    <CardSearch
                        placeholder={"Busca usuarios"}
                        sugest1={"Todos"}
                        sugest2={"Alunos"}
                        sugest3={"Profesores"}
                        btnAddStudent={true}
                        btnAddTeacher={true}
                    />

                    {
                        listUsers.map( (person) => {

                            if (person.tipo === "Aluno")
                                return (
                                    <PeopleItem 
                                        n_process={person.n_processo}
                                        name={person.nome}
                                        email={person.email}
                                        username={person.username}
                                        classOrDiscipline={person.turma}
                                    />
                                )

                            return (
                                <PeopleItem 
                                    n_process={person.id}
                                    name={person.nome}
                                    email={person.email}
                                    username={person.email}
                                    classOrDiscipline={person.disciplina}

                                />
                            )

                        })
                    }

                    
            </Col_Xl_9>

            <CardProfile />
        </main>
    )
}
