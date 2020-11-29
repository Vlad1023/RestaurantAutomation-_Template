<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <router-link to="/breakfast">
          <v-row class="teal darken-1 food-category">
              <v-col class = "pa-0 food-category-col" cols="8">
                <div class= "food-category-col-name font-weight-black">
                 Breakfast
                </div>
              </v-col>
              <v-col class = "pa-0 food-category-col" cols="4">
                <v-img
                height="180"
                contain
                :src="foodIcon"
                ></v-img>
              </v-col>
          </v-row>
        </router-link>
        <v-row class="teal darken-1 food-category">
          <v-col class = "pa-0 food-category-col" cols="8">
            <div class= "food-category-col-name font-weight-black">
            Dinner
            </div>
          </v-col>
          <v-col class = "pa-0 food-category-col" cols="4">
            <v-img
          height="180"
            contain
            :src="foodIcon"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="teal darken-1 food-category">
          <v-col class = "pa-0 food-category-col" cols="8">
            <div class= "food-category-col-name font-weight-black">
            Supper
            </div>
          </v-col>
          <v-col class = "pa-0 food-category-col" cols="4">
            <v-img
            height="180"
            contain
            :src="foodIcon"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="teal darken-1 food-category"> </v-row>
      </v-col>
      <v-col cols="6">
        <router-view></router-view>
      </v-col> 
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        foodIcon : require("@assets/breakfast.png"),
      }
    }
  }
</script>
<style scoped src="./Menu.css"></style>