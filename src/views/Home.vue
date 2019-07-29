<template>
  <div class="svg-demo">
    <h1>这是首页</h1>
    <ul>
      <li v-for="(name, index) in svgName" :key="index">
        <svg-icon :icon-class="name"></svg-icon>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "svgDemo",
  data() {
    return {
      svgName: ["user", "password", "email",'eye','icon_loading']
    };
  }
};
</script>

<style lang="scss">
.svg-demo {
  text-align: center;
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2;
    color:red;
  }
}
</style>