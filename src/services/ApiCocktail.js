function searchCocktails(query) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=&search.php?i=" +
      query
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

export { searchCocktails, noAlcool, alcool };
