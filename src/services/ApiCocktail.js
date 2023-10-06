function searchCocktailsByName(query) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query
  );
}

function searchCocktailsByIngredient(query) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + query
  );
}

function noAlcool(queryFilter) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" +
      queryFilter
  );
}

function alcool(queryFilter) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic" +
      queryFilter
  );
}

function ordinary(queryFilter) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink" +
      queryFilter
  );
}

function unordinary(queryFilter) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail" +
      queryFilter
  );
}

export {
  searchCocktailsByName,
  searchCocktailsByIngredient,
  noAlcool,
  alcool,
  ordinary,
  unordinary,
};
