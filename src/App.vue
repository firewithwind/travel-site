<template>
  <div id="app">
    <el-header>
        <ul>
            <div id="logo-wrapper">
                <img id="logo" src="./assets/logo.png" height="40">
            </div>
            <router-link v-for="nav, index in navList" :key="index" class="nav-item" :to="nav.route">{{nav.name}}</router-link>
            <div class="login">
                <span>登入</span>
                <span class="register">注册</span>
            </div>
        </ul>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
        navList: [
            {
                route: 'Index',
                name: '首页'
            },
            {
                route: 'destination',
                name: '目的地'
            },
            {
                route: 'raiders',
                name: '旅游攻略'
            },
            {
                route: 'store',
                name: '自由行商城'
            },
            {
                route: 'hotel',
                name: '酒店'
            },
            {
                route: 'community',
                name: '社区'
            },
            {
                route: 'app',
                name: 'APP'
            }
        ],
        activeIndex: 0
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
.el-header {
    box-shadow: 0 0 5px #D7D8D9;
}
.el-header ul:after{
    content: ' ';
    display: block;
    clear: both;
    text-align: center;
}
.nav-item{
    text-decoration: none;
    float: left;
    list-style-type: none;
    height: 60px;
    line-height: 60px;
    padding: 0 15px;
    font-weight: bold;
    color: #2c3e50;
}
.nav-item:hover {
    color: #409EFF;
    cursor: pointer;
    border-bottom: 2px solid #409EFF;
}
.router-link-exact-active, .router-link-active {
    background: #409EFF;
    color: #ffffff;
    border: none;
}
.router-link-active:hover{
    background: #409EFF;
    color: #ffffff;
    border: none;
}
#logo-wrapper {
    display: inline-block;
    float: left;
    height: 60px;
    line-height: 60px;
    padding: 0 15px;
    margin-left: 300px;
    margin-right: 20px;
}
#logo {
    margin-top: 10px;
}
.register:before {
    content: ' ';
    display: inline-block;
    width: 1px;
    height: 10px;
    border-left: 1px solid #D7D8D9;
    margin-left: 5px;
    margin-right: 10px;
}
.login {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    color: #409EFF;
}
.login span:hover {
    text-decoration: underline;
    cursor: pointer;
}
</style>
