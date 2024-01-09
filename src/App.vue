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

import {useStore} from "vuex";

const { dispatch } = useStore()

// dispatch('get_user_data')

</script>

<style lang="scss">


</style>
