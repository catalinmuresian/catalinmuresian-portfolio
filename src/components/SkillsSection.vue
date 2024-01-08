<template>
  <div class="skills-section">
    <SkillComp
      v-for="{name, yearsExperience, logo } in skillList"
      :key="name"
      :logo="logo"
      :skill="name"
      :years-experience="yearsExperience"
    />

  </div>
</template>

<script setup>

import SkillComp from '../components/SkillComp'

import {ref} from "vue";

const skillList = ref([
  {
    name: 'HTML',
    yearsExperience: '4',
    logo: 'html.png'
  },
  {
    name: 'CSS',
    yearsExperience: '4',
    logo: 'css.png'
  },
  {
    name: 'JavaScript',
    yearsExperience: '4',
    logo: 'js.png'
  },
  {
    name: 'Vue js',
    yearsExperience: '4',
    logo: 'vue.png'
  },
  {
    name: 'Quasar js',
    yearsExperience: '4',
    logo: 'quasar.png'
  },
  {
    name: 'Nuxt js',
    yearsExperience: '4',
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
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

</style>
