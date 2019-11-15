<template>
  <div>
    <h1>这是demo首页</h1>
    <transition name="fade-transform" mode="out-in">
      <router-view ></router-view>
    </transition>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
</style>