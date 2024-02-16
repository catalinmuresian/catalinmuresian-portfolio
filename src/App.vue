<template>
  <MainSpinner v-if="!mainImageLoaded" />
  <router-view/>
</template>

<script setup>
import SnowFlake from './components/SnowFlake'
import {useStore} from "vuex";
import {computed, watch} from "vue";
import { useQuasar, QSpinnerGears } from 'quasar'
import MainSpinner from './components/MainSpinner'
const $q = useQuasar()

const { state } = useStore()

const mainImageLoaded = computed(() => {
  return state.data.mainImageLoaded
})

watch(() => mainImageLoaded.value, (value) => {
  value && $q.loading.hide()
}, { deep: true})

</script>

<style lang="scss">
</style>

