import { apiKey, rootApiUrl } from "./apiUtils";

export const fetchRandomRecipes = async () => {
  const response = await fetch(
    rootApiUrl + "/recipes/random" + "?apiKey=" + apiKey + "&number=5"
  );
  const recipes = await response.json();
  return recipes;
};