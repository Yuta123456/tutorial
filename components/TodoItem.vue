<template>
  <CListItem ariaLabel="a">
    <CIconButton  icon="check-circle"
                  color='green.500'
                  size="lg"
                  ariaLabel="a"
                  @click="onClick"
                  v-if="todo?.done"
    />
    <CIconButton  icon="close"
                  color='green.500'
                  size="lg"
                  ariaLabel="a"
                  @click="onClick"
                  v-else
    />
    <!-- <input type="checkbox" :value="todo.done"> -->
    {{ todo?.name }}
  </CListItem>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { defineComponent } from 'vue'
import { ITodoItem } from '../types/index'
import {
  CListItem,
  CIconButton,
  CIcon
} from '@chakra-ui/vue'
const TodoItem = defineComponent({
  name: 'TodoItem',
  components: {
    CListItem, 
    CIconButton,
    CIcon
  },
  props: {
    todo: {
      type: Object as PropType<ITodoItem>
    }
  },
  computed: {
    done: {
      get(): boolean | undefined {
        return this.todo?.done;
      },
      set(d: boolean) { 
        console.log("set fire with ", d);
        this.$emit("changeTodo", {
          id: this.todo?.id,
          done: d,
        });
      }
    }
  },
  methods: {
    onClick() {
      this.done = !this.todo?.done;
      console.log(this.done);
    }
  },
  created() {
    console.log(this.todo);
  }
  
})
export default TodoItem
</script>
