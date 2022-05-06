<template>
  <div class="home">
    <h1>All Destinations</h1>

    <h1>
      {{ number }}
    </h1>
    <button @click="increment"></button>

    <div class="destinations">
      <router-link :to="{ path: '/testVUEXMapGetters' }" tag="button"
        >testVUEXMapGetters</router-link
      >
      <router-link :to="{ path: '/testVUEXMapMutations' }" tag="button"
        >testVUEXMapMutations</router-link
      >
      <router-link :to="{ path: 'testVUEXMapActions' }" tag="button"
        >testVUEXMapActions</router-link
      >
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
            }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import data from "@/data";

export default {
  name: "home",
  components: {},
  data() {
    return {
      destinations: data.destinations,
    };
  },
  computed: {
    number() {
      return this.$store.state.number;
    },
  },
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
