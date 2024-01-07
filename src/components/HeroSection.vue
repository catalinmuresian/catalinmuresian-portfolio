<template>
  <div class="hero-section">
    <div class="intro-text">
      <div class="portrait-image">
        <img src="../assets/cm-main-image.png" alt="">
      </div>
      <h1>Hi</h1><br>
      <h1 class="name">I’m Catalin M.</h1>
      <p>Frontend developer with a good understanding of the big picture of web development, from an idea to a product.</p>
      <q-btn flat color="white">Contact me</q-btn>
    </div>
  </div>

</template>

<script setup>
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
      bottom: 0;
      right: -16px;
      z-index: -1;
      img {
        width: 100%;
      }
    }
    .q-btn {
      padding: 0;
      color: $white;
      font-size: 14px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 2.286px;
      border-bottom: 2px solid $yellow;
      border-radius: 0;
      .q-focus-helper {
        display: none;
      }
    }
    .q-btn:hover {
      color: $yellow!important;
      transition: all 200ms ease-in-out;
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
      font-size: 14px;
      mix-blend-mode: exclusion;
      margin-bottom: 10px;

    }
  }
}


</style>
