<template>
  <SearchBarComponent />
</template>

<script>
// @ is an alias to /src

import SearchBarComponent from "@/components/SearchBarComponent.vue";

//import { searchCocktailsByName } from "@/services/ApiCocktail.js";
//import { searchCocktailsByIngredient } from "@/services/ApiCocktail.js";

export default {
  name: "HomeView",
  components: {
    SearchBarComponent,
    //SearchResultsComponent,
  },

  props: {},

  data() {
    return {
      cocktails: [],
    };
  },
  methods: {
    displayResults(results) {
      this.cocktails = results;
    },
  },
};
</script>

<style scoped lang="scss">
template {
  background-color: black;
}
</style>
