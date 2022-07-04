<template>
  <CBox>
    HEY
  </CBox>
</template>

<script>
import { ITodoItem } from '../types/index'
export default {
  name: 'IndexPage',
  components: {
    CBox
  },
  props: {
    todo: ITodoItem
  },
  computed: {
  },
  methods: {
  }
}
</script>
