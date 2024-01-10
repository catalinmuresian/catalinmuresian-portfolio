<template>
  <div class="skill-comp" :style="styleObject(hoverColor)">
    <img style="width: 80px;"
         :src="`${logo}`"
         alt="logo">
    <span class="skill-name">{{ skill }}</span>
  </div>
</template>

<script setup>

const props = defineProps({
  skill: String,
  logo: String,
  hoverColor: String
})

function styleObject (color) {
  return {
    '--color-hover': color,
  }
}
</script>

<style lang="scss">
.skill-comp {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 135px;
  gap: 10px;
  cursor: default;
  .skill-name {
    color: #adadad;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -1px;
  }
}
.skill-comp:hover {
  animation: tilt-shaking 0.25s infinite;
  .skill-name {
    color: var(--color-hover);
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
