import { useState } from 'react';
import styles from './Form.module.css'

import { PlusCircle } from 'phosphor-react'

interface FormProps {
    onAddTodo: (content: string) => void;
}

export function Form({ onAddTodo }: FormProps) {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(inputValue.trim()) {
            onAddTodo(inputValue);
            setInputValue('');
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <input onChange={handleInput} value={inputValue} type="text" placeholder='Adicione uma nova tarefa' name="task"/>
            <button type="submit">
                Criar
                <PlusCircle size={16}/>
            </button>
        </form>
    )
}