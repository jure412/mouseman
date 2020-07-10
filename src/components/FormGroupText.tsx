import React from 'react'
import './FormGroupText.scss'
import {ITextGroup} from '../extra/Interfaces'

const FormGroupText = ({label, type, name, value, error, setFormOnChange}: ITextGroup): JSX.Element  => {
    // console.log(props)

    function handleChange(e: React.FormEvent<HTMLInputElement>):void {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setFormOnChange(prev => ({...prev, [name]: value}))
      }

    return (
        <div className="form-group-text">
            <label htmlFor="">{label}</label>
            <input 
                type={type} 
                name={name}
                autoComplete="off" 
                value={value} 
                onChange={handleChange}
            />
            <p className="input-errors">{error}</p>
        </div>
    )
}

export default FormGroupText
