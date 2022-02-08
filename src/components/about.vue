<template>
    <div  class="positon mt-3"> <h1>About page </h1>
    <b-card bg-variant="secondary" text-variant="white" class="positon"
    title="THIS IS A SINGLE-PAGE APP">
    <br>
     <b-card-text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum. 
     </b-card-text>
    <p> Date: April, 2021 </p>
       <template #footer>
        <small class="text-black">Last updated 3 mins ago</small>
      </template>
     </b-card>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.positon {
margin: auto;
width: 650px;
max-width: 700px;
}
@media only screen and (max-width: 600px) {
.positon {
margin: auto;
width: 350px;
}
}
</style>