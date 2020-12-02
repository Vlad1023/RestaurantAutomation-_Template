<template>
  <v-container>
    <v-row align="center">
      <v-col cols="6">
        <router-link v-on:click.native="breafastPr()" to="/breakfast">
          <v-row :class="{'primary': this.isBreakfastPressed}" class="teal darken-1 food-category">
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
        <router-link v-on:click.native="dinnerPr()" to="/dinner">
          <v-row :class="{'primary': this.isDinnerPressed}" class="teal darken-1 food-category">
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
        </router-link>
        <router-link v-on:click.native="supperPr()" to="/supper">
          <v-row :class="{'primary': this.isSupperPressed}" class="teal darken-1 food-category">
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
        </router-link>
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
        isBreakfastPressed: false,
        isDinnerPressed: false,
        isSupperPressed: false,
      }
    },
    methods: {
      breafastPr(){
        this.isBreakfastPressed = true;
        this.isDinnerPressed = false;
        this.isSupperPressed = false;
      },
      dinnerPr(){
        this.isBreakfastPressed = false;
        this.isDinnerPressed = true;
        this.isSupperPressed = false;
      },
      supperPr(){
        this.isBreakfastPressed = false;
        this.isDinnerPressed = false;
        this.isSupperPressed = true;
      }
    }
  }
</script>
<style scoped src="./Menu.css"></style>