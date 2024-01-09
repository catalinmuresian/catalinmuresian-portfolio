<template>
  <q-page class="flex main-page column">
    <HeroSection class="main-padding main-max-width" />
    <hr>
    <SkillsSection class="main-padding main-max-width" />
    <hr>
    <ProjectsSection class="main-padding main-max-width" />
    <ContactSection />
    <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" style="width: 10px;" color="grey-6" />
    </q-page-scroller>
  </q-page>
</template>

<script setup>
import HeroSection from '../components/HeroSection'
import SkillsSection from "components/SkillsSection";
import ProjectsSection from "components/ProjectsSection";
import ContactSection from "components/ContactSection";
</script>

<style lang="scss">
.main-page {

}
</style>
