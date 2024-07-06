import { useState } from 'react';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
    id: string;
    content: string;
    isCompleted: boolean;
    onUpdateStatus: (id: string, isCompleted: boolean) => void;
    removeTodo: (id: string) => void;
}

export function Task({id, content, isCompleted, onUpdateStatus, removeTodo}: TaskProps) {
    const [isChecked, setIsChecked] = useState(isCompleted);
   
    const handleCheckboxChange = () => {
        const isCompleted = !isChecked;
        setIsChecked(isCompleted);
        onUpdateStatus(id, isCompleted);
    };

    const handleRemoveTodo = () => {
        removeTodo(id);
    };

    return (
        <div className={`${isChecked ? styles.done : styles.task} `}>
            <div className={styles.checkboxWrapper}>
                <div
                    className={`${styles.checkboxImage} ${isChecked ? styles.checked : ''}`}
                ></div>
                <input
                    type="checkbox"
                    name="check"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            </div>
            <span>{content}</span>
            <Trash onClick={handleRemoveTodo} className={styles.removeIcon} size={14} />
        </div>
    );
}
