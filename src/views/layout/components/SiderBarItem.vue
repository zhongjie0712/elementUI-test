<template>
  <div class="asideBarItem-container">
    <!-- 如果hasOwnProperty监测有children 就循环递归展示-->
    <el-submenu :index="routes.path" v-if="routes.hasOwnProperty('children')">
      <span slot="title">{{routes.name}}</span>

      <!--递归子孙导航-->
      <asideBarItem v-for="child in routes.children" :key="child.path" :routes="child"></asideBarItem>
    </el-submenu>
    <!-- 如果没有 就展示一级导航 -->
    <el-menu-item v-else :key="routes.path" :index="routes.path">
      <i class="el-icon-location"></i>
      {{routes.name}}
    </el-menu-item>
  </div>
</template>
 
<script>
//hasOwnProperty可以用来检测一个对象是否含有特定的自身属性
export default {
  name: "asideBarItem",
  props: {
    routes: {
      type: Object
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    // router () {
    //   return this.$router.options.routes
    // }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
 
<style lang="scss" scoped>
// .asideBarItem-container {
// }
</style>