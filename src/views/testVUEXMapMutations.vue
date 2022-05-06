<template>
  <div>
    <button @click="increment(10)">increment</button>
    {{ getNumber }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  methods: {
    // result() {
    // return store.commit('increment');
    // },
    ...mapMutations(["increment"]),
  },
  computed: {
    ...mapGetters(["getNumber"]),
  },
};
</script>