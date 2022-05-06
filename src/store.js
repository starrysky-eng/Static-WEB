import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 2,
  },
  getters: {
    counter: state => state.number++,
    multiply: state => state.number * 3,
    getNumber: state => state.number
  },
  mutations: {
    increment(state, str) { // 第一引数にstateをとり、実際の変更を記述する
      state.number += str;
    },
    decrease(state,str){
      state.number -=str;
    }
  },
  actions:{
     async increment({commit},str){
      let result = await axios.get("");
      // commit("increment",str);
    },
    decrease({commit},str){
      commit("decrease",str);
    }
  }
});
