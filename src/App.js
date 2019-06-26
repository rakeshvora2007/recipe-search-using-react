import React, {useState} from 'react';
import {Search} from "./containers/Search/Search";
import {Recipe} from "./containers/Recipe/Recipe";
import styles from './App.module.css';

function App() {
 const [recipeList, setRecipeList] = useState([]);

  const handleRecipesUpdate = (value) => {
    setRecipeList(value);
  }

  return (
    <div className={styles.appCover}>
      <Search handleRecipesUpdate={handleRecipesUpdate}/>
      <Recipe recipeList={recipeList}/>
    </div>
  );
}

export default App;
