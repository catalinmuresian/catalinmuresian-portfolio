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

  </div>
</template>

<script setup>

import {ref} from "vue";

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
</script>

<style lang="scss">
.projects-section {
  .top {
    .functionalities {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      .search {
        color: white;
        .q-input {
          max-width: 130px;
        }
      }
      .sort {
       > span {
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


}

</style>
