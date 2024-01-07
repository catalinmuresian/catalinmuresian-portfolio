<template>
  <q-page class="flex main-page column">
    <HeroSection />
    <hr>
    <SkillsSection />
    <hr>
  </q-page>
</template>

<script setup>


import HeroSection from '../components/HeroSection'
import SkillsSection from "components/SkillsSection";
</script>

<style lang="scss">
.main-page {
  hr {
    margin: 60px 0;
  }
}
</style>
