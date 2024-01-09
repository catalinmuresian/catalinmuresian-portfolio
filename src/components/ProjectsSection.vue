<template>
  <div class="projects-section">
    <div class="top">
      <h2>Projects</h2>
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
    projectNo: 2,
    id: 'todo-app',
    img: 'Bitmap.png',
    title: 'TODO APP',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
  {
    projectNo: 1,
    id: 'entertainment-app',
    img: 'Bitmap-1.png',
    title: 'ENTERTAINMENT WEB APP',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
  {
    projectNo: 3,
    id: 'memory-app',
    img: 'Bitmap-2.png',
    title: 'MEMORY GAME',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
  {
    projectNo: 4,
    id: 'art-gallery-app',
    img: 'Bitmap-3.png',
    title: 'ART Gallery',
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
  margin-bottom: 60px;

  .top {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;

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
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
    .projects-list {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 80px 40px;
      justify-content: space-between;
    }
    .top {
      margin-bottom: 60px;
    }
  }
}

</style>
