<template>
  <div class="skills-section">
    <h2>Some of the skills and tools I work with</h2>
    <div class="skill-list">
      <SkillComp
        v-for="{name, logo, hoverColor} in skillList"
        :key="name"
        :logo="logo"
        :skill="name"
        :hover-color="hoverColor"
      />
    </div>
  </div>
</template>

<script setup>

import SkillComp from '../components/SkillComp'

import {ref} from "vue";

const skillList = ref([
  {
    name: 'HTML',
    logo: 'html.png',
    hoverColor: '#f16528'
  },
  {
    name: 'CSS',
    logo: 'css.png',
    hoverColor: '#369cd6'
  },
  {
    name: 'JavaScript',
    logo: 'js.png',
    hoverColor: '#e9ca32'
  },
  {
    name: 'Vue js',
    logo: 'vue.png',
    hoverColor: '#41b783'
  },
  {
    name: 'Quasar js',
    logo: 'quasar.png',
    hoverColor: '#00b3fe'
  },
  {
    name: 'Nuxt js',
    logo: 'nuxt.png',
    hoverColor: '#03c58e'
  },
])
</script>

<style lang="scss">
.skills-section {
  display: flex;
  width: 100%;
  gap: 60px;
  align-items: center;
  flex-direction: column;
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    max-width: 500px;
  }
  @media only screen and (min-width: 768px) {
    gap: 80px;
    .skill-list {
      gap: 60px 120px;
      max-width: 700px;
    }
  }
  @media only screen and (min-width: 1440px) {
    .skill-list {
      max-width: 1440px;
      gap: 86px;
    }
  }
}

</style>
