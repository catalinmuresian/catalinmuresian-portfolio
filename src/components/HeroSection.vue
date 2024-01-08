<template>
  <div class="hero-section">
    <div class="intro-text">
      <div class="portrait-image">
        <img src="../assets/cm-main-image.png" alt="">
      </div>
      <h1>Hi</h1><br>
      <h1 class="name">I’m Catalin M.</h1>
      <p>Crafting pixel-perfect, user-centric web experiences with passion and proficiency.</p>
      <MainButton
        :name="'Contact Me'"
        @handle-button="handleButton"
      />
    </div>
  </div>

</template>

<script setup>

import MainButton from '../components/MainButton'

function handleButton (event) {
    const element = document.getElementById('contact-section');
    element.scrollIntoView({ behavior: 'smooth' });


}
</script>

<style lang="scss">
.hero-section {
  margin-top: 20px;
  .intro-text {
    display: flex;
    flex-direction: column;
    position: relative;
    .portrait-image {
      max-width: 190px;
      position: absolute;
      bottom: 20px;
      right: -16px;
      img {
        width: 100%;
      }
    }
    .name {
      text-decoration: underline;
      text-underline-offset: 0.3em;
      text-decoration-color: $yellow;
      text-decoration-thickness: 5px;
      margin-bottom: 30px;
    }
    p {
      max-width: 223px;
      color: #ffffff;
      mix-blend-mode: exclusion;
      margin-bottom: 40px;
    }
    .main-button {
      width: 180px;
      margin: 0 auto;
    }
  }
}


</style>
