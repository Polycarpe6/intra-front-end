import React from 'react'
import { Link } from 'react-router-dom'
import stl from '../../login.module.css'
import { completeProfileStudent, signupStudent } from '../../../../api/endpoints'
import { BtnLogin, InputBI, InputCodProcess, InputEmail, InputPassword, TitleDescriptionLoginFrom } from '../../../../components'

interface IStudent {
    email: string;
    processNumber: number | string | undefined
    biNumber: string;
    password: string;
}

export function Student() {


    const [student, setStudent] = React.useState<IStudent>({
        email: '',
        password: '',
        processNumber: '',
        biNumber: '',
    })


    const handleSubmit = async () => {

        // console.log(student)
        
        try {

            const newStudentauth = await signupStudent({
                email: student.email,
                password: student.password,
                role: "student"
            });

            const resStudentComplite = await completeProfileStudent({
                biNumber: student.biNumber,
                email: student.email,
                processNumber: student.processNumber
            })

            console.log(newStudentauth)
            console.log("==========================================")
            console.log(resStudentComplite)


        } catch (error) {
            console.error('Erro ao registrar aluno:', error);
            // Aqui você pode mostrar uma mensagem de erro para o usuário
        }
    }
    
    return (
        <article className={`${stl.card_content_login} anime-bottom`}>

            <TitleDescriptionLoginFrom 
                title={"Junta-se a"}
                desc={"Envie seus dados para ser registrado do sistema!"}
            />

            <Link to={"/"} className={stl.link_signin_signup}>
                Já estou <span>registrado!</span>
            </Link>

            <InputBI
                value={student.biNumber}
                onChange={(e) => setStudent({...student, biNumber: e.target.value })}
            />
            
            <InputEmail 
                value={student.email}
                onChange={(e) => setStudent({...student, email: e.target.value })}
            />

            <div className={stl.card_input_codProcess_password}>

                <InputCodProcess 
                    value={student.processNumber}
                    onChange={(e) => setStudent({...student, processNumber: Number(e.target.value) })}
                />

                <InputPassword 
                    value={student.password}
                    onChange={(e) => setStudent({...student, password: e.target.value })}
                />

            </div>

            <BtnLogin
                text={"Registrar"}
                onClick={handleSubmit}
            />

        </article>
    )
}
