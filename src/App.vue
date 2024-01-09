<template>
  <div class="snowflakes" aria-hidden="true">
    <div
      class="snowflake"
      v-for="(index) in 60"
      :key="index">❅
    </div>
  </div>
  <router-view />
</template>

<script setup>

</script>

<style lang="scss">


</style>
