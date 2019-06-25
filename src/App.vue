<template>
  <div id="app"
       class="app">
    <h1 class="app__headline">Prague - Vue.JS!</h1>

    <div class="app__input">
      <h2 class="app__input__sub-headline">{{ text }}</h2>
      <input type="text"
             v-model="text"
             @keydown.enter="makeAlert">
    </div>
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

<style lang="scss" scoped>
.app {
  padding: 0 20px;

  &__headline {
    margin-top: 20px;
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  }

  &__input {
    &__sub-headline {
      margin: 10px 25px;
      width: 100%;
      text-align: center;
    }

    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
    padding: 20px 0;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  input {
    padding: 8px;
  }
}
</style>
