<template>
  <div class="skill-comp">
    <img style="width: 80px;"
         :src="`${logo}`"
         alt="logo">
    <span class="skill-name">{{ skill }}</span>
  </div>
</template>

<script setup>

const props = defineProps({
  skill: String,
  logo: String
})
</script>

<style lang="scss">
.skill-comp {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 135px;
  gap: 10px;
  .skill-name {
    color: #adadad;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -1px;
  }
}
@media only screen and (min-width: 768px) {
  .skill-comp {
    cursor: pointer;
  }
  .skill-comp:hover {
    animation: tilt-shaking 0.25s infinite;
    .skill-name {
      color: $yellow;
    }
  }

}
@keyframes tilt-shaking {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

</style>
