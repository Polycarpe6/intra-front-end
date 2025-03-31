import React from 'react'
import stl from './inputs.module.css'
import { Placeholder } from 'react-bootstrap';
import { BsAward, BsEnvelope, BsEye, BsEyeSlash, BsFolder, BsPerson } from 'react-icons/bs'

interface IInputProps {

    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export function InputName({value, onChange, disabled = false}: IInputProps) {

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

interface ISelectProps {
    label: string;
    placeholder: string;
    values: string[];
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

export function InputClassNameT({value, onChange}: IInputProps) {

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
            <BsEnvelope />
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
