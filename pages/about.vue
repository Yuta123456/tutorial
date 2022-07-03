<template>
<div>
    <NuxtLink to="/">
        <CButton>
            toIndex
        </CButton>
    </NuxtLink>
</div>
</template>
<script lang="js">
import { CButton } from '@chakra-ui/vue'
export default {
  name: 'AboutPage',
  components: {
    CButton,
  },
//   methods: {
//     ()
//   }
}
</script>