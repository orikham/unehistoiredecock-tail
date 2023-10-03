<template>
  <div>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher une boisson"
    />
    <button @click="search">Rechercher</button>
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
}
input {
  width: 500px;
  height: 50px;
}

// #filtre {
//   display: none;
// }
</style>
