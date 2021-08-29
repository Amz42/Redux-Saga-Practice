import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../action";

const RecipeApp = () => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("all");
    const dispatch = useDispatch();
    const recipeState = useSelector(state => state.recipe);
    // console.log(state);

    const updateQuery = () => {
        setQuery(search);
        setSearch("");
    }

    useEffect(() => {
        console.log("useEffect called: " + query);
        dispatch(Action.fetchRecipeApi(query));
    }, [query]);

    return (
        <>
            <h1>Recipe App</h1>


            <input
                type="text"
                value = {search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            />
            <button onClick={updateQuery}>
                Search
            </button>

            {
                recipeState?.data?.hits &&
                <ul>
                    {recipeState.data.hits.map(({recipe}, index) =>  <li key={index}>{recipe.label}</li>)}
                </ul>
            }
        </>
    )
}

export default RecipeApp;