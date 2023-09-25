<template>
  <header id="entete">
    <figure>
      <router-link to="/"
        ><img src="../assets/cock&tail.png" alt="" title="Accueil du site"
      /></router-link>
    </figure>
    <nav>
      <router-link to="/avecalcool"
        ><img src="../assets/avecalcool.png" alt=""
      /></router-link>
      |
      <router-link to="/sansalcool"
        ><img src="../assets/sansalcool.png" alt=""
      /></router-link>
      |
      <router-link to="/selectionalcool"
        ><img src="../assets/selectionalcool.png" alt=""
      /></router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
<style scoped lang="scss">
#entete {
  display: flex;

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
}

img {
  width: 200px;
  height: 200px;
}
</style>
