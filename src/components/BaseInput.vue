<template>
  <q-input
    class="base-input"
    v-model="inputValue"
    lazy-rules="ondemand"
    :type="type"
    label-color="grey"
    rows="4"
    :style="type === 'textarea' && 'min-height: 70px;'"
    :rules="[val => !!val || 'Field is required']"
    :label="label"
    @update:modelValue="event => handleInput(event)"/>
</template>

<script setup>

import {ref, watch} from "vue";

const emit = defineEmits(['handle-input'])

const props = defineProps({
  label: String,
  type: String,
  value: String
})

const inputValue = ref('')

function handleInput (value) {
  emit('handle-input', {key: props.label, value})
}

watch(() => props.value, (value) => {
  inputValue.value = value
}, { immediate: true })



</script>

<style lang="scss">
.q-field__control {
  color: $yellow!important;
}
.q-field--standard .q-field__control:before {
  border-color: $grey!important;
}
.base-input {

  .q-field__label {
    text-transform: uppercase;
    color: $grey!important;
    font-size: 14px;
    font-weight: 500;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.222px;
  }

}

</style>
