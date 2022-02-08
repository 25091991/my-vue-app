<template>
<div class="login-form mt-3">
  <br>
  <h2> Login page </h2>
  <div class="mt-3">
    <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
      <span class="mr-auto"> User </span>
  </div>
  <br>
  <div class="demenstionOfInput" role="group">
    <label for="input-live"> Enter Username </label>
    <b-form-input
      id="input-live"
      v-model="username"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter Username"
      trim >
    </b-form-input>
  </div>
  <div class="demenstionOfInput mt-4">
    <label for="input-live"> Enter Password </label>
    <b-form-input
      id="input-live"
      v-model="password"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter Password"
      trim>
    </b-form-input>
  </div>
  <hr> 
    <div>
    <b-button id="buttonStyleLogin" block class=" mt-3 mb-3"> Login </b-button>
    </div>
     <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
     <p class="marginApplied"> Remember me </p>
    </b-form-checkbox>
  </div>
  </div>     
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      username: '',
      password: '',
      status: true
      }
    },
}
</script>
<style>
#buttonStyleLogin {
  background:  #2a3a4b;
  width: 150px;
}
.marginApplied {
  margin-left: 10px;
}
</style>