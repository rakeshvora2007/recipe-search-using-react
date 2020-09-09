import React, { useState } from "react";
import { APP_CONFIG } from "../../config/Keys";
import styles from "./Search.module.css";

export const Search = props => {
  const [searchTerm, setSearchTerm] = useState("");

  const getRecipes = async (query, fxn) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${
      APP_CONFIG.APP_ID
      }&app_key=${APP_CONFIG.APP_KEY}`
    );
    const data = await response.json();
    fxn(data);
  };

  const onSearch = e => {
    e.preventDefault();
    console.log(searchTerm);
    if (searchTerm !== "") {
      getRecipes(searchTerm, listOfRecipes => {
        setSearchTerm("");
        props.handleRecipesUpdate(listOfRecipes.hits);
      });
    } else {
      alert("Please enter a value before hitting submit button");
    }
  };

  const onChangeSearchTerm = value => {
    setSearchTerm(value);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={onSearch}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search"
            className={styles.inputText}
            onChange={e => onChangeSearchTerm(e.target.value)}
          />
          <button type="submit" value="Submit" className={styles.searchButton}>
            <span className={styles.searchIcon}></span>
          </button>
        </div>
      </form>
    </div>
  );
};
