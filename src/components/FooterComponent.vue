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
footer {
  border-top: 1px solid #63e0fe;
  margin-top: 15px;
}
p {
  color: #63e0fe;
}
</style>
