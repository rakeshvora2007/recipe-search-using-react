import React, { useState } from 'react';
import { Search } from "./containers/Search/Search";
import { Recipe } from "./containers/Recipe/Recipe";
import styles from './App.module.css';
import { Loading } from "./components/Reusables/Loading";

function App() {
  let [recipeList, setRecipeList] = useState([]);
  let [loading, setLoading] = useState(false);


  const handleRecipesUpdate = (value) => {
    setRecipeList(value);
  }

  return (
    <div className={styles.appCover}>
      <Search handleRecipesUpdate={handleRecipesUpdate} setLoading={setLoading} />

      {
        loading ?
          <Loading />
          :
          recipeList.length ?
            <Recipe recipeList={recipeList} />
            :
            <div className={styles.intialMessage}>
              Start Finding the Recipes you like
        </div>
      }
    </div>
  );
}

export default App;
