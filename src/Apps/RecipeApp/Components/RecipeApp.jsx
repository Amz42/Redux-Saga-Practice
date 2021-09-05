import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../action";
import Modal from "./Modal";
import "./style.css";

const RecipeApp = () => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("all");
    const [seletedRecipe, setSeletedRecipe] = useState({});

    const dispatch = useDispatch();
    const recipeState = useSelector(state => state.recipe);
    // console.log(state);
    // useEffect(() =>{
    //     recipeState?.data?.hits?.map(({recipe}) => {
    //         console.log(recipe.dishType);
    //     })
    // },[recipeState]);

    const updateQuery = () => {
        setQuery(search);
        setSearch("");
    }

    useEffect(() => {
        // console.log("useEffect called: " + query);
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
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-12 g-4 mx-4">
                    {
                        recipeState.data.hits.map(({recipe}, key) => {
                            return (
                                <div className="col-lg-3" key={key}>
                                    <div className="card">
                                        <img src={recipe.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">{recipe.label}</h4>
                                            <h5 className="card-title">Dish Type: {recipe.dishType}</h5>
                                            <h5 className="card-title">Meal Type: {recipe.mealType}</h5>
                                            <h5 className="card-title">Cuisine Type: {recipe.cuisineType}</h5>
                                            <h5 className="card-title">Calories: {recipe.calories}</h5>
                                            <p className="card-text">desc</p>
                                            <button
                                                className="icon-btn"
                                                onClick={() => setSeletedRecipe(recipe)}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                <i className="bi bi-chevron-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>        
            }
            {
                seletedRecipe !== {} &&
                <Modal recipe={seletedRecipe}/>
            }
        </>
    )
}

export default RecipeApp;