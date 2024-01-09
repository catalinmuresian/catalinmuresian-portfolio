<template>
  <div class="project-card">
    <q-card>
      <img :src="`${img}`" :alt="img">
      <div class="hover">
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
    </q-card>
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
  .q-card {
    img {
      width: 100%;
      border-radius: 5px;
    }
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

  @media only screen and (min-width: 768px) {
    width: 47%;
    max-width: 540px;
    .q-card {
      cursor: pointer;
      .hover {
        position: absolute;
        z-index: 1;
        opacity: 0;
        background-color: rgba(52, 52, 52, 0.62);
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition: all 200ms ease;
        .buttons {
          position: absolute;
          width: 100%;
          bottom: 25%;
          display: flex;
          justify-content: center;
        }
      }
    }
    .q-card:hover {
      .hover {
        opacity: 1;
        transition: opacity 200ms ease;
      }
    }
    .buttons {
      display: none;
    }
  }
}
</style>
