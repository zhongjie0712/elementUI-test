<template>
  <div style="border:2px solid #304156;padding:20px">
    <!-- <el-button @click.native.prevent="siderBarToggle">切换侧导航</el-button>  -->
    <h1>顶部导航</h1>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.name}}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // levelList: this.$router
    };
  },
  computed: {
    levelList() {
      return this.$route.matched;
    }
  },
  methods: {
    siderBarToggle(){
      this.$store.commit('isCollapse')
    }
  },
};
</script>
<style lang="scss" scoped>
</style>