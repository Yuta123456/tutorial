<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <TodoItem 
      v-for="todo in todoList" 
      :key="todo.id" 
      v-bind:todo="todo" />
    </CBox>
  </div>
</template>

<script lang="ts">
import {
  CBox
} from '@chakra-ui/vue'
import { ITodoItem } from '~/types'
import TodoItem from '../components/TodoItem.vue'
export default {
  name: 'IndexPage',
  components: {
    CBox,
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
  }
}
</script>
