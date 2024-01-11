<template>
  <q-layout view="lHh Lpr lFf" ref="el">
    <Nav />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Nav />
    <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" style="width: 10px;" color="grey-6" />
    </q-page-scroller>
  </q-layout>
</template>

<script setup>

import Nav from "components/Nav";

import {ref, watch} from "vue";
import { useElementSize } from '@vueuse/core'
import {useStore} from "vuex";
const el = ref(null)
const { width } = useElementSize(el)

const { commit } = useStore()

watch(() => width.value, (value) => {
  commit('SET_SCREEN_WIDTH', value)
}, { deep: true })

</script>

<style lang="scss">

</style>
