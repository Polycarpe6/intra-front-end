import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate();

    const handleSubmit = async () => {

        if (!student.biNumber || !student.email || !student.password || !student.processNumber ) 
            return alert("Preencha todos os campos!!")

        
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

            if (!newStudentauth || !resStudentComplite) 
                return alert("Houve um erro ao criar sua conta!!")

            alert("Conta criada com sucesso, agora pode fazer o login!!")
            navigate("/")

        } catch (error) {
            alert('Erro ao registrar aluno:', error);
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
