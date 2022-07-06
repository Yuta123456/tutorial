<template>
  <div>
    <input type="checkbox" :value="todo.done">
    {{ todo.name }}
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { ITodoItem } from '../types/index'
const TodoItem = {
  name: 'TodoItem',
  components: {
  },
  props: {
    todo: {
      type: Object as PropType<ITodoItem>
    }
  },
  computed: {
  },
  methods: {
  },
  
}
export default TodoItem
</script>
