<template>
  <div id="search-bar">
    <h2>quel cocktail désirez vous consulter aujourd’hui ?</h2>
    <section id="contnair-barre">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="entrée un ingrédient ou le nom du cocktail"
      />
      <button @click="search">Rechercher</button>
      <img
        id="filtre"
        src="../assets/filtre.png"
        alt=""
        @click="toggleFiltre"
      />
    </section>
    <div id="testdufiltre">
      <img src="../assets/illu1.png" alt="" />
      <section id="contnair-filtre">
        <form class="menu">
          <figure id="haut">
            <img src="../assets/cock&tail.png" alt="" />
            <img src="../assets/cock&tail.png" alt="" />
          </figure>
          <h2>Filtres</h2>
          <div id="etalage">
            <div class="menu-item">
              <label>
                <input
                  type="radio"
                  name="choixAlcool"
                  value="sansAlcool"
                  v-model="choixAlcool"
                />
                Sans alcool
              </label>
              <label>
                <input
                  type="radio"
                  name="choixAlcool"
                  value="avecAlcool"
                  v-model="choixAlcool"
                />
                Avec alcool
              </label>
              <label>
                <input
                  type="radio"
                  name="choixAlcool"
                  value="lesDeux"
                  v-model="choixAlcool"
                />
                Les deux
              </label>
            </div>

            <!-- Groupe de cases à cocher pour le choix de boissons ou cocktails -->
            <div class="menu-item">
              <label>
                <input
                  type="radio"
                  name="choixBoisson"
                  value="boissons"
                  v-model="choixBoisson"
                />
                Boissons
              </label>
              <label>
                <input
                  type="radio"
                  name="choixBoisson"
                  value="cocktails"
                  v-model="choixBoisson"
                />
                Cocktails
              </label>
              <label>
                <input
                  type="radio"
                  name="choixBoisson"
                  value="lesDeux"
                  v-model="choixBoisson"
                />
                Les deux
              </label>
            </div>
          </div>
          <!-- Groupe de cases à cocher pour le choix d'alcool -->

          <!-- Le reste de votre formulaire ici... -->

          <button @click="filter">Rechercher</button>
          <figure id="bas">
            <img src="../assets/cock&tail.png" alt="" />
            <img src="../assets/cock&tail.png" alt="" />
          </figure>
        </form>
      </section>
      <img src="../assets/illu2.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      choixAlcool: "",
      choixBoisson: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchQuery);
      this.$emit("filter", this.choixAlcool, this.choixBoisson);
    },

    toggleFiltre() {
      const contnairFiltre = document.getElementById("contnair-filtre");

      if (contnairFiltre.style.display === "none") {
        contnairFiltre.style.display = "block";
      } else {
        contnairFiltre.style.display = "none";
      }
    },
  },
};
</script>

<style scoped lang="scss">
#search-bar {
  text-align: center;
  background-color: black;
  margin-bottom: 25px;

  #testdufiltre {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;

    & > img {
      width: 320px;
    }
  }
  h2 {
    color: white;
  }

  #contnair-barre {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dashed #63e0fe;

    input {
      border-radius: 500px;
      border: 2px solid #63e0fe;
      width: 500px;
      height: 50px;
      margin: 10px;
    }

    button {
      margin: 10px;
    }

    #filtre {
      margin: 10px;
      width: 50px;
    }
  }

  #contnair-filtre {
    display: none;
    margin-top: 50px;
    & > .menu {
      background-color: black;
      color: #fff;
      //padding: 20px;
      border-radius: 10px;
      border: 5px ridge #88421d;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      font-family: KAZYcraie;
      width: 800px;
      margin: 0 auto;
      align-items: center; // Centre le contenu
      display: flex;
      flex-direction: column;

      & > #haut {
        display: flex;
        justify-content: space-between;
      }
      & > #bas {
        display: flex;
        justify-content: space-between;
      }

      & > figure {
        width: 800px;
        margin: 0;
        padding: 5px;
        display: flex;

        & > img {
          width: 100px;
          height: 100px;
        }
      }

      & > h2 {
        font-family: KAZYcraie;
        color: white;
        border-bottom: 1px ridge white;
      }
      & > #etalage {
        width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 5px dashed white;
        padding: 15px;

        & > .menu-item {
          display: flex;
          flex-direction: column;
          //align-items: flex-start;
          margin-bottom: 10px;

          & > label {
            font-weight: bold;
            font-style: italic;
            display: flex;
            flex-direction: row;
            align-items: center;

            & > input {
              margin-right: 5px;
            }

            & > input[type="radio"] {
              appearance: none;
              width: 20px;
              height: 20px;
              border: 2px solid white;
              background-color: black;
              outline: none; /* Pour supprimer le contour par défaut */
              cursor: pointer;
            }

            /* Styles pour les cases à cocher cochées */
            & > input[type="radio"]:checked {
              background-color: white;
            }
          }
        }
      }

      & > button {
        background-color: #333;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-top: 25px;
      }

      & > button:hover {
        background-color: #555;
      }
    }
  }
}
</style>
