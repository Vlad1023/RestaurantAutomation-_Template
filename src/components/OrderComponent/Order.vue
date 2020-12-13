<template>
  <v-layout row class="teal pa-10">
    <v-flex v-for="dish in getOrderList" :key="dish.price">
      <v-card>
        <v-img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/1897686_MEDIUM-4a2a0c7.jpg?quality=90&resize=768,574"
          height="80px"
        >
        </v-img>
        <div class="display-1 ml-1">
          <span>{{ dish.title }}</span>
          <v-btn
            icon
            href="http://127.0.0.1:8080/Reference/OrderEdit.html"
            target="_blank"
          >
            <v-icon>contact_support</v-icon>
          </v-btn>
        </div>
        <v-card-text>
          <v-row>
            <v-col class="pr-4">
              <v-slider
                v-model="dish.amount"
                class="align-center"
                :max="max"
                :min="min"
                hide-details
              >
                <template v-slot:append>
                  <v-text-field
                    v-model="dish.amount"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-col>
          </v-row>
        </v-card-text>

        <div class="mt-2 ml-1">
          <v-btn @click="removeFromOrder(dish)" small color="error"
            >Remove from order</v-btn
          >
        </div>

        <v-card-subtitle class="mt-2 text-right">
          <span>price: {{ dish.price }} $</span>
        </v-card-subtitle>

        <v-card-subtitle class="text-right">
          <span>calories: {{ dish.calories }} g</span>
        </v-card-subtitle>
      </v-card>
    </v-flex>
    <v-container>
      <v-row justify="center" align="center">
        <div class="payHeader">
          <span>Full price : {{ getFullPrice }} $</span>
        </div>
      </v-row>
      <v-row justify="center" align="center">
        <v-btn @click="clearOrders()" large color="primary">Purchase</v-btn>
        <v-btn
          icon
          href="http://127.0.0.1:8080/Reference/OrderPurchase.html"
          target="_blank"
        >
          <v-icon>contact_support</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      min: 1,
      max: 5,
    };
  },
  computed: {
    getOrderList() {
      return this.$store.state.order;
    },
    getFullPrice() {
      return this.$store.state.order.reduce(
        (accum, item) => accum + item.price * item.amount,
        0
      );
    },
  },
  methods: {
    removeFromOrder(el) {
      this.$store.commit("removeFromOrder", el);
    },
    clearOrders() {
      this.$store.commit("clearOrders");
      this.$swal("Order is ready", "Wait for a waiter", "success");
    },
  },
};
</script>


<style scoped src="./Order.css"></style>