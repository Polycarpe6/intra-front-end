import React from 'react'
import stl from './windows.module.css'
import { TitleDescLink } from '../title-desc-link'
import { InputCodProcess, InputEmail, SelectClassT } from '../inputs'
import { BtnLogin } from '../buttons'
import { BsArrowBarRight, BsArrowRight } from 'react-icons/bs'

export function WindowAddStudentInClass() {

    return (
        <main className={stl.main_window}>
            <section className={stl.window_add_student}>

                <button className={stl.btn_close}>
                    <BsArrowRight />
                </button>

                <TitleDescLink
                    title={"Adicionar Aluno"}
                    desc={"Para adicionar um aluno, basta inserir o número de processo e o e-mail. Certifique-se de que as informações estejam corretas antes de prosseguir."}
                    linkPath={""}
                />


                <div className={stl.card_input}>
                    <InputCodProcess />
                    <SelectClassT
                        values={["II10A", "II10B", "II10C", "II10D", "IG10A", "IG10B", "IG10C", "IG10D"]}
                    />
                    <InputEmail />
                </div>
                
                <BtnLogin 
                    text='Adicionar'
                />

            </section>
        </main>
    )
}
