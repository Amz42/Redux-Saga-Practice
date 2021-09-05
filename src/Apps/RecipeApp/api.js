import axios from "axios";

const API_KEY = `5ec4d7e537968b92cc53f668d729bc0f`;
const API_ID = `b90d657c`;

export const getRecipeData = async (query) => {
    const URL = `https://api.edamam.com/search?q=${query}&to=100&app_id=${API_ID}&app_key=${API_KEY}`;

    return await axios.get(URL);
};