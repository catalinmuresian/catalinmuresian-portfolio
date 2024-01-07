<template>
  <div class="skill-comp">
    <span class="skill-name">{{ skill }}</span>
    <span class="experience">{{ `${yearsExperience} Years Experience` }}</span>
  </div>
</template>

<script setup>

const props = defineProps({
  skill: String,
  yearsExperience: String
})
</script>

<style lang="scss">
.skill-comp {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 152px;
  .skill-name {
    color: $white;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -1px;
  }
  .experience {
    color: #8f8f8f;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 26px;
  }
}
.skill-comp:hover {
  scale: 1.05;
  transition: all 100ms ease-in;
  .skill-name {
    color: $yellow;
  }
  .experience {
    color: $white;
  }
}

</style>
