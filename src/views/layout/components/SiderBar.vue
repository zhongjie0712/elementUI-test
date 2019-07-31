<template>
  <div>
    <el-row>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div v-for="(item, index) in routes" :key="index">
          <div v-if="item.children  && item.children.length==1">
            <!-- <p>{{index}}</p> -->
            <router-link tag="div" :to="item.path" @click.native="jump(item)">
              <el-menu-item :index="`${index}`">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.children[0].meta.title}}</span>
              </el-menu-item>
            </router-link>
          </div>
          <div v-else-if="item.children  && item.children.length>1">
            <el-submenu :index="`${index}`">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.meta.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(tem, i) in item.children"
                  :key="i"
                  :index="`${index}-${i}`"
                >{{tem.meta.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </div>
      </el-menu>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ["routes"],
  data() {
    return {};
  },
  methods: {
    jump(route) {
      //获取当前路由的子路径集合
      var routeSon = route.children;
      //判断子路由长度， len=1的时为一级目录，len>1有二级目录
      if ((routeSon.length = 1)) {
        // 判断路由名称是否为首页
        if (routeSon[0].meta.title != "首页") {
          let targetRoutes = [];
          targetRoutes.push({
            title: routeSon[0].meta.title,  //子路由标题
            name: routeSon[0].name   //子路由名
          });
          this.$store.commit("targetRoutes", targetRoutes);
        }else{
          this.$store.commit("targetRoutes", []);
        }
      } else if (route.children.length > 1) {
        // let targetRoutes = [route.children.title];
        // route.children.forEach(item => targetRoutes.push(item.meta.title));
      }
    },
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