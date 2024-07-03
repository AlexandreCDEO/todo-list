import styles from './Info.module.css'

export function Info() {
    return (
        <div className={styles.info}>
            <div>
                <strong>Tarefas criadas</strong>
                <span>5</span>
            </div>

            <div>
                <strong>Concluídas</strong>
                <span>2 de 5</span>
            </div>
        </div>
    )
}