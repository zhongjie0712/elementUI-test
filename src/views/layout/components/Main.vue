<template>
  <div class="main">
    <h1>这是内容主体Main.vue</h1>
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.main {
  min-height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>