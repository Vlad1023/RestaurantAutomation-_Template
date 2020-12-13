<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
    <div v-if="!isAdminLogged" id="appWrap">
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
      <router-link v-on:click.native="clearOrder()" to="/login">
      <v-btn color="primary">
        Log as admin
      </v-btn>
      </router-link>
    </div>
    <div v-else id="appWrap">
      <div class="txt">
          Most valuable table: №1
      </div>
      <div class="txt">
          Most valuable hall: №2
      </div>
        <router-link v-on:click.native="clearOrder()" to="/">
        <v-btn color="primary">
          Logout
        </v-btn>
      </router-link>
    </div>
      <v-btn icon href="http://127.0.0.1:8080/Reference/LoginAdmin.html" target="_blank">
        <v-icon>contact_support</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="blue lighten-2">
      <router-view></router-view>
    </v-main>
    <v-divider></v-divider>
    <OrderComponent v-if="getOrderList.length > 0"/>
    <v-footer
      app
      color="secondary"
      dark
    >
    </v-footer>
  </v-app>
</template>

<script>
  import { OrderComponent } from '@components/';
export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    getOrderList(){
      return this.$store.state.order;
    },
    isAdminLogged(){
      return this.$store.state.isAdminLogged;
    }
  },
  methods: {
    clearOrder(){
      this.$store.commit('disableLogged');
    },
    logOut(){
      this.$store.commit('clearOrders');
    }
  },
  components:{
    OrderComponent
  }
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

#appWrap{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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