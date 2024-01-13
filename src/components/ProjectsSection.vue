<template>
  <div id="projects-section" class="projects-section">
    <q-dialog v-model="fixed">
      <q-card class="project-dialog">
        <q-card-section class="row items-center q-pb-none title-section-card">
          <div class="title text-h6">{{ selectedProject.title }}</div>
          <q-space />
          <div style="display: flex;align-items: center; gap: 10px">
          <q-btn icon="close" flat round dense v-close-popup />
          </div>
        </q-card-section>
        <q-card-section class="q-pb-none q-pt-none skills">
          <p v-for="skill in selectedProject.skills" :key="skill">{{ skill }}</p>
        </q-card-section>
        <q-separator />
        <q-card-section style="height: 100%;" class="scroll">
          <q-img
            style="width: 100%;"
            loading="lazy"
            :src="`${selectedProject.img}`"
            :alt="`${selectedProject.img}`"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <div class="top">
      <h2>My portfolio</h2>
      <div class="search">
        <q-input placeholder="Search"
                 label-color="white"
                 clearable
                 clear-icon="close"
                 color="white"
                 dense
                 v-model="search"
                 @update:model-value="handleSearch($event)"
                 flat
                 type="search">
          <template v-slot:prepend>
            <q-icon color="white" name="search" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="projects-list">
      <h3 v-show="showNoResultMessage">No results</h3>
      <ProjectCard
        v-for="{img, title, skills, id, link} in projectsList"
        :key="title"
        :id="id"
        :img="img"
        :title="title"
        :skills="skills"
        :is-search="isSearch"
        :link="link"
        @open-modal="handleOpenModal"
      />
    </div>
  </div>
</template>

<script setup>

import {computed, ref, watch} from "vue";
import ProjectCard from './ProjectCard'
import MainButton from './MainButton'
import {useStore} from "vuex";

const { state } = useStore()

const search = ref('')
const showNoResultMessage = ref(false)

const fixed = ref(false)

const isSearch = ref(false)

const screenWidth = computed(() => {
  return state.data.screenWidth
})

const projectsList = ref([
  {
    id: 'suport-solar',
    img: 'suport-solar.png',
    title: 'Suport Solar',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Quasar js'],
    link: 'https://suport-solar.ro/'
  },
  {
    id: 'black-mar',
    img: 'black-mar.png',
    title: 'Black Mar',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Vue js'],
    link: 'https://blackmar.io/'
  },
  {
    id: 'juicy-llama',
    img: 'juicy.png',
    title: 'Juicy Llama',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Vue js', 'Tailwind CSS']
  },
  {
    id: 'ibrowse',
    img: 'ibrowse.png',
    title: 'iBrowse',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Quasar js']
  },
  {
    id: 'salva-monument',
    img: 'salvamonument.png',
    title: 'Salva Monument',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Quasar js'],
    link: 'https://salvamonument.ro/'
  },
  {
    id: 'mim',
    img: 'mim.png',
    title: 'Muzeul Migratiei',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
  {
    id: 'la-viitor',
    img: 'laviitor.png',
    title: 'La Viitor Patrimoniu',
    skills: ['Web Design', 'UX | UI', 'Figma'],
    link: 'https://laviitor.patrimoniu.ro/'
  },
  {
    id: 'notorius-nft',
    img: 'notoriusNFT.png',
    title: 'Notorius Kings NFT',
    skills: ['HTML' , 'CSS', 'JavaScript', 'React js']
  },
  {
    id: 'dinstitute',
    img: 'dinstitute.png',
    title: 'Dinstitute',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Vue js']
  },
  {
    id: 'add-to-cart',
    img: 'add-to-cart.png',
    title: 'Product Component',
    skills: ['HTML' , 'CSS', 'JavaScript'],
    link: 'https://catalinmuresian.github.io/product-preview-card-component/'
  },
  {
    id: 'countdown',
    img: 'countdown.png',
    title: 'Countdown timer',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Vue js'],
    link: 'https://catalinmuresian.github.io/countdown-timer/'
  },
  {
    id: 'results',
    img: 'results.png',
    title: 'Results summary - App',
    skills: ['HTML' , 'CSS', 'JavaScript'],
    link: 'https://catalinmuresian.github.io/results-summary/'
  },
])
const projectsListCopy = ref([...projectsList.value])

const selectedProject = ref({})

function handleOpenModal ({title, img, skills, id, link}) {
  if (screenWidth.value >= 768) {
    console.log(screenWidth.value >= 768)
    fixed.value = true
    selectedProject.value = {title, img, skills, id, link}
  }
}

function handleSearch (event) {
  const result = []
  const seen = new Set();
  event !== null
    ? search()
    : (projectsList.value = projectsListCopy.value)

  function search () {
    isSearch.value = true
    projectsListCopy.value.filter(obj => {
      obj.title.toLowerCase().includes(event.toLowerCase()) && result.push(obj)
      obj.skills.forEach(skill => skill.toLowerCase().includes(event.toLowerCase()) && result.push(obj))
    })
    projectsList.value = result.filter(el => {
      const duplicate = seen.has(el.id);
      seen.add(el.id);
      return !duplicate;
    })
  }
}

watch(() => projectsList.value, (value) => {
  showNoResultMessage.value = value.length === 0
})
</script>

<style lang="scss">
.q-dialog {
  z-index: 9999999;
  .project-dialog {
    overflow: hidden;
    width: 100%;
    .title-section-card {
      display: flex;
      align-items: flex-start;
      .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
      }
    }
    .skills {
      display: flex;
      flex-direction: row;
      gap: 10px;
      p {
        font-size: 12px;
        color: grey;margin: 0;
      }

    }
  }
  @media only screen and (min-width: 768px) {
    .project-dialog {
      .skills p {
        font-size: 14px;
      }
      .title-section-card {
        .title {
          gap: 10px;
        }
      }
    }
  }
}
.q-dialog__inner--minimized > div {
  max-width: 1002px;
}
.projects-section {
  .top {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    h2 {
      text-align: center;
    }
    .search {
      .q-field--standard .q-field__control:before {
        border-color: $dark-grey !important;
      }
      color: white;
      .q-input {
        max-width: 160px;

        .q-field__native {
          font-weight: 700;
          color: $white;
        }
        .q-icon {
          color: white;
        }
      }
    }
  }
  .projects-list {
    gap: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
      h3 {
        display: flex;
        justify-content: left;
      }
  }
  @media only screen and (min-width: 768px) {
    .top {
      margin-bottom: 60px;
      gap: 30px;
    }
  }
}

</style>
