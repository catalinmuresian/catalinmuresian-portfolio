<template>
  <div id="contact-section" class="contact-section  ">
    <div class="container main-max-width main-padding">
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
          :loading="isFetching"
          :name="'Send Message'"
          :type="'submit'"/>
      </q-form>
    </div>
  </div>
</template>

<script setup>

import BaseInput from './BaseInput'
import MainButton from './MainButton'
import {computed, ref} from "vue";
import {useStore} from "vuex";

const { state, dispatch} = useStore
()
const isFetching = computed(() => {
  return state.data.isFetching
})

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
  dispatch('send_mmessage', {
    name: form.value.name ,
    email: form.value.email,
    message: form.value.message
  })
}

</script>

<style lang="scss">
.contact-section {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #707070;
  .container {
    max-width: 450px;
    margin: 0 auto;

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
  @media only screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
    .container {
    .info {
      p {
        max-width: 450px;
      }
    }
  }
  }
  @media only screen and (min-width: 1024px) {
    .container {
      max-width: 1024px;
      display: flex;
      justify-content: space-between;
      .info {
        align-items: flex-start;
        p {
          text-align: left;
        };
      }
      .q-form {
        width: 400px;
      }
    }


  }
  @media only screen and (min-width: 1440px) {
    .container {
      max-width: 1440px;
    }
  }
}
</style>
