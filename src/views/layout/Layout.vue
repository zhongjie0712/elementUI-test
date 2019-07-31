<template>
  <div>
    <SiderBar class="sidebar-container" :routes="routes"></SiderBar>
    <div class="main-container">
      <Navbar></Navbar>
      <Main></Main>
    </div>
  </div>
</template>
<script>
import SiderBar from "./components/SiderBar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
export default {
  components: { SiderBar, Navbar, Main },
  data() {
    return {};
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.sidebar-container {
  width: 200px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #545c64;
  &::-webkit-scrollbar {
    display: none;
  }
}
.main-container {
  min-height: 100%;
  margin-left: 200px;
}
</style>