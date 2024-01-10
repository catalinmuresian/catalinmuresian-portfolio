<template>
  <div class="our-services-section">
    <h2>Our services</h2>
    <div class="our-services-list">
      <ServicesCard
        v-for="({ title, description, hoverColor}, index) in servicesList"
        :key="index"
        :title="title"
        :description="description"
        :hover-color="hoverColor"
      />
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import ServicesCard from './ServicesCard'

const servicesList = ref([
  {
    title: 'Responsive Web Design',
    description: 'Ensure your website looks great and functions seamlessly on all devices, from desktops to smartphones.',
    hoverColor: '#bf6fff'
  },
  {
    title: 'Front-end Development',
    description: 'Implement robust and efficient front-end solutions using cutting-edge technologies such as HTML5, CSS3, JavaScript, Vue js, Quasar js and Nuxt js.',
    hoverColor: '#bf9648'
  },
  {
    title: 'Web Performance Optimization',
    description: 'Enhance website speed and performance to provide users with a smooth and responsive browsing experience.',
    hoverColor: '#766fff'
  },
  {
    title: 'API Integration',
    description: 'Integrate third-party APIs seamlessly to enhance the functionality and features of your website.',
    hoverColor: '#48bf68'
  },
  {
    title: 'Collaboration with Back-End Developers:',
    description: 'Work closely with back-end developers to integrate front-end and back-end functionalities seamlessly.',
    hoverColor: '#abb500'
  },
  {
    title: 'Cross-Browser Compatibility',
    description: 'Guarantee consistent performance and appearance across various web browsers for a broader user reach.',
    hoverColor: '#48a2bf'
  },
])
</script>

<style lang="scss">
.our-services-section {
  display: flex;
  flex-direction: column;
  gap: 60px;
  h2 {
    text-align: center;
  }

  .our-services-list {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    .our-services-list {
      gap: 80px;
    }
  }
}

</style>
