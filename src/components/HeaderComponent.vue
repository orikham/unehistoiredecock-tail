<template>
  <header id="entete">
    <figure>
      <router-link to="/"
        ><img
          class="logo"
          src="../assets/cock&tail.png"
          alt=""
          title="Accueil du site"
      /></router-link>
    </figure>
    <nav>
      <router-link to="/avecalcool"
        ><img src="../assets/avecalcool.png" alt=""
      /></router-link>

      <router-link to="/sansalcool"
        ><img src="../assets/sansalcool.png" alt=""
      /></router-link>

      <router-link to="/selectionalcool"
        ><img src="../assets/selectionalcool.png" alt=""
      /></router-link>
    </nav>
    <div id="toto">
      <p>Nombre de boissons sans alcool : {{ nombreBoissonsSansAlcool }}</p>
      <p>Nombre de boissons avec alcool : {{ nombreBoissonsAvecAlcool }}</p>
      <p>
        Nombre de boissons :
        {{ nombreBoissonsAvecAlcool + nombreBoissonsSansAlcool }}
      </p>
    </div>
  </header>
</template>

<script>
import { noAlcool } from "@/services/ApiCocktail.js";
import { alcool } from "@/services/ApiCocktail.js";
export default {
  name: "HeaderComponent",

  data() {
    return {
      drinks: [],
    };
  },

  computed: {
    nombreBoissonsSansAlcool() {
      return this.drinks.length;
    },

    nombreBoissonsAvecAlcool() {
      return this.drinks.length;
    },
  },

  async created() {
    try {
      const response = await noAlcool();
      const data = await response.json();
      const response2 = await alcool();
      const data2 = await response2.json();
      (this.drinks = data.drinks), data2.drinks;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des données.",
        error
      );
    }
  },

  // async aval() {
  //   try {
  //     const response2 = await alcool();
  //     const data = await response2.json();
  //     this.drinks = data.drinks;
  //   } catch (error) {
  //     console.error(
  //       "Une erreur s'est produite lors de la récupération des données.",
  //       error
  //     );
  //   }
  // },
};
</script>
<style scoped lang="scss">
#entete {
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  & > h1 {
    color: white;
    padding: 15px;
  }

  & > nav {
    display: flex;
    align-items: center;
    padding: 15px;

    a {
      font-weight: bold;
      color: white;
    }
  }

  & > #toto {
    & > p {
      color: aliceblue;
    }
  }
}

img {
  width: 200px;
  height: 200px;
}

@keyframes clignotement {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.logo {
  animation: clignotement 2s infinite;
}
</style>
