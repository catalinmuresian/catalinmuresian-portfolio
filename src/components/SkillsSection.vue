<template>
  <div class="skills-section">
    <SkillComp
      v-for="{name, logo } in skillList"
      :key="name"
      :logo="logo"
      :skill="name"
    />

  </div>
</template>

<script setup>

import SkillComp from '../components/SkillComp'

import {ref} from "vue";

const skillList = ref([
  {
    name: 'HTML',
    logo: 'html.png'
  },
  {
    name: 'CSS',
    logo: 'css.png'
  },
  {
    name: 'JavaScript',
    logo: 'js.png'
  },
  {
    name: 'Vue js',
    logo: 'vue.png'
  },
  {
    name: 'Quasar js',
    logo: 'quasar.png'
  },
  {
    name: 'Nuxt js',
    logo: 'nuxt.png'
  },
])
</script>

<style lang="scss">
.skills-section {
  display: flex;
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
    gap: 100px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 800px;
  }
}

</style>
