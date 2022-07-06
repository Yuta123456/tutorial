<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CList as="ol">
        <TodoItem
          v-for="todo in todoList" 
          :key="todo.id"
          v-bind:todo="todo"
          @changeTodo="changeTodo" />
      </CList>
    </CBox>
  </div>
</template>

<script lang="ts">
import {
  CBox,
  CList
} from '@chakra-ui/vue'
import { ITodoItem } from '~/types'
import { defineComponent } from 'vue'
import TodoItem from '../components/TodoItem.vue'
export default defineComponent({
  name: 'IndexPage',
  components: {
    CBox,
    CList,
    TodoItem
  },
  data () {
    return {
      todoList: [
        { id: 1, name: 'study', done: false },
        { id: 2, name: 'sleep', done: false },
        { id: 3, name: 'breakfast', done: false }
      ]as ITodoItem[]
    }
  },
  computed: {
  },
  methods: {
    changeTodo(doneInfo: any) {
      console.log("changeTodo fire with ", doneInfo);
      this.todoList.filter((todo: ITodoItem) => todo.id === doneInfo.id)[0].done = doneInfo.done; 
    }
  }
})
</script>
