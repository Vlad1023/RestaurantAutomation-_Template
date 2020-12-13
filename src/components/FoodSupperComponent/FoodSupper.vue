<template>
  <v-layout row >
    <v-container fluid grid-list-sm>
      <v-data-iterator
        :items="getSupperList"
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
                              <v-btn
                    icon
                    href="http://127.0.0.1:8080/Reference/SortDishes.html"
                    target="_blank"
                  >
                    <v-icon>contact_support</v-icon>
                  </v-btn>
          </v-toolbar>
        </template>
  
      <template v-slot:default="props">
        <v-layout row wrap>
          <v-flex v-for="dish in props.items" :key="dish.price" xs4>

            <v-card>

              <v-img
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/1897686_MEDIUM-4a2a0c7.jpg?quality=90&resize=768,574"
                height="150px"
              >
              </v-img>

              <div class="display-2 ml-1">
                <span :class="{'green--text font-weight-bold': sortBy === 'Title'}">{{dish.title}}</span>
                                  <v-btn
                    icon
                    href="http://127.0.0.1:8080/Reference/AddDishToOrder.html"
                    target="_blank"
                  >
                    <v-icon>contact_support</v-icon>
                  </v-btn>
              </div>

              <div class = "mt-2 ml-1">
                <v-btn @click="addToOrder(dish)" small color="primary">Add to order</v-btn>
              </div>

              <v-card-subtitle class="mt-2 text-right">
                <span :class="{'green--text font-weight-bold': sortBy === 'Price'}">price: {{dish.price}} $</span> 
              </v-card-subtitle>

              <v-card-subtitle class="text-right">
                <span :class="{'green--text font-weight-bold': sortBy === 'Calories'}">calories: {{dish.calories}} g</span> 
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
    name: 'FoodDinner',
    data () {
      return {
        show: false,
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 6,
        sortBy: 'name',
        keys: [
          'Title',
          'Calories',
          'Price',
        ],
      }
    },
    computed: {
      getSupperList() {
        return this.$store.state.supper;
      },
      numberOfPages () {
        return Math.ceil(this.getSupperList.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.getSupperList.filter(key => key !== 'Title')
      }
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1;
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
      addToOrder (dish) {
        this.$store.commit('addToOrder', dish);
      }
    }  
  }
</script>
<style scoped src="./FoodSupper.css"></style>