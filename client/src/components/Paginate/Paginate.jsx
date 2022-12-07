import React from "react";
import styles from "./Paginate.module.css"

export default function Paginado({ items, allRecipes, paginado }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allRecipes / items); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className={styles.paginado}>
                {pageNumbers?.map((number) => (
                    <li key={number}>
                        <button onClick={() => paginado(number)}>{number}</button>;
                    </li>
                ))}
            </ul>
        </nav>
    );
}