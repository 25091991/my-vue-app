<template>
   <div> <label> <input type="checkbox" :checked="!anyRemain" @change="allChacked">
          Check All </label></div>
</template>

<script>
export default {
    name: 'todo-checkall',
    props: {
        anyRemain:{
            type: Boolean,
            required: true,
        }
    },
    methods: {
        allChacked(){

        }
    }



}
</script>

<style>

</style>