import React from 'react'
import { Suspense } from 'react'
import stl from './discipline.module.css'
import { getDiscipline } from '../../api/endpoints'
import { ModalDiscipline } from '../../components/modals/modalDiscipline'
import { CardDiscipline, CardProfile, CardSearch, Col_Xl_9, TitleDescLink, TitleNotFound } from '../../components'

export function Discipline() {

    const [listDiscipline, setListDiscipline] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);

    const getAllDiscipline = async () => {
        const disciplinas: any = await getDiscipline();
        setListDiscipline(disciplinas);
    }

    React.useEffect(() => {
        getAllDiscipline();
    }, [])

    

    return (
        <main className={`container ${stl.discipline_page}`}>
            <Col_Xl_9 className={stl.section_discipline}>
                <TitleDescLink
                    title={"Disciplinas"}
                    desc={"Veja todas as disciplinas do seu curso"}
                    linkPath={""}
                />

                <CardSearch
                    placeholder={"Busca disciplinas"}
                    btnAddDiscipline={true}
                />

                <div className={stl.list_discipline}>

                    <Suspense fallback={<div>Loading...</div>}>
                        {
                            listDiscipline.map((disciplina, index) => (
                                <CardDiscipline
                                    id={disciplina.id}
                                    counter={`0${index + 1}`}
                                    name={disciplina.nome}
                                />
                            ))
                        }
                    </Suspense>

                    {
                        (listDiscipline.length === 0) && (
                            <TitleNotFound
                                title={"Nenhuma disciplina encontrada"}
                                desc={"Você ainda não possui nenhuma disciplina cadastrada."}
                            />
                        )
                    }
                    

                </div>

                <ModalDiscipline
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    onDisciplineRegistered={getAllDiscipline}
                />
            </Col_Xl_9>
            <CardProfile />
        </main>
    )
}
