import React, { /* useEffect, */ useState} from 'react';
import {APP_CONFIG} from '../../config/Keys';

export const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    // const [recipes, setRecipes] = useState([]);

    /* useEffect(() => {
        getRecipes()
    }, []); */
    
    const getRecipes = async (query, fxn) => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_CONFIG.APP_ID}&app_key=${APP_CONFIG.APP_KEY}`);
        const data = await response.json();
        fxn(data);
    }

    const onSearch = (e) => {
        e.preventDefault();
        console.log(searchTerm)
        if(searchTerm !== '') {
            getRecipes(searchTerm, (listOfRecipes) => {
                // setRecipes(listOfRecipes);
                props.handleRecipesUpdate(listOfRecipes.hits);
            })
        } else {
            alert("Please enter a value before hitting submit button");
        }
    }

    const onChangeSearchTerm = (value) => {
        setSearchTerm(value);
    }

    return (
        <form onSubmit={onSearch}>
        <input type="text" value={searchTerm} onChange={e => onChangeSearchTerm(e.target.value)}/>
        <input type="submit" value="Submit"/>
        </form>
    )
}