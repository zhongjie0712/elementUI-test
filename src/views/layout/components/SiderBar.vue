<template>
  <div>
    <el-row>
      <el-menu
        router
        unique-opened
        :default-active="$route.path"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
      >
        <!-- 左侧导航栏抽取循环部分 将路由列表传给子组件-->
        <asideBarItem v-for="item in routers" :routes="item" :key="item.path" class="overflow"></asideBarItem>
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
    return {
    };
  },
  computed: {
    routers() {
      // return this.$router.options.routes获取路由列表;
      //去除404和login路由，选择layout路由。
      return this.$router.options.routes[0].children
    },
    isCollapse(){
      return this.$store.state.isCollapse
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
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
  }
  .overflow{
    overflow-x: hidden;
  }
</style>