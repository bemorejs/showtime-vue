<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/account">Account</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapGetters(["completeList"]),
    ...mapState({
      todoList: state => state.todos
    })
  },
  methods: {
    ...mapMutations(["addItem", "removeItem"])
  }
};
</script>

