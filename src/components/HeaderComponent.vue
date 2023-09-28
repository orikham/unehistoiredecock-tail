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
    </div>
  </header>
</template>

<script>
import { noAlcool } from "@/services/ApiCocktail.js";
export default {
  name: "HeaderComponent",

  data() {
    return {
      nombreBoissonsSansAlcool: 0, // Initialisation à 0
    };
  },

  mounted() {
    noAlcool()
      .then((response) => {
        const data = response.data; // Accédez à l'objet de données

        if (data && data.drinks) {
          const nombreBoissonsSansAlcool = data.drinks.reduce(
            (acc, drink) => acc + Number(drink.idDrink),
            0
          );
          // Mettez à jour le modèle avec le nombre de recettes
          this.nombreBoissonsSansAlcool = nombreBoissonsSansAlcool;

          console.log("total boissons : ", nombreBoissonsSansAlcool);
        }
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des boissons sans alcool :",
          error
        );
      });
  },
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
