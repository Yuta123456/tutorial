<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <ol>
        <li v-for="todo in todoList">
          <input type="checkbox" v-bind:value="todo.done">
          <span>{{todo.name}}</span>
        </li>
      </ol>
    </CBox>
  </div>
</template>

<script lang="ts">
import {
  CBox
} from '@chakra-ui/vue'

export default {
  name: 'IndexPage',
  components: {
    CBox,
  },
  data () {
    const todoList: todoItem[] = [
      {id: 1, name: "study", done: false}, 
      {id: 2, name: "sleep", done: false}, 
      {id: 3, name: "breakfast", done: false}, 
    ];
    return {
      todoList,
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>
