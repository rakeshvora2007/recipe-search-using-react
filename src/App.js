import React, {useState} from 'react';
import {Search} from "./containers/Search/Search";
import {Recipe} from "./containers/Recipe/Recipe";

function App() {
 const [recipeList, setRecipeList] = useState([]);

  const handleRecipesUpdate = (value) => {
    setRecipeList(value);
  }

  return (
    <div>
      <Search handleRecipesUpdate={handleRecipesUpdate}/>
      <Recipe recipeList={recipeList}/>
    </div>
  );
}

export default App;
