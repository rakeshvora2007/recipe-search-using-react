import React from 'react';

export const RecipeList = ({image, label, ingredientLines}) => {
    return (
        <div>
            <span>{label}</span>
            <img src={image} alt=""/>
            <span>{ingredientLines}</span>
        </div>
    );
}