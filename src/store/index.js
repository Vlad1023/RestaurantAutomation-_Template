import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breakfast: [
        {
            "title" : "Omelette",
            "description" : "With a choice of cheese, mushroom or tomato",
            "components": "egg, beaf",
            "calories" : 45,
            "price" : 30,
            "amount": 1 
        },
        {
            "title" : "Food2",
            "description" : "Very tasty food",
            "components": "egg, beaf",
            "calories" : 112,
            "price" : 40,
            "amount": 1  
        },
        {
            "title" : "Food4",
            "description" : "Very tasty food",
            "components": "egg, beaf",
            "calories" : 78,
            "price" : 24,
            "amount": 1 
        },
        {
            "title" : "Food5",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 12,
            "price" : 54,
            "amount": 1 
        },
        {
            "title" : "Food6",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 12,
            "price" : 245,
            "amount": 1 
        },
        {
            "title" : "Food7",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 12,
            "price" : 45,
            "amount": 1 
        },
        {
            "title" : "Food8",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 125,
            "price" : 33,
            "amount": 1 
        },
        {
            "title" : "Food9",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 567,
            "price" : 1256,
            "amount": 1 
        },
        {
            "title" : "Food10",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 3567,
            "price" : 6789,
            "amount": 1 
        }
    ],
    dinner: [
        {
            "title" : "Omelette for dinner",
            "description" : "With a choice of cheese, mushroom or tomato",
            "components": "egg, beaf",
            "calories" : 45,
            "price" : 30,
            "amount": 1  
        },
        {
            "title" : "Food2 for dinner",
            "description" : "Very tasty food",
            "components": "egg, beaf",
            "calories" : 112,
            "price" : 40,
            "amount": 1  
        },
        {
            "title" : "Food4 for dinner",
            "description" : "Very tasty food",
            "components": "egg, beaf",
            "calories" : 78,
            "price" : 24,
            "amount": 1 
        },
        {
            "title" : "Food5 for dinner",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 12,
            "price" : 54,
            "amount": 1 
        },
        {
            "title" : "Food6 for dinner ",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 12,
            "price" : 245,
            "amount": 1 
        },
        {
            "title" : "Food7 for dinner",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 12,
            "price" : 45,
            "amount": 1 
        },
        {
            "title" : "Food8 for dinner",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 125,
            "price" : 33,
            "amount": 1 
        },
        {
            "title" : "Food9 for dinner",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 567,
            "price" : 1256,
            "amount": 1 
        },
        {
            "title" : "Food10 for dinner",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 3567,
            "price" : 6789,
            "amount": 1 
        }
    ],
    supper: [
        {
            "title" : "Omelette for supper",
            "description" : "With a choice of cheese, mushroom or tomato",
            "components": "egg, beaf",
            "calories" : 45,
            "price" : 30,
            "amount": 1 
            
        },
        {
            "title" : "Food2 for supper",
            "description" : "Very tasty food",
            "components": "egg, beaf",
            "calories" : 112,
            "price" : 40,
            "amount": 1 
        },
        {
            "title" : "Food4 for supper",
            "description" : "Very tasty food",
            "components": "egg, beaf",
            "calories" : 78,
            "price" : 24,
            "amount": 1 
        },
        {
            "title" : "Food5 for supper",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 12,
            "price" : 54,
            "amount": 1 
        },
        {
            "title" : "Food6 for supper",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 12,
            "price" : 245,
            "amount": 1 
        },
        {
            "title" : "Food7 for supper",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 12,
            "price" : 45,
            "amount": 1 
        },
        {
            "title" : "Food8 for supper",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 125,
            "price" : 33,
            "amount": 1 
        },
        {
            "title" : "Food9 for supper",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 567,
            "price" : 1256,
            "amount": 1 
        },
        {
            "title" : "Food10 for supper",
            "description" : "Delicious food for real connoisseurs",
            "components": "egg, beaf",
            "calories" : 3567,
            "price" : 6789,
            "amount": 1 
        }
    ],
    order: [],
    isAdminLogged: false
  },
  mutations: {
    addToOrder (state, el) {
      state.order.push(el);
    },
    removeFromOrder(state, el){
      state.order.splice(
          state.order.indexOf(
              state.order.find(
                  x => x.title === el.title)
                  ));  
    },
    clearOrders(state){
        state.order = [];
    },
    disableLogged(state){
        state.isAdminLogged = false;
    },
    enableLogged(state){
        state.isAdminLogged = true;
    }
  },
  actions: {

  }
});
