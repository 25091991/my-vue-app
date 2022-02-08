<template>
    <div class="item">
      <input type="checkbox" v-model="completed"
      @change="doneEdit">
        <div class="todo-item-left">
        <div v-if="!editing" class="todo-item-lebel" :class="{ completed : completed}" @dblclick="editTodo">
         {{title}}
        </div>
        <input v-else class="todo-item-edit" type="text" v-model="title"
        @blur="doneEdit"
        @keyup.enter="doneEdit" v-focus @keyup.esc="cancelEdit">
        </div>

        <div class="removeItem" @click="removeTodo(index)">  &times;
        </div>

    </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: {
    todo:{
     type: Object,
     required: true,
   },
    index:{
     type: Number,
     required: true,
   },
   checkall:{
     type: Boolean,
     required: true,
   }
  },
  data(){
    return {
      'id': this.todo.id,
      'title': this.todo.title,
      'completed': this.todo.completed,
      'editing': this.todo.editing,
      'beforeEditCache':'',
    }
  },

directives: {
  focus: {
    // directive definition
    inserted: function (el) {
      el.focus()
       }
    }
   },

  watch : {
    checkall(){
      if(this.checkall){
        this.completed = true
      } else{
        this.completed = this.todo.completed
      }
    }
  },

  methods: {
  removeTodo(index){
      this.$emit('removedTodo', index)
    },
  editTodo(){
          this.beforeEditCache = this.title
          this.editing = true
        },
  doneEdit(){
        if(this.title.trim()==''){
                this.title = this.beforeEditCache
            }
            this.editing = false
            this.$emit('finishedEdit', {
              'index': this.index,
              'todo':{
                  'id': this.id,
                  'title': this.title,
                  'completed': this.completed,
                  'editing': this.editing,
              }
            })
        },
  cancelEdit(){
            this.title = this.beforeEditCache
            this.editing = false
        },
  },

}
</script>

<style>
.item{
    color: white;
    margin-bottom: 12px;
    display: flex;
    margin-left: 24%;
    align-items: left;
    justify-content: space-between;
}
 .todo-item-edit{
        font-size: 24px;
        color: grey;
        margin-left: 12px;
        width: 100%;
        padding: 10px;
        border: 1px solid black;
    }

.removeItem{
    margin-right: 31%;
    cursor: pointer;
}
.removeItem:hover{
    color: blue;
}

.todo-item-label{
        padding: 10px;
        border: 1px solid white;
        margin-left: 12px;
    }


</style>