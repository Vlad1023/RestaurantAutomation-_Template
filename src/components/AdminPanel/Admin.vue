<template>
 <v-container fluid>
      <v-data-iterator
        :items="items"
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
                    href="http://127.0.0.1:8080/Reference/AllOrders.html"
                    target="_blank"
                  >
                    <v-icon>contact_support</v-icon>
                  </v-btn>
          </v-toolbar>
        </template>
  
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.title"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-card-title class="subheading font-weight-bold">
                  {{ item.title }}
                </v-card-title>
                 <v-card-title class="subheading font-weight-bold">
                 Hall №{{ item.hall }}
                </v-card-title>
                 <v-card-title class="subheading font-weight-bold">
                 Talbe №{{ item.table }}
                </v-card-title>
  
                <v-divider></v-divider>
  
                <v-list dense>
                  <v-list-item
                    v-for="(key, index) in filteredKeys"
                    :key="index"
                  >
                    <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                      {{ key }}:
                    </v-list-item-content>
                    <v-list-item-content
                      class="align-end"
                      :class="{ 'blue--text': sortBy === key }"
                    >
                      {{ item[key.toLowerCase()] }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
  
        <template v-slot:footer>
          <v-row
            class="mt-2"
            align="center"
            justify="center"
          >
            <span class="black--text">Items per page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  color="primary"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
  
            <v-spacer></v-spacer>
  
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

    <v-divider class = "mt-10" style="width: 100%;"></v-divider>
    <v-row>
    <v-col cols="3">
    <div class = "display-1"><span style = "font-color: primary;">Add dish to menu</span></div>
                                                                    <v-btn
                    icon
                    href="http://127.0.0.1:8080/Reference/AddDish.html"
                    target="_blank"
                  >
                    <v-icon>contact_support</v-icon>
                  </v-btn>
    <v-card class = "mt-10">

        <v-img
        src="https://cdn3.iconfinder.com/data/icons/ui-thick-outline-1-of-5/100/ui_01_of_9-02-512.png"
        height="150px"
        >
        </v-img>


        <v-card-subtitle class="text-left">
        <span class = "display-1">title: </span>
         <v-text-field
              label="Title"
              single-line
              outlined
              v-model="titleField"
            ></v-text-field> 
        <span v-if="isTitleEmpty" class = "red--text">title field must not be empty</span>
        </v-card-subtitle>

        <v-card-subtitle class="text-left">
        <span class = "display-1">price: </span>
         <v-text-field
              label="Price"
              single-line
              outlined
              v-model="priceField"
            ></v-text-field>
        <span v-if="isPriceEmpty" class = "red--text">price must be number</span> 
        </v-card-subtitle>

         <v-card-subtitle class="text-left">
        <span class = "display-1">callories: </span>
         <v-text-field
              label="Callories"
              single-line
              outlined
              v-model="calloriesField"
            ></v-text-field>
        <span v-if="isCalloriesEmpty" class = "red--text">callories must be number</span>  
        </v-card-subtitle> 

        <v-select class = "md-5"
        v-model="categoryField"
        flat
        solo-inverted
        hide-details
        :items="keysCategories"
        prepend-inner-icon="mdi-menu"
        label="Choose category"
        ></v-select>
        <span v-if="isCategoryEmpty" class = "red--text ml-3">category must be chosen</span>  

        <div class = "ml-13 pa-5">
        <v-btn @click='addToMenu' v-if="!isCategoryEmpty && !isCalloriesEmpty && !isPriceEmpty && !isTitleEmpty" color="primary">Add to menu</v-btn>
        <v-btn disabled v-else>Add to menu</v-btn>
        </div>
        

    </v-card>
    </v-col>
    <v-col cols="9">
      <div class = "display-1"><span style = "font-color: primary;">Add table to hall</span></div>
                                                                          <v-btn
                    icon
                    href="http://127.0.0.1:8080/Reference/AddTable.html"
                    target="_blank"
                  >
                    <v-icon>contact_support</v-icon>
                  </v-btn>
    <v-form   v-model="valid">
      <v-select class = "mt-10"
        :items="tableNumbers"
        :rules="[v => !!v || 'Table number is required']"
        label="Table number"
        required
      ></v-select>
  
      <v-select class = "mt-10"
        :items="hallNumberNumbers"
        :rules="[v => !!v || 'Hall number is required']"
        label="Hall number"
        required
      ></v-select>
  
      <v-select class = "mt-10"
        :items="capacityNumbers"
        :rules="[v => !!v || 'Item is required']"
        label="Capacity"
        required
      ></v-select>
  
      <v-btn
        :disabled="!valid"
        color="success"
        class="mt-10 mr-4"
        @click="addTable"
      >
        Add table
      </v-btn>
    </v-form>
    </v-col>
    </v-row>

    </v-container>
</template>

<script>
  export default {
    data () {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'name',
      keys: [
        'Price',
        'Calories',
        'Time'
      ],
       keysCategories: [
        'Breakfast',
        `Dinner`,
        `Supper`
      ],
      titleField: '',
      priceField: 1,
      calloriesField: 12,
      categoryField: '',
      tableNumbers: [1,2,3,4,5,6],
      hallNumberNumbers: [1,2,3],
      capacityNumbers: [1,2,3,6],
      valid: false,
      items: [
        {
          title: 'Random order',
          calories: 178,
          price: 1245,
          table: 1,
          hall: 3,
          time: new Date("January 31 2020 12:30")
        },
        {
          title: 'Random order 0',
          calories: 1231,
          price: 1241,
          table: 2,
          hall: 2,
          time: new Date("January 18 2020 12:30")
        },
        {
          title: 'Random order 1',
          calories: 1256,
          price: 5689,
          table: 1,
          hall: 2,
          time: new Date("January 18 2020 12:30")
        },
        {
          title: 'Random order 2',
          calories: 1678,
          price: 123,
          table: 3,
          hall: 2,
          time: new Date("January 18 2020 12:30")
        },
        {
          title: 'Random order 3',
          calories: 1231,
          price: 1241,
          table: 2,
          hall: 1,
          time: new Date("July 18 2020 12:30")
        },
        {
         title: 'Random order 4',
          calories: 123,
          price: 1256,
          table: 4,
          hall: 2,
          time: new Date("January 18 2020 12:30")
        },
        {
          title: 'Random order 5',
          calories: 2567,
          price: 146,
          table: 6,
          hall: 1,
          time: new Date("January 18 2020 12:30")
        },
        {
          title: 'Random order 4',
          calories: 43,
          price: 12,
          table: 7,
          hall: 2,
          time: new Date("January 18 2020 12:30")
        },
        {
          title: 'Random order 5',
          calories: 13,
          price: 56,
          table: 2,
          hall: 1,
          time: new Date("January 18 2020 09:30")
        },
        {
          title: 'Random order 6',
          calories: 2031,
          price: 1267,
          table: 26,
          hall: 2,
          time: new Date("January 18 2020 12:30")
        },
      ],
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Tite')
    },
    isTitleEmpty() { 
      if(this.titleField === ''){
        return true;
      }
      return false;
    },
    isPriceEmpty() { 
      if(isNaN(this.priceField) || this.priceField == ''){
        return true;
      }
      return false;
    },
    isCalloriesEmpty() { 
      if(isNaN(this.calloriesField) || this.calloriesField == ''){
        return true;
      }
      return false;
    },
    isCategoryEmpty() { 
      if(this.categoryField === ''){
        return true;
      }
      return false;
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
    },
    addToMenu(){
      this.$swal('Add dish operation', 'Dish`s been succesfully added to menu', 'success');
      this.titleField = '';
      this.priceField = 1;
      this.calloriesField = 12;
      this.categoryField = '';
    },
    addTable(){
      this.$swal('Add table', 'Table`s been succesfully added to hall', 'success');
    }
    }
  }
</script>
<style scoped src="./Admin.css"></style>