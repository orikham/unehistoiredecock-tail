<template>
  <section id="search">
    <SearchBarComponent @search="listCocktails" />
  </section>

  <section>
    <SearchResultsComponent
      v-for="cocktail in cocktails"
      :key="cocktail.idDrink"
      :title="cocktail.strDrink"
      :category="cocktail.strCategory"
      :genre="cocktail.strAlcoholic"
      :id="cocktail.idDrink"
      :explainEN="cocktail.strInstructions"
      :img="cocktail.strDrinkThumb"
    />
  </section>
</template>

<script>
// @ is an alias to /src
import SearchBarComponent from "@/components/SearchBarComponent.vue";
import SearchResultsComponent from "@/components/SearchResultsComponent.vue";
import { searchCocktails } from "@/services/ApiCocktail.js";

export default {
  name: "HomeView",
  components: {
    SearchBarComponent,
    SearchResultsComponent,
  },

  data() {
    return {
      query: "",
      cocktails: [],
    };
  },

  mounted() {
    this.listCocktails("");
  },

  methods: {
    async listCocktails(query) {
      try {
        const response = await searchCocktails(query);
        const data = await response.json();
        this.cocktails = data.results;
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la recherche :",
          error
        );
      }
    },
  },
};
</script>

<style scoped lang="scss">
template {
  background-color: black;
}
</style>
