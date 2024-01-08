<template>
  <q-btn class="main-button"
         flat
         :type="type"
         color="white"
         @click="handleButton('contact-me')">{{ name }}</q-btn>
</template>

<script setup>

const props = defineProps({
  name: String,
  type: String
})

const emit = defineEmits(['handle-button'])

function handleButton (action) {
  emit('handle-button', action)
}
</script>

<style lang="scss">
.main-button {
  padding: 0;
  color: $white;
  font-size: 14px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 2.286px;
  border-bottom: 2px solid $yellow;
  border-radius: 0;
  .q-focus-helper {
    display: none;
  }
}
.main-button:hover {
  color: $yellow!important;
  transition: all 200ms ease-in-out;
}

</style>
