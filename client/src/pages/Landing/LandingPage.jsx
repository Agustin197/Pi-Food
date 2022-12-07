import React from "react";
import {Link} from "react-router-dom"
import styles from "../Landing/Landing.module.css"

export default function LandingPage() {
    return(
        <div className={styles.fondo}>
            <h1>Welcome to Henry Food</h1>
            <Link to='/home'>
                <button>START</button>
            </Link>
        </div>
    )
}