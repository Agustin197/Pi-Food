import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getDetail } from "../../redux/actions";
import styles from './Detail.module.css'
import loadingImg from "../../images/4vsk.gif"

export default function Detail() {
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
        return ()=>{
            dispatch(cleanDetail())
        }
    }, [dispatch, id])

    const recipeDetail = useSelector(state => state.detail)
    
    return (
        <>
        <div>
            {recipeDetail.length > 0 ?
            <div className={styles.container}>
                <h1>{recipeDetail[0].title}</h1>
                <img className="imgDetail" src={recipeDetail[0].image} alt='recipe' height="250vw" width="330vh" />
                <p>DIETS TYPES: {recipeDetail[0].diets?.map(e=>{
                    return (
                        <p key={e.id}>✅ {e}</p>
                    )
                    })}</p>
                <p>DISH TYPES: {recipeDetail[0].dishTypes?.map(e => {
                    return (
                        <p>🍽 {e}</p>
                    )
                })}</p>
                <p>SUMMARY: {recipeDetail[0].summary}</p>
                <p>HEALTH SCORE: {recipeDetail[0].healthScore}</p>
                <p>STEPS: {recipeDetail[0].steps?.map(e => {
                    return (
                        <li>{e}</li>
                    )
                })}</p>
            </div>
            :
            <div className={styles.loading}>
                <h3>Loading...</h3>
                <img alt="loading" src={loadingImg} height="80px" id="img" />
            </div>
            }
        </div>
        </>
    );
}
