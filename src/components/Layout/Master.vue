<template>
<div id="app">
  <b-navbar toggleable="lg" type="dark" >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="m-3"> <router-link :to="{name:'Home'}"> Home </router-link> </b-nav-item>
        <b-nav-item class="m-3" > <router-link :to="{name:'about'}"> About  </router-link> </b-nav-item>
        <b-nav-item class="m-3">  <router-link :to="{name:'contact'}"> Contact </router-link> </b-nav-item>
        <b-nav-item class="m-3"> <router-link :to="{name:'login'}"> LogIn </router-link> </b-nav-item>
        <b-nav-item class="m-3"> <router-link :to="{name:'register'}"> Register </router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input placeholder="Search..."></b-form-input>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
   <router-view> </router-view>
</div>
    <!-- <div id="app">
        <ul class="nav">
            <li> <router-link :to="{name:'Home'}"> Home </router-link> </li>
            <li> <router-link :to="{name:'about'}"> About  </router-link> </li>
            <li> <router-link :to="{name:'contact'}"> Contact </router-link> </li>
            <li> <router-link :to="{name:'login'}"> LogIn </router-link> </li>
           <li> <router-link :to="{name:'register'}"> Register </router-link> </li>
        </ul>
<hr>
        <router-view> </router-view>
    </div> -->
</template>
<script>
export default {

}
</script>
<style>
body{
background: linear-gradient(to right, #283048, #859398);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* nav css to be added latter */
ul {
  list-style-type: none;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: rgba(96, 97, 104, 0.358);
  border-radius: 5px;
}
</style>