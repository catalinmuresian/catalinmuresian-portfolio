<template>
  <div class="services-card" :style="styleObject(hoverColor)">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  description: String,
  hoverColor: String
})


function styleObject (color) {
  return {
    '--color-hover': color,
  }
}
</script>

<style lang="scss">
.services-card {
  width: 100%;
  max-width: 300px;
  background-color: #f7f7f7;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 20px;
  gap: 40px;
  cursor: default;
  h4, p {
    color: $black;
    text-align: center;
  }
  p {
    line-height: 140%;
  }
}

.services-card:hover {
  background-color: var(--color-hover);
  transition: all 200ms ease;
  h4, p {
    color: $white;
  }
}

</style>
