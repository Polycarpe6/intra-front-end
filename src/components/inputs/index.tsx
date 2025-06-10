import React from 'react'
import stl from './inputs.module.css'
import { BsAward, BsEnvelope, BsEye, BsEyeSlash, BsFillBookmarkFill, BsFolder, BsPerson } from 'react-icons/bs'
import { getCursos } from '../../api/endpoints';




interface ISelectProps {
    label: string;
    placeholder: string;
    values: string[];
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SelectCursos({ value, onChange }: { value: string, onChange: (val: string) => void }) {
    const [cursos, setCursos] = React.useState<any[]>([]);

    React.useEffect(() => {
        async function fetchCursos() {
            try {
                const response = await getCursos();
                setCursos(response);
            } catch (error) {
                console.error('Error fetching cursos:', error);
                setCursos([]);
            }
        }
        fetchCursos();
    }, []);

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Seleciona Um Curso</label>
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                >
                    <option value="">Nenhum curso Selecionado</option>
                    {cursos.map((curso, idx) => (
                        <option key={curso.id || idx} value={curso.id || curso.nome}>
                            {curso.nome}
                        </option>
                    ))}
                </select>
            </div>
            <BsAward />
        </div>
    );
}

export function Select({label, placeholder, values}: ISelectProps) {

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>{label}</label>
                <select name="" id="">
                    <option value="#" selected>{placeholder}</option>
                    {values?.map((value, index) => (
                        <option key={index} value={value}>{value}</option>
                    ))}
                    
                </select>
            </div>
            <BsAward />
        </div>
    )
}

interface IInputProps {

    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export function InputBI({value, onChange}: IInputProps) {

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Nº Bilhete de Identidade</label>
                <input 
                    type="text" 
                    value={value}
                    onChange={onChange}
                />
            </div>
            <BsPerson />
        </div>
    )
}

export function InputName({value, onChange, disabled = true}: IInputProps) {

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Nome completo</label>
                <input 
                    type="text" 
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
            <BsPerson />
        </div>
    )
}

export function InputDiscipline({value, onChange}: IInputProps) {

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Nome da Disciplina</label>
                <input 
                    type="text" 
                    value={value}
                    onChange={onChange}
                />
            </div>
            <BsPerson />
        </div>
    )
}

export function InputCodProcess({value, onChange}: IInputProps) {

    return (
        <div className={`${stl.card_input_label_icon} ${stl.codProcess}`}>
            <div className={stl.card_input_label}>
                <label>Nº Proc</label>
                <input 
                    type="text" 
                    value={value}
                    onChange={onChange}
                />
            </div>
            <BsFolder />
        </div>
    )
}

export function InputEmail({value, onChange}: IInputProps) {

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Email</label>
                <input 
                    type="email" 
                    value={value}
                    onChange={onChange}
                />
            </div>
            <BsEnvelope />
        </div>
    )
}

export function InputClasseName({value, onChange}: IInputProps) {

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Nome da Turma</label>
                <input 
                    type="text" 
                    value={value}
                    onChange={onChange}
                />
            </div>
            <BsFillBookmarkFill />
        </div>
    )
}

export function InputClasseYear({value, onChange}: IInputProps) {

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Ano letivo</label>
                <input 
                    type="text" 
                    value={value}
                    onChange={onChange}
                />
            </div>
            <BsFillBookmarkFill />
        </div>
    )
}

export function InputPassword({value, onChange}: IInputProps) {

    const [typeInput, setTypeInput] = React.useState(true)

    function handClick() {
        setTypeInput(!typeInput)
    }

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Senha</label>
                <input 
                    type={typeInput ? "password" : "text"} 
                    value={value}
                    onChange={onChange}
                />
            </div>
            {typeInput ? <BsEyeSlash onClick={handClick}/> : <BsEye onClick={handClick}/>}
        </div>
    )
}
