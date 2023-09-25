<template>
  <footer>
    <p>&copy; {{ currentYear }} Devellopement By Orikham</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped lang="scss">
/* Styles spécifiques au composant Footer */
</style>
