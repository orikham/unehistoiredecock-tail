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

function noAlcool() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );
}

function alcool() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  );
}

function ordinary() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
  );
}

function unordinary() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
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
