import {Link} from "react-router-dom"
import styles from "./Nav.module.css"

const Nav = ()=>{
    return(
        <>
        <div className={styles.container}>
            <hr></hr>
            <Link to="/"><h3>⇱</h3></Link>
            <hr></hr>
            <Link to="/home"><h3>HOME</h3></Link>
            <hr></hr>
            <Link to="/home/create"><h3>CREATE</h3></Link>
            <hr></hr>
        </div>
        </>
    )
}

export default Nav