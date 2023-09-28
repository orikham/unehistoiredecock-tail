<template>
  <div id="search-bar">
    <h1>quel cocktail désirez vous boire aujourd’hui ?</h1>
    <input
      v-model="query"
      @input="search"
      placeholder="Entrer le nom ou l'ingredient de votre cocktail"
    />
    <button @click="searchAction">Rechercher</button>
  </div>
</template>

<script>
export default {
  name: "SearchBarComponent",
  data() {
    return {
      query: "",
    };
  },

  methods: {
    searchAction() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style scoped lang="scss">
#search-bar {
  text-align: center;
}
input {
  width: 500px;
  height: 50px;
}
</style>
