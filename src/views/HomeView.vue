<template>
  <div>
    <SearchBarComponent @search="handleSearch" />

    <section id="results" v-if="cocktails.length > 0">
      <div class="slider-container">
        <button class="slider-button" @click="prevSlide">Précédent</button>
        <div class="slider">
          <div
            class="slide"
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
          >
            <div class="cocktail-card">
              <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
              <h5>{{ cocktail.strDrink }}</h5>
            </div>
          </div>
        </div>
        <button class="slider-button" @click="nextSlide">Suivant</button>
      </div>
    </section>
  </div>
</template>

<script>
import SearchBarComponent from "@/components/SearchBarComponent.vue";
import {
  searchCocktailsByName,
  searchCocktailsByIngredient,
} from "@/services/ApiCocktail.js";

export default {
  components: {
    SearchBarComponent,
  },
  data() {
    return {
      cocktails: [],
      currentSlide: 0,
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
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.cocktails.length - 1) {
        this.currentSlide++;
      }
    },
  },
};
</script>

<style scoped lang="scss">
#results {
  background-color: black;
  padding: 10px;
  margin: 10px;

  .slider-container {
    display: flex;
    align-items: center;
  }

  .slider-button {
    background-color: #63e0fe;
    color: white;
    border: none;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease;
  }

  .slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .cocktail-card {
      border: 1px solid #63e0fe;
      padding: 10px;
      margin: 10px;
      display: flex;
      flex-direction: column;

      & > img {
        width: 200px;
        height: 200px;
      }

      & > h5 {
        color: red;
      }
    }
  }
}
</style>
