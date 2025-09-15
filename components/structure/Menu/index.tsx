import React from 'react';
import styles from "./styles.module.css";

export default function Menu({ className = "" }) {
    return (
        <div className={`${className} ${styles.container}`}>Menu</div>
    )
}
