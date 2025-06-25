import React from 'react'
import stl from './inputs.module.css'
import { BsAward, BsEnvelope, BsEye, BsEyeSlash, BsFillBookmarkFill, BsFolder, BsPerson, BsSignpost, BsSignpost2 } from 'react-icons/bs'
import { getCursos, getDiscipline, getTeacher } from '../../api/endpoints';




interface ISelectProps {
    label: string;
    placeholder: string;
    values: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ISelectCursosProps {
    value: string | number;
    onChange: (value: string | number) => void;
}

export function SelectCursos({ value, onChange }: ISelectCursosProps) {
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
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
            <div className={stl.card_input_label}>
                <label>Seleciona Um Curso</label>
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                >
                    <option value={0}>Nenhum curso Selecionado</option>
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

export function SelectTeacher({ value, onChange }: ISelectCursosProps) {
    const [teacher, setTeacher] = React.useState<any[]>([]);

    React.useEffect(() => {
        async function fetchTeacher() {
            try {
                const response = await getTeacher();
                setTeacher(response);
            } catch (error) {
                console.error('Error fetching teacher:', error);
                setTeacher([]);
            }
        }
        fetchTeacher();
    }, []);

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Seleciona Um Professor</label>
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                >
                    <option value={0}>Nenhum Professor Selecionado</option>
                    {teacher.map((teacher, idx) => (
                        <option key={teacher.id || idx} value={teacher.id || teacher.nome}>
                            {teacher.nome}
                        </option>
                    ))}
                </select>
            </div>
            <BsAward />
        </div>
    );
}

export function SelectDiscipline({ value, onChange }: ISelectCursosProps) {
    const [discipline, setDiscipline] = React.useState<any[]>([]);

    React.useEffect(() => {
        async function fetchDiscipline() {
            try {
                const response = await getDiscipline();
                setDiscipline(response);
            } catch (error) {
                console.error('Error fetching discipline:', error);
                setDiscipline([]);
            }
        }
        fetchDiscipline();
    }, []);

    return (
        <div className={stl.card_input_label_icon}>
            <div className={stl.card_input_label}>
                <label>Seleciona Uma Disciplina</label>
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                >
                    <option value={0}>Nenhuma Disciplina Selecionada</option>
                    {discipline.map((discipline, idx) => (
                        <option key={discipline.id || idx} value={discipline.id || discipline.nome}>
                            {discipline.nome}
                        </option>
                    ))}
                </select>
            </div>
            <BsAward />
        </div>
    );
}


















// 













interface IInputProps {

    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export function InputBI({value, onChange}: IInputProps) {

    return (
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
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

export function InputCurso({value, onChange}: IInputProps) {

    return (
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
            <div className={stl.card_input_label}>
                <label>Nome do Curso</label>
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
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
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
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
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


export function InputNumberTrimestre({value, onChange}: IInputProps) {

    return (
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
            <div className={stl.card_input_label}>
                <label>
                    Nº do Trimestre
                </label>
                <input 
                    type="number" 
                    value={value}
                    placeholder="0"
                    onChange={onChange}
                />
            </div>
            <BsAward />
        </div>
    )
}

export function InputYearTrimestre({value, onChange}: IInputProps) {

    return (
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
            <div className={stl.card_input_label}>
                <label>
                    Ano letivo
                </label>
                <input 
                    type="text" 
                    value={value}
                    placeholder="202x/202x"
                    onChange={onChange}
                />
            </div>
            <BsSignpost />
        </div>
    )
}

export function InputYearInitTrimestre({value, onChange}: IInputProps) {

    return (
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
            <div className={stl.card_input_label}>
                <label>
                    Ano de Início do Trimestre
                </label>
                <input 
                    type="date" 
                    value={value}
                    placeholder="xx/xx/202x"
                    onChange={onChange}
                />
            </div>
            {/* <BsSignpost /> */}
        </div>
    )
}

export function InputYearEndTrimestre({value, onChange}: IInputProps) {

    return (
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
            <div className={stl.card_input_label}>
                <label>
                    Ano de Fim do Trimestre
                </label>
                <input 
                    type="date" 
                    value={value}
                    placeholder="xx/xx/202x"
                    onChange={onChange}
                />
            </div>
            {/* <BsSignpost2 /> */}
        </div>
    )
}



interface IInputClassYearProps {

    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export function InputClasseYear({value, onChange}: IInputClassYearProps) {

    return (
        <div className={`${stl.card_input_label_icon} anime-bottom`}>
            <div className={stl.card_input_label}>
                <label>Ano letivo</label>
                <input 
                    type="text" 
                    placeholder='2024/2025'
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





// interface IInputNoteProps {
interface IInputNoteProps {
    placeholder: string;
    value?: string | number;
    max?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export function InputNote({placeholder, value, onChange, onBlur, max, disabled}: IInputNoteProps) {

    return (
        <div className={`${stl.card_input_label_note} anime-bottom`}>
            <div className={stl.card_input_label}>
                <label>
                    {placeholder}
                </label>
                <input 
                    type="number" 
                    min={0}
                    max={max}
                    step={0.1}
                    value={value}
                    placeholder="0"
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                />
            </div>
            <BsAward />
        </div>
    )
}