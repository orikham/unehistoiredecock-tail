<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue"; // Importez votre composant Header
import FooterComponent from "./components/FooterComponent.vue"; // Importez votre composant Footer

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss"></style>
