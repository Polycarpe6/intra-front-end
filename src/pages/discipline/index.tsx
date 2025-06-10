import React from 'react'
import stl from './discipline.module.css'
import { CardDiscipline, CardProfile, CardSearch, Col_Xl_9, TitleDescLink } from '../../components'
import { getDisciplinas } from '../../api/endpoints'
import { ModalAddDiscipline } from '../../components/modals/modalDiscipline'
import { BsBookmarkCheck, BsCheck2All, BsPen, BsPencil, BsTrash } from 'react-icons/bs'

export function Discipline() {
    const [listDiscipline, setListDiscipline] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);

    const getAllDiscipline = async () => {
        const disciplinas: any = await getDisciplinas();
        setListDiscipline(disciplinas);
        console.log(disciplinas);

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
                    sugest1={"Todas"}
                    btnAddDiscipline={true}
                />

                <div className={stl.list_discipline}>


                    {listDiscipline.map((disciplina, key) => (
                        <CardDiscipline
                            id={disciplina.id}
                            counter={`0${key + 1}`}
                            name={disciplina.nome}
                        />
                    ))}

                    

                </div>

                <ModalAddDiscipline
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    onDisciplineRegistered={getAllDiscipline}
                />
            </Col_Xl_9>
            <CardProfile />
        </main>
    )
}
