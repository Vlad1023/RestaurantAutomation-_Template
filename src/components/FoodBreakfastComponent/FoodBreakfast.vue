<template>
  <v-layout row class="mt-8">
    <v-container fluid grid-list-sm>
      <v-data-iterator
        :items="getBreakfastList"
        :items-per-page.sync="itemsPerPage"
        :page="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
         <template v-slot:header>
          <v-toolbar
            dark
            color="blue darken-3"
            class="mb-1"
          >
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                prepend-inner-icon="mdi-magnify"
                label="Sort by"
              ></v-select>
              <v-spacer></v-spacer>
              <v-btn-toggle
                v-model="sortDesc"
                mandatory
              >
                <v-btn
                  large
                  depressed
                  color="blue"
                  :value="false"
                >
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn
                  large
                  depressed
                  color="blue"
                  :value="true"
                >
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-toolbar>
        </template>
  
      <template v-slot:default="props">
        <v-layout row wrap>
          <v-flex v-for="dish in props.getBreakfastList" :key="dish.price" xs4>

            <v-card>

              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="150px"
              >
              </v-img>

              <div :class="{'display-2 ml-1': sortBy === 'Title'}">
                {{dish.title}}
              </div>

              <v-card-subtitle :class="{'mt-2 text-right': sortBy === 'Price'}">
                price: {{dish.price}} $
              </v-card-subtitle>

              <v-card-subtitle :class="{'text-right': sortBy === 'Calories'}">
                calories: {{dish.calories}} g
              </v-card-subtitle>  

              <v-card-actions>
                <v-subheader>Components</v-subheader>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-divider></v-divider>
              <v-slide-y-transition>
                <v-card-text class="mt-n5 pl-6 primary" v-show="show">
                    {{dish.components}}
                </v-card-text>
              </v-slide-y-transition>

            </v-card>

          </v-flex>
        </v-layout>
      </template>
        
        <template v-slot:footer>
          <v-row
            class="mt-2"
            align="center"
            justify="center"
          >
            <span
              class="mr-4
              black--text"
            >
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="ml-1"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>

      </v-data-iterator>
    </v-container>
  </v-layout>
</template>

<script>
  export default {
    name: 'FoodBreakfast',
    data () {
      return {
        show: false,
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 3,
        sortBy: 'name',
        keys: [
          'Title',
          'Calories',
          'Price',
        ],
      }
    },
    computed: {
      getBreakfastList() {
        return this.$store.state.breakfast;
      },
      numberOfPages () {
        return Math.ceil(this.getBreakfastList.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.getBreakfastList.filter(key => key !== 'Name')
      }
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      }
    }  
  }
</script>
<style scoped src="./FoodBreakfast.css"></style>