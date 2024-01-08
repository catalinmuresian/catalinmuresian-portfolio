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
    <div class="buttons">
     <MainButton
       :name="'View Project'"
       @handle-button="handleButton('view-project')"
     />
      <MainButton
        :name="'View Code'"
        @handle-button="handleButton('view-code')"
      />
    </div>
  </div>
</template>

<script setup>

import MainButton from './MainButton'

const emit = defineEmits(['handle-button'])

const props = defineProps({
  img: String,
  title: String,
  skills: Array,
  id: String
})

function handleButton (action) {
  emit('handle-button', {action, id: props.id})
}
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
  .buttons {
    display: flex;
    gap: 30px;
  }

}

</style>
