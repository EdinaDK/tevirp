import React from 'react';
import {useState} from 'react'
import styles from './Component.module.css';

type ComponentProps = {
    text: string
}

export function Component({text}: ComponentProps) {
    const [t, setT] = useState(text);

    return <div className={styles.body}>
        <div className={styles.text}>{t}</div>
        <button className={styles.button} onClick={() => setT(t.split('').reverse().join(''))}>Reverse</button>
    </div>;
}
