<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
    <div class = "chair">
       <i class="material-icons chosen md-24">weekend</i>
       <i class="material-icons md-24">weekend</i>
       <i class="material-icons md-24">weekend</i>
       <i class="material-icons md-24">weekend</i>
       <i class="material-icons md-24">weekend</i>
       <i class="material-icons md-24">weekend</i>
    </div>
    <div class="txt">
        Hall № 1
    </div>
    <div class="txt">
        Table № 1
    </div>
    </v-app-bar>
    <v-main class="blue lighten-2">
      <router-view></router-view>
    </v-main>
    <v-footer
      app
      color="secondary"
      dark
    >
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>

.chair{
  width: 90px;
}

.txt{
  color: black;
  font-weight: bold;
  font-size: 3rem;
  margin-left: 100px;
}

.v-application {
    background-color: var(--v-background-base) !important;
}


i{
  margin-left: 5px;
}
.chosen{
  color: green;
}

</style>