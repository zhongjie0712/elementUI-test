<template>
  <div class="login">
    <h1 class="text-center">这是登录/注册页面</h1>

    <div class="login-container">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="login_register p-5 bg-bank">
        <el-tab-pane label="登录" name="login">
          <el-form label-position="right" label-width="70px" :model="loginForm" :rules="rules">
            <el-form-item label="账号：" prop="userName">
              <span class="user pl-3 pr-3">
                <svg-icon icon-class="user" />
              </span>
              <el-input v-model="loginForm.userName" placeholder="请输入帐号" type="text" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <span class="user pl-3 pr-3">
                <svg-icon icon-class="password" />
              </span>
              <span class="eye pl-3 pr-3" @click="showPassword">
                <svg-icon icon-class="eye" />
              </span>
              <el-input
                v-model="loginForm.password"
                :type="passwordType"
                ref="passwordIupt"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form label-position="right" label-width="70px" :model="registerForm" :rules="rules">
            <el-form-item label="账号：" prop="userName">
              <el-input v-model="registerForm.userName" placeholder="请输入帐号"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      passwordType: "password",
      activeName: "login",
      loginForm: {
        userName: "",
        password: "",
        type: ""
      },
      registerForm: {
        userName: "",
        password: "",
        type: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    showPassword() {
      let passwordType = this.$refs.passwordIupt.type;
      console.log(passwordType);
      // this.$emit("",)
      this.passwordType = passwordType == "password" ? "text" : "password";
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  height: 800px;
  background-color: #909399;
  .login_register {
    border-radius: 20px;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    .el-form {
      .el-form-item {
        // width: 500px;
        padding-top: 20px;
      }
    }
  }
}
.eye {
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 40;
  transform: translateY(-50%);
  user-select: none;
}
.user {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 40;
  transform: translateY(-50%);
  user-select: none;
}
</style>