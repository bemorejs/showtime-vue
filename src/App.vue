<template>
  <div id="app">
    <h1>BeMoreJs ShowTime - Vue.JS</h1>
    <div class="card-deck">
      <framework v-for="framework in list"
                 :key="framework.name"
                 :imageUrl="framework.image"
                 :name="framework.name"
                 :version="framework.version"
                 :stars="framework.stars"
                 @update="updateVersion"
                 @stars="updateStars">
      </framework>
    </div>
  </div>
</template>

<script>
import Framework from './components/Framework';
import list from './data/list.json';

export default {
  name: 'App',
  data: () => ({
    list
  }),
  components: {
    Framework
  },
  methods: {
    updateVersion(name) {
      const item = this.list.find(f => f.name === name);
      item.version += 1;
    },
    updateStars(name) {
      const item = this.list.find(f => f.name === name);
      item.stars += 1;
    }
  }
};
</script>