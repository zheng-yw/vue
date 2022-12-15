<template>
  <div class="talk">
    <h1>Two people are talking: {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Talk",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1 {
  color: orange;
  height: 62px;
}
</style>
