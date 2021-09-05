import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../action";
import Modal from "./Modal";
import "./style.css";

const RecipeApp = () => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chocolate");
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
        if(!search) return;
        setQuery(search);
        setSearch("");
    }

    useEffect(() => {
        // console.log("useEffect called: " + query);
        dispatch(Action.fetchRecipeApi(query));
    }, [query]);

    const handleonKeyPress = (e) => {
        if(e.key === "Enter" )
            updateQuery();
    }

    return (
        <>
            <h1 align="center">Foodies Adda</h1>

            <div className="col-lg-4 mx-auto">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Recipe Name"
                        aria-describedby="button-addon2"
                        value = {search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        onKeyPress={(e) => handleonKeyPress(e)}
                        autoFocus
                    />
                    <button className="btn btn-outline-secondary" onClick={updateQuery}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

            {
                recipeState?.data?.hits &&
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-12 g-4 mx-4">
                    {
                        recipeState.data.hits.map(({recipe}, key) => {
                            return (
                                <div className="col-lg-3" key={key} id="card-div">
                                    <div className="card">
                                        <img src={recipe.image} className="card-img-top" alt="..." />
                                        <div className="card-body" align="center">
                                            <h4 className="card-title">{recipe.label}</h4>
                                            <span className="mx-1 badge rounded-pill bg-secondary">
                                                <i className="fa fa-cutlery" aria-hidden="true"></i> &nbsp;
                                                {recipe.dishType}
                                            </span>
                                            <span className="mx-1 badge rounded-pill bg-secondary">
                                                <i className="fa fa-cutlery" aria-hidden="true"></i> &nbsp;
                                                {recipe.mealType}
                                            </span>
                                            <span className="mx-1 badge rounded-pill bg-secondary">
                                                <i className="fa fa-cutlery" aria-hidden="true"></i> &nbsp;
                                                {recipe.cuisineType}
                                            </span>
                                            <span className="mx-1 badge rounded-pill bg-warning">
                                                <i className="fa fa-balance-scale"></i> &nbsp;
                                                {(recipe.calories/1000).toFixed(2)+" Kcal"}
                                            </span>

                                            <hr />
                                            
                                            <button
                                                className="icon-btn"
                                                onClick={() => setSeletedRecipe(recipe)}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >Know More &nbsp;<i className="bi bi-chevron-down"></i>
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