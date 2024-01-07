<template>
  <div class="skills-section">
    <SkillComp
      v-for="{name, yearsExperience } in skillList"
      :key="name"
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
    yearsExperience: '4'
  },
  {
    name: 'CSS',
    yearsExperience: '4'
  },
  {
    name: 'JavaScript',
    yearsExperience: '4'
  },
  {
    name: 'Vue js',
    yearsExperience: '4'
  },
  {
    name: 'Quasar js',
    yearsExperience: '4'
  },
  {
    name: 'Nuxt js',
    yearsExperience: '4'
  },
])
</script>

<style lang="scss">
.skills-section {
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
}

</style>
