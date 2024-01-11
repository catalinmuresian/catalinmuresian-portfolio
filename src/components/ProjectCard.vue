<template>
  <div class="project-card"
       @click="openModal">
    <q-card>
      <img :src="`${img}`" :alt="img">
    </q-card>
    <div class="info">
      <div style="display: flex;justify-content: space-between;align-items: flex-end;">
        <h3>{{ title }}</h3>
        <div v-if="link" class="see-live" style="display: flex;align-items: center; gap: 5px">
        <a
          style="
                gap: 5px;
                display: flex;
                cursor: pointer;
                font-weight: 700;
                margin-right: 5px;
                color: #E8DF00;
                text-decoration: none;
                align-items: center;"
          :href="link" target="_blank">
          <q-spinner-puff size="2em" color="#E8DF00" /> See live</a>
      </div>
      </div>
      <div class="skills">
        <p v-for="skill in skills"
          :key="skill">{{ skill }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import MainButton from './MainButton'

const emit = defineEmits(['open-modal'])

const props = defineProps({
  img: String,
  title: String,
  skills: Array,
  id: String,
  link: String
})

function openModal () {
  emit('open-modal', {
    id: props.id,
    img: props.img,
    skills: props.skills,
    title: props.title,
    link: props.link
  })
}
</script>

<style lang="scss">
.project-card {
  max-width: 500px;
  .q-card {
    border-radius: 5px;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  .info {
    h3 {
      margin-top: 10px;
      margin-bottom: 5px;
    }
    .see-live {
      display: flex;
    }
    .skills {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-bottom: 8px;

      p {
        color: $grey;
        margin: 0;
        font-size: 14px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    width: 45%;
    max-width: 540px;
    .q-card {
      cursor: pointer;
    }
    .info {
      .see-live {
        display: none !important;
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    width: 30%;
    .info {
      .skills {
        p {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
