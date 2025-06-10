import React from 'react'
import stl from './people.module.css'
import { CardProfile, CardSearch, Col_Xl_9, TitleDescLink, PeopleItem } from '../../components'
import { getAlunos } from '../../api/endpoints'

export function People() {

    const [allStudent, setAllStudent] = React.useState([]); // Adicione este estado
    
    const getAllStudents = async () => {

        const students: any = await getAlunos();
        setAllStudent(students);
    }

    React.useEffect(() => {
        getAllStudents();
    }, [])

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
                        allStudent.map( (student) => {

                            return (
                                <PeopleItem 
                                    id={student.id}
                                    n_process={"0000"}
                                    name={student.nome}
                                    email={student.email}
                                    username={`${student.nome.toLowerCase().replace(/\s/g, '')}.intra@ipil`}
                                    classOrDiscipline={"nao informado"}
                                />
                            )

                        })
                    }

                    
            </Col_Xl_9>

            <CardProfile />
        </main>
    )
}
