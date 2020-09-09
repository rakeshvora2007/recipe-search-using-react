import React from 'react';
import styles from './RecipeList.module.css'

export const RecipeList = ({ image, label, ingredientLines, calories }) => {
    return (
        <div className={styles.recipeItem}>
            
            <div className={styles.recipeImageContainer}>
                <img src={image} alt="" className={styles.recipeImage} />
            </div>
            <div className={styles.header}>
                <div className={styles.recipeItemTitle}>{label} <sup className={styles.calories}>{Math.round(calories)} Cal</sup></div>
            </div>
            <div className={styles.ingredientsContainer}>
                <ul className={styles.recipeIngridientList}>{ingredientLines.map((line, index) => {
                    return <li key={index}>{line}</li>
                })}</ul>
            </div>
        </div>
    );
}