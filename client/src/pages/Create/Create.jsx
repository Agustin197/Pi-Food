import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions"
import {validate} from "./Validate"
import styles from './Create.module.css'

export default function CreateRecipe() {
  const dispatch = useDispatch()
  const diets = useSelector(state=>state.diets)

  const [errors, setErrors] = useState({})

  const [input, setInput] = useState({
    title: "",
    image: "",
    diets: [],
    summary: "",
    healthScore: "",
    steps: []
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    )
  }

  function handleDiets(e) {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value]
    })
  }
  function handleSteps(e) {
    setInput({
      ...input,
      steps: [...input.steps, e.target.value]
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // if (input.title && input.summary) {
      dispatch(postRecipe(input))
      alert("Recipe created!")
      setInput({
        title: "",
        image: "",
        diets: [],
        summary: "",
        healthScore: "",
        steps: []
      })
    // } else {
    //   alert("Error. Check the form and complete")
    // }
  }

  function handleDelete(e) {
    setInput({
        ...input,
        diets: input.diets.filter((diet) => diet !== e)
    })
}

useEffect(() => {
  dispatch(getDiets()) // cuando el componente se monta se dispara la callback
}, [dispatch])

  return (
    <>
      <div className={styles.container}>
        <h1>Create recipe</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.formulario}>
                <label>TITLE: </label>
                <input type='string' value={input.title} name='title' onChange={(e) => handleChange(e)}/>
                <p className={styles.p}>{errors.title}</p>

                <label>IMAGE: </label>
                <input type='text' value={input.image} name='image' onChange={(e) => handleChange(e)}/>
                <p className={styles.p}>{errors.image}</p>

                <label>SUMMARY: </label>
                <input type='text' value={input.summary} name='summary' onChange={(e) => handleChange(e)}/>
                <p className={styles.p}>{errors.summary}</p>

                <label>HEALTH SCORE: </label>
                <input type='number' value={input.healthScore} name='healthScore' onChange={(e) => handleChange(e)}/>
                <p className={styles.p}>{errors.healthScore}</p>

                <label>STEPS: </label>
                <input type='text' value={input.steps} name='steps' onChange={(e) => handleSteps(e)}/>
                <p className={styles.p}>{errors.steps}</p>

                <label>DIETS: </label>
                <select id='diets' defaultValue={'select diets'} onChange={(e) => handleDiets(e)}>
                  <option key='default' value='select diets' hidden>select diets</option>
                  {diets?.map((d) => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                </select>
                <div className={styles.diets}>
                    {input.diets.map((e) => {
                        return (
                            <div className={styles.dietss}>      
                              <p key={e.id}>{e} <button className={styles.x} onClick={()=>handleDelete(e)}>x</button></p>
                            </div>
                        )
                    })}
                    <p className={styles.p}>{errors.diets}</p>
                </div>
            </div>
            <div className={styles.butt}>
              <button className={!input.title || Object.keys(errors).length > 0 ? styles.btn_off : styles.btn_on} type="submit">Create</button>
            </div>
        </form>
      </div>
    </>
  )
}
