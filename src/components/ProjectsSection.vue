<template>
  <div class="projects-section">
    <div class="top">
      <h2>Projects</h2>
      <div class="functionalities">
        <div class="search">
          <q-input placeholder="Search"
                   label-color="white"
                   color="white"
                   dense
                   v-model="search"
                   flat
                   type="search">
            <template v-slot:prepend>
              <q-icon color="white" name="search" />
            </template>
          </q-input>
        </div>
        <div class="sort">
          <span>Sort:</span>
          <q-select
            flat
            dense
            dark
            v-model="sort"
            :options="options"
            option-value="id"
            option-label="desc"
            options-selected-class="text-yellow"
            emit-value
            map-options
          />
        </div>
      </div>
    </div>
    <div class="projects-list">
      <ProjectCard
        v-for="{img, title, skills} in projectsList"
        :key="title"
        :img="img"
        :title="title"
        :skills="skills"
      />
    </div>

  </div>
</template>

<script setup>

import {ref} from "vue";
import ProjectCard from './ProjectCard'

const search = ref('')
const sort = ref('All')
const options = ref([
  {
    id: 'all',
    desc: 'All',
  },
  {
    id: 'newest',
    desc: 'Newest'
  },
  {
    id: 'oldest',
    desc: 'Oldest'
  },
  {
    id: 'alphabetical',
    desc: 'Alphabetical'
  },

])

const projectsList = ref([
  {
    img: 'Bitmap.png',
    title: 'TODO APP',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
  {
    img: 'Bitmap-1.png',
    title: 'ENTERTAINMENT WEB APP',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
  {
    img: 'Bitmap-2.png',
    title: 'MEMORY GAME',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
  {
    img: 'Bitmap-3.png',
    title: 'ART Gallery',
    skills: ['HTML' , 'CSS', 'JavaScript']
  },
])
</script>

<style lang="scss">
.projects-section {
  .top {
    margin-bottom: 40px;
    .functionalities {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      .search {
        color: white;
        .q-input {
          max-width: 170px;
          .q-field__native {
            font-weight: 700;
            color: $white;
          }
        }
      }
      .sort {
        span {
          color: $grey;
          font-weight: 700;
          margin-right: 10px;
        }
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        .q-icon {
          color: white;
        }
      }
    }
  }
  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }


}

</style>
