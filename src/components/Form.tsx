import styles from './Form.module.css'

import { PlusCircle } from 'phosphor-react'

export function Form() {
    return(
        <form className={styles.form}>
            <input type="text" placeholder='Adicione uma nova tarefa' name="task"/>
            <button type="submit">
                Criar
                <PlusCircle size={16}/>
            </button>
        </form>
    )
}