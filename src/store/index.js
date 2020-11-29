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
            "calories" : 100,
            "price" : 30 
        },
        {
            "title" : "Food1",
            "description" : "Very tasty food",
            "components": "egg, beaf",
            "calories" : 100,
            "price" : 40 
        },
        {
            "title" : "Food1",
            "description" : "Very tasty food",
            "components": "egg, beaf",
            "calories" : 100,
            "price" : 50
        },
        {
            "title" : "Food1",
            "description" : "Very tasty food",
            "components": "egg, beaf",
            "calories" : 100,
            "price" : 60
        }
    ]
  },
  mutations: {

  },
  actions: {

  }
});
