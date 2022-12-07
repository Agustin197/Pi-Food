import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getRecipeTitle } from '../../redux/actions'
import styles from './Search.module.css'

export default function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        if (!name) return alert("Enter title")
        dispatch(getRecipeTitle(name))
        setName("")
        setCurrentPage(1)
    }
    
    return (
        <div className={styles.search}>
             <input type='text'
            placeholder="Search recipe..."
            onChange={(e) => handleInputChange(e)}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}
