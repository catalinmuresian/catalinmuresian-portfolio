<template>
  <SnowFlake />
  <router-view/>
</template>

<script setup>
import SnowFlake from './components/SnowFlake'
import {useStore} from "vuex";
import {computed, watch} from "vue";
import { useQuasar, QSpinnerGears } from 'quasar'
const $q = useQuasar()

const { state } = useStore()

const mainImageLoaded = computed(() => {
  return state.data.mainImageLoaded
})

$q.loading.show({
  spinner: QSpinnerGears,
  spinnerColor: 'yellow',
  spinnerSize: 60,
  backgroundColor: '#303030',
  messageColor: 'white',
})

watch(() => mainImageLoaded.value, (value) => {
  value && $q.loading.hide()
}, { deep: true})

</script>

<style lang="scss">

</style>
