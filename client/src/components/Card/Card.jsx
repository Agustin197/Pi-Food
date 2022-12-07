import React from 'react';
import styles from './Card.module.css';

export default function Card({ image, title, diets, id }) {
  return (
    <div className={styles.Card}>
      <div className={styles.Image}>
          <img src={image} alt="recipe" height="210vw" width="300vh" />
      </div>
      <div className={styles.Title}>
          <h2>{title}</h2>
      </div>
      <div className={styles.diets}>
          {diets && diets.map((e) => {
            return (
                <li key={e.id}>✅ {e}</li>
            )
          }
          )}
      </div>
    </div>
  )
};