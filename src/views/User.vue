<template>
  <div>
    <h1>Welcome {{ user }}</h1>
    <p>
      <router-link
        :to="{
          name: 'invoices'
        }"
        >Invoices</router-link
      >
    </p>
    <button @click="logOut" class="btn">Log out</button>
  </div>
</template>
<script>
import data from "@/data";
export default {
  data() {
    return {
      user: data.user
    };
  },
  methods: {
    logOut() {
      data.user = null;
      this.$router.push("/");
    }
  }
};
</script>
