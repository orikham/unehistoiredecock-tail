<template>
  <div>
    <SearchBarComponent @search="handleSearch" @filter="choice" />

    <section id="results" v-if="cocktails.length > 0">
      <div class="slider-container">
        <button class="slider-button prev" @click="prevSlide">
          <span>Précédent</span>
        </button>
        <div class="slider">
          <div class="slider-visible">
            <div
              class="slide"
              v-for="cocktail in visibleCocktails"
              :key="cocktail.idDrink"
            >
              <div class="cocktail-card">
                <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
                <h5>{{ cocktail.strDrink }}</h5>
              </div>
            </div>
          </div>
        </div>
        <button class="slider-button next" @click="nextSlide">
          <span>Suivant</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import SearchBarComponent from "@/components/SearchBarComponent.vue";
import {
  searchCocktailsByName,
  searchCocktailsByIngredient,
  alcool,
  noAlcool,
  ordinary,
  unordinary,
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

  computed: {
    visibleCocktails() {
      const startIndex = this.currentSlide;
      const endIndex = startIndex + 5;
      return this.cocktails.slice(startIndex, endIndex);
    },
  },

  methods: {
    handleSearch(query) {
      if (query.startsWith("ingredient:")) {
        searchCocktailsByIngredient(query.substring(1)) // Remove "ingredient:" prefix
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

    choice(queryFilter) {
      // Cette méthode sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher" dans la section de filtrage.

      if (queryFilter && queryFilter.length > 0) {
        alcool(queryFilter)
          .then((response) => response.json())
          .then((data) => {
            this.cocktails = data.drinks || [];
          });
      } else if (!queryFilter) {
        noAlcool(queryFilter)
          .then((response) => response.json())
          .then((data) => {
            this.cocktails = data.drinks || [];
          });
      } else if (queryFilter === "lesDeux") {
        // Si l'utilisateur a sélectionné "Les deux", vous pouvez appeler deux API différentes
        // ou combiner les résultats de différentes manières selon vos besoins.
        Promise.all([alcool(queryFilter), noAlcool(queryFilter)])
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            // Vous pouvez maintenant traiter les données de manière appropriée.
            // data[0] contiendra les données de "avec alcool" et data[1] les données de "sans alcool".
            // Vous pouvez combiner ou afficher ces données comme vous le souhaitez.
            this.cocktails = [
              ...(data[0].drinks || []),
              ...(data[1].drinks || []),
            ];
          });
      } else {
        // Si l'utilisateur n'a pas sélectionné d'option spécifique pour l'alcool ou les boissons, utilisez une API qui renvoie tous les cocktails (ou modifiez cela en fonction de votre logique).
        unordinary()
          .then((response) => response.json())
          .then((data) => {
            this.cocktails = data.drinks || [];
          });

        ordinary()
          .then((response) => response.json())
          .then((data) => {
            this.cocktails = data.drinks || [];
          });
      }

      // Vous pouvez ajouter d'autres conditions pour gérer d'autres critères si nécessaire.
    },

    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    nextSlide() {
      if (this.currentSlide < Math.floor(this.cocktails.length - 5)) {
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
  display: flex;
  justify-content: center;

  .slider-container {
    display: flex;
    align-items: center;
  }

  .slider-button {
    height: 200px;
    background-color: black;
    color: #63e0fe;
    border: 1px solid #63e0fe;
    padding: 10px;
    margin: 5px;

    cursor: pointer;

    span {
      writing-mode: vertical-rl; /* ou vertical-lr selon votre préférence */
      text-orientation: upright; /* assure que le texte est orienté correctement */
      white-space: nowrap; /* empêche le texte de se diviser sur plusieurs lignes */
    }
  }

  .prev {
    border-radius: 100px 0 0 100px;
    box-shadow: 0px 10px 10px 10px#63e0fe;
  }

  .next {
    border-radius: 0 100px 100px 0;
  }

  .slider {
    display: flex;
    overflow: hidden;
  }

  .slider-visible {
    width: 100%;
    display: flex;
    transition: transform 0.5s ease;
  }

  //

  .slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .cocktail-card {
      border-top: 3px solid #ffabcf;
      border-left: 3px solid #ffabcf;
      border-bottom: 3px solid #63e0fe;
      border-right: 3px solid #63e0fe;
      padding: 10px;
      margin: 10px;
      display: flex;
      flex-direction: column;

      & > img {
        width: 200px;
        height: 200px;
      }

      & > h5 {
        color: #ffabcf;
        text-align: center;
      }
    }

    .cocktail-card:hover {
      box-shadow: 0 0 20px 10px #b1c6e7;
      cursor: pointer;
    }
  }
}
</style>
