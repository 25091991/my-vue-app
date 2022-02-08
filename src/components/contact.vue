<template>
  <div> <h1 class="text-white mt-3"> Contact page </h1>
  <div class="demenstionOfInput" role="group">
    <label for="input-live"> Name: </label>
    <b-form-input
      id="input-live"
      v-model="name"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim >
    </b-form-input>
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>
    <b-form-text id="input-live-help"></b-form-text>
  </div>
  <div class="demenstionOfInput">
    <label for="input-live"> Last Name: </label>
    <b-form-input
      id="input-live"
      v-model="lastName"
      :state="lastnameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your Last Name"
      trim>
    </b-form-input>
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>
    <b-form-text id="input-live-help"></b-form-text>
  </div>
    <div class="demenstionOfInputText mt-3">
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="8"
      max-rows="20">
    </b-form-textarea>
  </div>
    <div>
    <b-button size="lg" class="buttonStyle mt-3"> Submit </b-button>
    </div>
  </div>

        
</template>

<script>
export default {
  data () {
    return {
      text: '',
      name: '',
      lastName: ''
    }
  },
     computed: {
      nameState() {
        return this.name.length > 2 ? true : false
      },
       lastnameState() {
        return this.lastName.length > 2 ? true : false
      }
     }
}
</script>

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