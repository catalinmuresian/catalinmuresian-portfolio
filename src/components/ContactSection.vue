<template>
  <div id="contact-section" class="contact-section main-padding--none main-padding">
    <div class="info">
      <h2>Contact</h2>
      <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>

    </div>
    <q-form @submit.prevent.stop="submit">
      <BaseInput
        v-for="{key, type} in formFields"
        :value="form[key]"
        :key="key"
        :label="key"
        :type="type"
        @handle-input="handleInput"
      />
      <MainButton
        :name="'Send Message'"
        :type="'submit'"/>
    </q-form>
    <hr>
  </div>
</template>

<script setup>

import BaseInput from './BaseInput'
import MainButton from './MainButton'
import {ref} from "vue";

const form = ref({
  name: '',
  email: '',
  message: ''
})

const formFields = ref([
  {
    key: 'name',
    type: 'text'
  },
  {
    key: 'email',
    type: 'email'

  },
  {
    key: 'message',
    type: 'textarea'

  },
])

function handleInput ({key, value}) {
  form.value[key] = value
}

function submit () {
  console.log(form.value)
}

</script>

<style lang="scss">
.contact-section {
  padding-top: 60px;
  background-color: #707070;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    h2 {
      line-height: 100%;
      margin-bottom: 20px;
    }
    p {
      text-align: center;
      max-width: 300px;
    }
  }
  .main-button {
    margin-top: 25px;
  }
}

</style>
