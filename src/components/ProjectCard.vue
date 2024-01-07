<template>
  <div class="project-card">
    <img :src="`${img}`" :alt="img">
    <div class="info">
      <h3>{{ title }}</h3>
      <div class="skills">
        <p v-for="skill in skills"
          :key="skill">{{ skill }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  img: String,
  title: String,
  skills: Array
})
</script>

<style lang="scss">
.project-card {
  max-width: 345px;
  img {
    width: 100%;
  }
  .info {
    .skills {
      display: flex;
      flex-direction: row;
      gap: 10px;
      p {
        color: $grey;
      }
    }
  }

}

</style>
