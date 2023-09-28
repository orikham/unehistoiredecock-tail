<template>
  <div class="cocktail-card">
    <figure id="jaquette">
      <router-link
        class="liendetail"
        :to="{ name: 'cocktail-detail', params: { id: id } }"
        ><img
          :src="'https://www.thecocktaildb.com/images/media/drink/' + img"
        />
      </router-link>
    </figure>
    <div class="cocktail-infos">
      <h5>{{ title }}</h5>
      <!-- <p>{{ overview }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResultsComponent",
  props: {
    title: String,
    category: String,
    genre: String,
    id: Number,
    explainEN: String,
    img: String,
  },
};
</script>

<style scoped lang="scss">
.cocktail-card {
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 15px;

  & > #jaquette {
    display: flex;
    margin: 0 auto;

    & > .liendetail {
      width: 150px;
      height: 200px;
      display: flex;
      margin: 0 auto;
      & > img {
        width: 150px;
        height: 200px;
      }
    }
  }

  & > .cocktail-infos {
    & > h3 {
      width: 150px;
      height: 50px;
      padding: 15px;
      color: white;
    }
  }
}
</style>
