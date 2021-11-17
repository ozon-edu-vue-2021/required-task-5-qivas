<template>
  <div id="app">
    <shop-header />
    <div class="page-content">
      <router-view />
    </div>
    <notifications position="bottom left" />
  </div>
</template>

<script>
import ShopHeader from "@/components/ShopHeader";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    ShopHeader,
  },
  methods: {
    ...mapActions(["init"]),
  },
  created() {
    this.init();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100%;
}

* {
  box-sizing: border-box;
}

.page-content {
  display: block;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px 32px;
  background: #ffffff;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
}
</style>
