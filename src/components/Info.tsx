import styles from './Info.module.css'

interface InfoProps {
    total: number;
    completedQuantity: number;
}

export function Info({ total, completedQuantity}: InfoProps) {

    return (
        <div className={styles.info}>
            <div>
                <strong>Tarefas criadas</strong>
                <span>{total >= 0 ? total : 0}</span>
            </div>

            <div>
                <strong>Concluídas</strong>
                <span> {completedQuantity >= 0 ? completedQuantity : 0} de {total >= 0 ? total : 0}</span>
            </div>
        </div>
    )
}