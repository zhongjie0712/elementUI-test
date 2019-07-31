<template>
  <div>
    <h1>顶部导航</h1>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item >首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in routesInfo" :key="index">{{item.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    routesInfo: function() {
      return this.$store.getters.targetRoutes;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>