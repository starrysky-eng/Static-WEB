<template>
  <div>
    <button @click="increment(10)">increment</button>
    <button @click="decrease(10)">decrease</button>
    
    {{ getNumber }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  methods: {
    // result() {
    // return store.commit('increment');
    // },
    ...mapActions(["increment","decrease"]),
  },
  computed: {
    ...mapGetters(["getNumber"]),
  },
};
</script>