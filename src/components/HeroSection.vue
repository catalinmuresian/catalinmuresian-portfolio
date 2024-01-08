<template>
  <div class="hero-section">
    <div class="intro-text">
      <div class="portrait-image">
        <img src="../assets/cm-main-image.png" alt="">
      </div>
      <h1>Hi</h1><br>
      <h1>I’m Catalin M.</h1>
      <div class="role">
        <hr>
        <span>frontend developer</span>
      </div>
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
    .role {
      gap: 15px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      hr {
        margin: 0;
        border: 2px solid $yellow;
        width: 60px;
      }
      > span {
        color: $yellow;
        font-weight: 700;
      }
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
