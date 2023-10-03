<template>
  <div>
    <SearchBarComponent @search="handleSearch" />
    <div v-if="cocktails.length > 0">
      <div
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
        class="cocktail-card"
      >
        <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
        <h3>{{ cocktail.strDrink }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBarComponent from "@/components/SearchBarComponent.vue";
import {
  searchCocktailsByName,
  searchCocktailsByIngredient,
} from "@/services/ApiCocktail.js";

export default {
  data() {
    return {
      cocktails: [],
    };
  },
  methods: {
    handleSearch(query) {
      if (query.startsWith("ingredient:")) {
        searchCocktailsByIngredient(query.substring(11)) // Remove "ingredient:" prefix
          .then((response) => response.json())
          .then((data) => {
            this.cocktails = data.ingredients || [];
          });
      } else {
        searchCocktailsByName(query)
          .then((response) => response.json())
          .then((data) => {
            this.cocktails = data.drinks || [];
          });
      }
    },
  },
};
</script>

<style>
.cocktail-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  text-align: center;
}
</style>
