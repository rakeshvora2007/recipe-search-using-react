import React from 'react';
import styles from './RecipeList.module.css'

export const RecipeList = ({image, label, ingredientLines, calories}) => {
    return (
        <div className={styles.recipeItem}>
            <h3 className={styles.recipeItemTitle}>{label}</h3>
            <img src={image} alt="" className={styles.recipeImage}/>
            <ul className={styles.recipeIngridientList}>{ingredientLines.map((line, index) => {
                return <li key={index}>{line}</li>
            })}</ul>
            <h3>Calories: {calories}</h3>
        </div>
    );
}