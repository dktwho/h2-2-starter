import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    // name?: string
    disabled?: boolean
    callback: () => void
    color?: string
    children?: string
}
export const SuperButton: React.FC<PropsType> = (props) => {
    const  {color, callback, children, disabled} = props

    const onClickHandler = () => {
        callback()
    }

    // const finalClassName = `${s.button} ${color === 'red' ? s.red : s.default} ${disabled ? s.disabled : ''}`
    const finalClassName =
        `${s.button} 
        ${color === 'red' ? s.red : color==='secondary' ? s.secondary : s.default} ${disabled ? s.disabled : ''}`


    return (
        <button
            className={finalClassName}
            onClick={onClickHandler}>
             {children}
        </button>
    );
};
