<template>
  <div class="projects-section">
    <div class="top">
      <h2>My recent work</h2>
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
        v-for="{img, title, skills, id} in projectsList"
        :key="title"
        :id="id"
        :img="img"
        :title="title"
        :skills="skills"
        @handle-button="handleButton"
      />
    </div>

  </div>
</template>

<script setup>

import {ref, watch} from "vue";
import ProjectCard from './ProjectCard'

const search = ref('')
const showNoResultMessage = ref(false)

const projectsList = ref([
  {
    id: 'suport-solar',
    img: 'suport-solar.png',
    title: 'Suport Solar',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Quasar js']
  },
  {
    id: 'black-mar',
    img: 'black-mar.png',
    title: 'Black Mar',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Vue js']
  },
  {
    id: 'ibrowse',
    img: 'ibrowse.png',
    title: 'iBrowse',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Quasar js']
  },
  {
    id: 'juicy-llama',
    img: 'juicy.png',
    title: 'Juicy Llama',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Vue js', 'Tailwind CSS']
  },
  {
    id: 'la-viitor',
    img: 'laviitor.png',
    title: 'La Viitor Patrimonio',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Quasar js']
  },
  {
    id: 'mim',
    img: 'mim.png',
    title: 'Muzeul Migratiei',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
  {
    id: 'notorius-nft',
    img: 'notoriusNFT.png',
    title: 'Notorius Kings NFT',
    skills: ['HTML' , 'CSS', 'JavaScript', 'React js']
  },
  {
    id: 'salva-monument',
    img: 'salvamonument.png',
    title: 'Salva Monument',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Quasar js']
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
    title: 'Add to cart - component',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
  {
    id: 'countdown',
    img: 'countdown.png',
    title: 'Countdown timer',
    skills: ['HTML' , 'CSS', 'JavaScript', 'Vue js']
  },
  {
    id: 'results',
    img: 'results.png',
    title: 'Results summary - App',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
])
const projectsListCopy = ref([...projectsList.value])

function handleButton ({action, id}) {
  console.log(action, id)
}

function handleSearch (event) {
  const result = []
  const seen = new Set();
  event !== null
    ? search()
    : (projectsList.value = projectsListCopy.value)

  function search () {
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
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    h3 {
      display: flex;
      justify-content: left;
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    .projects-list {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .top {
      margin-bottom: 60px;
      gap: 30px;
    }
  }
}

</style>
