import stl from './classe.module.css'
import React, { Suspense } from 'react'
import { getClasses } from '../../api/endpoints';
import { CardProfile, CardSearch, CardClasse, TitleAndDescription, TitleNotFound } from '../../components'

export function Classe() {

    const [listClasse, setlistClasse] = React.useState([]);
        
    const getAllClasses = async () => {
        const classes: any = await getClasses();
        setlistClasse(classes);
    }
    
    React.useEffect(() => {
        getAllClasses();
    }, [])


    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <main className={`container ${stl.classes_page}`}>

                <section className={stl.section_content_classes}>

                    <TitleAndDescription
                        title={"Classes & Turmas"}
                        desc={"Aqui você pode ver todas as turmas e classes que estão disponíveis no sistema."}
                    />

                    <CardSearch
                        placeholder={"Pesquisar turma ou classes..."}
                        btnAddClassT={true}
                    />

                    <div className={stl.list_class}>

                        {listClasse.map((classe: any) => (
                            <CardClasse
                                key={classe.id}
                                id={classe.id}
                                name={classe.nome}
                                year={classe.ano}
                            />
                        ))}

                        {
                                            
                            (listClasse.length === 0) && (
                                <TitleNotFound
                                    title={"Nenhuma turma ou classe encontrada!"}
                                    desc={"Parece que não há turmas ou classes cadastradas no sistema. Você pode criar uma nova turma ou classe clicando no botão 'Adicionar Turma'."}
                                />
                            )
                                            
                        }

                    </div>

                </section>

                <CardProfile />
            
            </main>
        </Suspense>
    )
}
