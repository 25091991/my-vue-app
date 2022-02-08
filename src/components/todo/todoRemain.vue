<template>
     <div> {{remain}}  items left</div>
</template>

<script>
export default {
    name: 'todo-remain',
    props: {
        remain: {
            type: Number,
            required: true
        }
    }

}
</script>

<style>

</style>