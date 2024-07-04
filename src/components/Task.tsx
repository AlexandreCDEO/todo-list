import { useState } from 'react';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
    const [isChecked, setIsChecked] = useState(false);
   
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
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
            <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <Trash className={styles.removeIcon} size={14} />
        </div>
    );
}
