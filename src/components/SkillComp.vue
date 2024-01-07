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
  align-items: center;
  .skill-name {
    color: $white;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -1px;
  }
  .experience {
    color: #afafaf;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
  }
}

</style>
