<template>
  <q-page class="flex main-page column main-distance">
    <HeroSection  class="main-padding main-max-width"/>
    <hr>
    <OurServicesSection  class="main-padding main-max-width our-services-section animation-section " />
    <SkillsSection  class="main-padding main-max-width animation-section" />
    <StartProjectCard  class="main-padding main-max-width animation-section" />
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
      delay: 1.2
    },
    {
      sectionName: 'image-hero',
      delay: 1.2

    },
    ]

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
      delay: delay
    })

  })
  sections.forEach(sec => {
    gsap.to(sec, {
      scrollTrigger: {
        trigger: sec,
        toggleActions: 'play none none none',
        start: '-250px 100%',
        end: 'bottom 100%'
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
.animation-section {
  transform: translate(0px, 50px);
  opacity: 0.5;
}
.main-page .z {
  margin-top: 200px;
  height: 2000px;
  align-self: center;
  display: flex;
  flex-direction: column;
  .box {
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 100px;
    display: block;
    width: 500px;
    height: 260px;
    text-align: left;
    color: white;
    padding: 20px;
    opacity: 0;
  }
  .a {
    background-color: green;
  }
  .b {
    background-color: orange;

  }
  .c {
    background-color: grey;
  }

}

</style>
