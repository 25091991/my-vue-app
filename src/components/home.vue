<template>
    <div>
        <h1 class="mt-3"> TO DO LIST </h1>
    <b-form-input type="text" class="demenstionOfInput mt-3" placeholder="What needs to be done"
        v-model="newtodo" @keyup.enter="addTodo"> </b-form-input>

<transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <todo-item class=" mt-3 demenstionOfInputItems p-3" v-for="(todo, index) in todosFiltered" :key="todo.id" :todo="todo" :index="index" :checkall='!anyRemain'
      @removedTodo="removeTodo" @finishedEdit="finishedEdit">
      </todo-item>
</transition-group>

        <div class="extraContainer mt-2">
          <div> <label> <input type="checkbox" :checked="!anyRemain" @change="checkAllTodos">
          All</label></div>
          <todo-remain :remain="remain"> </todo-remain>
        </div>

        <div class="extraContainer">
            <div>
                <b-button class="m-3" :class= "{ active: filter == 'all' }"
               @click="filter = 'all'">All </b-button>
                 <b-button class="" :class= "{ active: filter == 'active' }"
                 @click="filter = 'active'">Active</b-button>
                  <b-button class="m-3" :class= "{ active: filter == 'completed' }"
                 @click="filter = 'completed'">Completed </b-button>
            </div>

            <div>
            <transition name="fade">
                 <b-button v-if="ShowClearCompletedButton" @click="clearCompleted"> Clear Completed </b-button>
            </transition>
            </div>
        </div>
    </div>
</template>

<script>
import todoItem from './todo/todoItem'
//import todoCheckall from './todo/todoCheckall'
import todoRemain from './todo/todoRemain'
//import todoFilter from './todo/todoFilter'
//import todoClear from './todo/todoClear'

export default {
    name: 'home-app',
    components: {
    todoItem,
   // todoFilter,
   // todoClear,
    //todoCheckall,
    todoRemain,
    },
    data(){
        return {
            newtodo: '',
            ForNewID: 3,
            beforeEditCache: '',
            filter: 'all',
            todos:[
            {
              'id': 1,
              'title': 'My task number 1',
              'completed': false,
              'editing': false
            },
            {
              'id': 2,
              'title': 'My task number 2',
              'completed': false,
              'editing': false
            }
            ]
        }
    },
    computed: {
        remain(){
            return this.todos.filter(todo => !todo.completed).length
        },
        anyRemain(){
            return this.remain != 0
        },
        todosFiltered() {
            if(this.filter == 'all'){
                return this.todos
            } else if(this.filter == 'active'){
              return this.todos.filter( todo => !todo.completed)
            } else if(this.filter == 'completed'){
              return this.todos.filter(todo => todo.completed)
            }
             return this.todos
        },
        ShowClearCompletedButton(){
            return this.todos.filter((todo) => todo.completed).length > 0
        }
    },

    methods: {
        addTodo(){
            if(this.newtodo.trim().length==0){
                return
            }
            this.todos.push({
                id: this.ForNewID,
                title: this.newtodo,
                completed: false,
                editing: false,
            })

            this.newtodo = ''
            this.ForNewID++ // this code is used to adding from the input to empty field
        },
        removeTodo(index) {
         this.todos.splice(index, 1)
        },
        checkAllTodos(){
            return this.todos.forEach((todo) => todo.completed = event.target.checked)
        },
        clearCompleted(){
           this.todos = this.todos.filter(todo => !todo.completed)
        },
        finishedEdit(data){
            this.todos.splice(data.index, 1, data.todo)

        },
    }

}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";

.demenstionOfInput{
  width: 550px;
  max-width: 500px;
  margin: auto;
}
.demenstionOfInputItems {
  width: 500px;
  max-width: 500px;
  margin: auto; 
}
/* 
.todo-input {
    width:50%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
} */
.extraContainer {
     display: flex;
     width:50%;
     margin-left: 24%;
     align-items: center;
     justify-content: space-between;
     font-size: 16px;
     border-top: 1px solid lightgrey;
     padding: 10px 18px;
     margin-bottom: 14px;
}

.completed {
    text-decoration: line-through;
    color: black;
}
button {
    font-size: 16px;
    margin-left: 5px;
    border-radius: 4px;
    box-shadow: 10px 5px 5px rgba(255, 255, 255, 0.098);
}

/* CSS transition */
.fade-enter-active, .fade-leave-active {
     transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
     opacity: 0;
 }

</style>