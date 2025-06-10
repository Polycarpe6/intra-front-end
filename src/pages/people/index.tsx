import React from 'react'
import stl from './people.module.css'
import { CardProfile, CardSearch, Col_Xl_9, TitleDescLink, PeopleItem, CardPeople } from '../../components'
import { getStudent, getTeacher } from '../../api/endpoints'

export function People() {

    const [allStudent, setAllStudent] = React.useState([]);
    
    const getAllStudents = async () => {

        const students: any = await getStudent();
        setAllStudent(students);
    }

    async function handleFilterAllStudent() {
    
        const response: any = await getStudent();
    
        if (response) {
            setAllStudent(response);
        } else {
            console.error("Erro ao buscar alunos");
        }
    
    }

    async function handleFilterTeacher() {
    
        const response: any = await getTeacher();
    
        if (response) {
            setAllStudent(response);
        } else {
            console.error("Erro ao buscar alunos");
        }
    
    }

    React.useEffect(() => {
        getAllStudents();
    }, []);

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
                        bntFilterAllStudent={handleFilterAllStudent}
                        bntFilterAllTeacher={handleFilterTeacher}
                        sugest3={"Profesores"}
                        btnAddStudent={true}
                        btnAddTeacher={true}
                    />

                    <div
                        className={stl.people_list}
                    >

                         {
                            allStudent.map((student) => (
                                <CardPeople 
                                    key={student.id}
                                    id={student.id}
                                    n_process={"0000"}
                                    name={student.nome}
                                    email={student.email}
                                    username={`${student.nome.toLowerCase().replace(/\s/g, '')}.intra@ipil`}
                                />
                            ))

                        }


                    </div>


                    
            </Col_Xl_9>

            <CardProfile />
        </main>
    )
}
