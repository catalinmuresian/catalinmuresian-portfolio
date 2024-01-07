<template>
  <q-page class="flex main-page column">
    <HeroSection />
    <hr>
    <SkillsSection />
    <hr>
    <ProjectsSection />
  </q-page>
</template>

<script setup>
import HeroSection from '../components/HeroSection'
import SkillsSection from "components/SkillsSection";
import ProjectsSection from "components/ProjectsSection";
</script>

<style lang="scss">
.main-page {

}
</style>
