import React from 'react'
import stl from './classe.module.css'
import { CardProfile, CardSearch, CardClasse, TitleAndDescription } from '../../components'

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

                    <CardClasse
                        id={1}
                        name={"ii10a"}
                        year={"2023/2024"}
                    />

                    

                </div>

            </section>

            <CardProfile />
        
        </main>
    )
}
