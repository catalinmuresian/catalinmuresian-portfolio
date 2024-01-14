<template>
  <q-page class="flex main-page column main-distance">
    <HeroSection  class="main-padding main-max-width"/>
    <hr class="anim-hr">
    <OurServicesSection  class="main-padding main-max-width our-services-section animation-section " />
    <SkillsSection  class="main-padding main-max-width animation-section" />
    <StartProjectCard  class="main-padding main-max-width animation-section" />
    <hr class="anim-hr" id="hr" style="margin: 0;">
    <ProjectsSection  class="main-padding main-max-width animation-section" />
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {onMounted} from "vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const sections = document.querySelectorAll('section')
  const hr = document.querySelectorAll('hr')
  const mainSections = [
    'nav',
    'our-services-section',
    'skills-section',
    'start-project-card',
    'projects-section',
    'contact-section-anim'
  ]
  const heroSectionsAnim = [
    {
      sectionName: 'hi',
    },
    {
      sectionName: 'name',
      delay: 0.6
    },
    {
      sectionName: 'role',
      delay: 0.8
    },
    {
      sectionName: 'desc',
      delay: 1
    },
    {
      sectionName: 'button-hero',
      delay: 1.6
    },
    {
      sectionName: 'image-hero',
      delay: 0.6
    },
    ]

  hr.forEach(sec => {
    gsap.to(sec, {
      scrollTrigger: {
        trigger: sec,
        toggleActions: 'play none none none'
      },
      opacity: 1,
      duration: 1
    })

  })
  heroSectionsAnim.forEach(({sectionName, delay}) => {
    gsap.to(`.${sectionName}`, {
      scrollTrigger: {
        trigger: `.${sectionName}`,
        toggleActions: 'play none none none'
      },
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.1,
      scale: 1,
      delay: delay,
    })

  })
  sections.forEach(sec => {
    const start = sec.className === 'services-card animation-section' ? '-100px 100%' : '-150px 100%';
    gsap.to(sec, {
      scrollTrigger: {
        trigger: sec,
        toggleActions: 'play none none none',
        start: start,
        end: 'bottom 100%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
    })

  })
  mainSections.forEach(sec => {
    gsap.to(`.${sec}`, {
      scrollTrigger: {
        trigger: `.${sec}`,
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      duration: 1,
    })


  })
})

</script>

<style lang="scss">
.remove-animation {
  transform: translate(0px, 0px) !important;
  opacity: 1 !important;
}
.animation-section {
  transform: translate(0px, 30px);
  opacity: 0.5;
}
</style>
