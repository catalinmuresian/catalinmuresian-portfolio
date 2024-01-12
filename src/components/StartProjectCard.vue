<template>
  <div class="start-project-card">
    <div class="container">
      <h4>Start a project</h4>
      <p>Interested in working together ? Let's schedule a call and turn your idea into a successful product.</p>
      <MainButton
        :name="'Send me a message'"
        @handle-button="handleButton"
      />
    </div>
  </div>
</template>

<script setup>

import MainButton from './MainButton'

function handleButton () {
  const element = document.getElementById('contact-section');
  element.scrollIntoView({ behavior: 'instant' });
}
</script>

<style lang="scss">
.start-project-card {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background: linear-gradient(90deg, #34485d 0%, #41b783 100%);
    width: 100%;
    padding: 20px;
    gap: 20px;
    p {
      margin: 0 auto;
      max-width: 600px;
      color: white;
      text-align: center;

    }
    .main-button {
      border: 1px solid white;
      border-radius: 5px;
      padding: 0 16px;
    }
    .main-button:hover {
      border-color: $yellow;
      color: $yellow;
      transition: all 200ms ease;
    }
    @media only screen and (min-width: 768px) {

    }
    @media only screen and (min-width: 1024px) {
      flex-direction: row;
      p {
        max-width: 390px;
      }

    }
    @media only screen and (min-width: 1440px) {
      padding: 20px 30px;
      p {
        max-width: 450px;
      }

    }
  }
}

</style>
