<template>
  <q-layout view="lHh Lpr lFf" class="main-padding">
    <Nav />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Nav />

  </q-layout>
</template>

<script setup>

import Nav from "components/Nav";
</script>

<style lang="scss">

</style>
