<template>
  <div id="app">
    <h1>BeMoreJs ShowTime - Vue.JS!</h1>
    <h2>{{ text }}</h2>
    <input type="text"
           v-model="text"
           @keydown.enter="makeAlert">
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
import Framework from "./components/Framework";
import list from "./data/list.json";

export default {
  name: "App",
  data: () => ({
    list,
    text: ""
  }),
  components: {
    Framework
  },
  watch: {
    text(value) {
      console.log(`Text chnaged to ${value}`);
    }
  },
  mounted() {
    this.text = "I am text";
  },
  methods: {
    makeAlert() {
      alert("You just pressed enter");
    },
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