<template>
  <div>
    <el-row>
      <el-menu
        router
        :default-active="$route.path"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- 左侧导航栏抽取循环部分 将路由列表传给子组件-->
        <asideBarItem v-for="item in routers" :routes="item" :key="item.path"></asideBarItem>
      </el-menu>
    </el-row>
  </div>
</template>
<script>
import asideBarItem from "./SiderBarItem";
export default {
  name: "asideBar",
  components: {
    asideBarItem
  },
  data() {
    return {};
  },
  computed: {
    routers() {
      console.log(this.$router.options.routes)
      //this.$router.options获取路由列表
      return this.$router.options.routes;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>