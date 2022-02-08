<template>
  <div> <h1 class="text-white mt-3"> Register page </h1>
  <p class="colortext">Please fill in this form to create an account.</p>
  <div class="demenstionOfInput" role="group">
    <label for="input-live"> Enter Email </label>
    <b-form-input
      id="input-live"
      v-model="email"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter Email"
      trim >
    </b-form-input>
  </div>
  <div class="demenstionOfInput mt-4">
    <label for="input-live"> Enter Password </label>
    <b-form-input
      id="input-live"
      v-model="password"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter Password "
      trim>
    </b-form-input>
  </div>
  <hr> 
   <div class="demenstionOfInput">
    <label for="input-live"> Repeat Password </label>
    <b-form-input
      id="input-live"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter Password "
      trim>
    </b-form-input>
  </div>
    <div>
      <p class="colortext mt-3">By creating an account you agree to our
        <br>
      <a href="#">Terms and Privacy</a></p>
    <b-button size="lg" class="buttonStyle mt-3"> Register </b-button>
    </div>
  </div>
        
</template>

<style>
.demenstionOfInput{
  width: 250px;
  max-width: 500px;
  margin: auto;
}
.demenstionOfInputText {
  width: 350px;
  max-width: 500px;
  margin: auto;
}

.buttonStyle {
  background-color: #2a3a4b;
}
</style>

<script>
export default {
  name: 'register',
  data(){
    return {
      email: '',
      password: ''
      }
    },
}
</script>
