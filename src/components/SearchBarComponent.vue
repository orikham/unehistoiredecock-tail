<template>
  <div id="search-bar">
    <h2>quel cocktail désirez vous consulter aujourd’hui ?</h2>
    <section id="contnair-barre">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher une boisson"
      />
      <button @click="search">Rechercher</button>
      <img id="filtre" src="../assets/filtre.png" alt="" />
    </section>

    <section id="contnair-filtre">
      <figure>
        <img src="../assets/filtresearch.jpg" alt="" />
      </figure>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>

<style scoped lang="scss">
#search-bar {
  text-align: center;
  background-color: black;

  h2 {
    color: white;
  }

  #contnair-barre {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    input {
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
    width: 1000px;
    text-align: center;

    figure {
      width: 1000px;

      img {
        width: 500px;
      }
    }
  }
}
</style>
