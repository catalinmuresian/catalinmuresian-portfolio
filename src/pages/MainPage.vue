<template>
  <q-page class="flex main-page column main-distance">
    <HeroSection  class="main-padding main-max-width animation-section"/>
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

const section = ref(null)

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {onMounted, ref} from "vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)


  console.log(section)
  const sections = document.querySelectorAll('section')
  //
  // sections.forEach(sec => {
  //   console.log(sec)
  // })

  // let tween = gsap.to(".main-padding", { x: 100 }),
  //   st = ScrollTrigger.create({
  //     y: -100,
  //     opacity: 1,
  //     duration: 1,
  //     backgroundColor: 'black',
  //     animation: tween,
  //   });
  //
  // console.log(st.animation); // tween

  // sections.forEach(sec => {
  //   console.log(sec)
  //   gsap.to(sec, {
  //     scrollTrigger: {
  //       trigger: sec,
  //       toggleActions: 'restart none restart none'
  //     },
  //     y: -100,
  //     opacity: 1,
  //     duration: 1,
  //     backgroundColor: 'black',
  //   })
  // })

  gsap.to('.nav', {
    scrollTrigger: {
      trigger: '.nav',
      toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 1,
  })
  gsap.to('.hero-section', {
    scrollTrigger: {
      trigger: '.hero-section',
      toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 1,
  })
  gsap.to('.our-services-section', {
    scrollTrigger: {
      trigger: '.our-services-section',
      toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 1,
  })
  gsap.to('.skills-section', {
    scrollTrigger: {
      trigger: '.skills-section',
      toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 1,
  })
  gsap.to('.start-project-card', {
    scrollTrigger: {
      trigger: '.start-project-card',
      toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 1,
  })
  gsap.to('.projects-section', {
    scrollTrigger: {
      trigger: '.projects-section',
      toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 1,
  })
  gsap.to('.contact-section-anim', {
    scrollTrigger: {
      trigger: '.contact-section-anim',
      toggleActions: 'play none none none'
    },
    y: 0,
    opacity: 1,
    duration: 1,
  })

})

</script>

<style lang="scss">
.animation-section {
  transform: translate(0px, 100px);
  opacity: 0;
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
