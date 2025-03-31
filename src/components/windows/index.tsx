import React from 'react'
import { BtnLogin } from '../buttons'
import stl from './windows.module.css'
import { BsXLg } from 'react-icons/bs'
import { TitleDescLink } from '../title-desc-link'
import { InputCodProcess, InputEmail, Select } from '../inputs'
import { HookWindowAddStudent } from '../../hooks'

export function WindowAddStudentInClass() {

    const { stateWindowAddStudent, handleWindowAddStudent } = HookWindowAddStudent()
    

    return (
        <main 
            className={stl.main_window}
            style={{
                display: stateWindowAddStudent ? "grid" : "none"
            }}
        >

            <section 
                className={stl.window_add_student}
                style={{
                    transform: stateWindowAddStudent ? "translateX(0%)" : "translateX(100%)"
                }}
            >

                <button 
                    className={stl.btn_close}
                    onClick={() => handleWindowAddStudent()}
                >
                    <BsXLg />
                </button>

                <TitleDescLink
                    title={"Adicionar Aluno"}
                    desc={"Para adicionar um aluno, basta inserir o número de processo e o e-mail. Certifique-se de que as informações estejam corretas antes de prosseguir."}
                    linkPath={""}
                />


                <div className={stl.card_input}>
                    <InputCodProcess />
                    <Select
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
