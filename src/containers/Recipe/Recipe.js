import React from 'react';
import {RecipeList} from './RecipeList/RecipeList';
import styles from './Recipe.module.css'

export const Recipe = ({recipeList}) => {
    return(
        <div className={styles.recipeItems}>
            {console.log(recipeList)}
            {recipeList.map(recipe => {
               recipe = recipe.recipe; 
               return <RecipeList
                key={recipe.label}
                id={recipe.label}
                label={recipe.label}
                calories={recipe.calories}
                cautions={recipe.cautions}
                dietLabels={recipe.dietLabels}
                healthLabels={recipe.healthLabels}
                ingredients={recipe.ingredients}
                shareAs={recipe.shareAs}
                source={recipe.source}
                totalWeight={recipe.totalWeight}
                image={recipe.image}
                ingredientLines={recipe.ingredientLines}
                />
            })}
        </div>
    );
}  