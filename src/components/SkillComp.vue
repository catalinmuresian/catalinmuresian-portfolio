<template>
  <div class="skill-comp">
    <img style="width: 60px;"
         :src="`${logo}`"
         alt="logo">
    <span class="skill-name">{{ skill }}</span>
<!--    <span class="experience">{{ `${yearsExperience} Years Experience` }}</span>-->
  </div>
</template>

<script setup>

const props = defineProps({
  skill: String,
  yearsExperience: String,
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
  .experience {
    color: #8f8f8f;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 26px;
  }
}
@media only screen and (min-width: 768px) {
  .skill-comp {
    cursor: pointer;
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
}

</style>
