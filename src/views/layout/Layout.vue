<template>
  <div class="x-flex">
    <div  class="sidebar-container">
      <SiderBar></SiderBar>
    </div>
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
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.sidebar-container {
  min-height: 100vh;
  background-color: #545c64;
}
.main-container{
  flex:1
}
// .sidebar-container {
//   width: 200px;
//   height: 100%;
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 1001;
//   overflow-x: hidden;
//   overflow-y: scroll;
//   background-color: #545c64;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// }
// .main-container {
//   min-height: 100vh;
//   margin-left: 200px;
// }
</style>