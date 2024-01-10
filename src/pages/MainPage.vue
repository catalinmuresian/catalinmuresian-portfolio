<template>
  <q-page class="flex main-page column main-distance">
    <HeroSection class="main-padding main-max-width" />
    <hr>
    <OurServicesSection class="main-padding main-max-width" />
    <SkillsSection class="main-padding main-max-width" />
    <StartProjectCard class="main-padding main-max-width" />
    <ProjectsSection class="main-padding main-max-width" />
    <ContactSection />
  </q-page>
</template>

<script setup>
import HeroSection from '../components/HeroSection'
import SkillsSection from "components/SkillsSection";
import ProjectsSection from "components/ProjectsSection";
import ContactSection from "components/ContactSection";
import StartProjectCard from "components/StartProjectCard";
import OurServicesSection from "components/OurServicesSection";
</script>

<style lang="scss">
.main-page {

}
</style>
