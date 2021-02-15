<template>
  <div class="home">
    <Finder/>
  </div>
</template>

<script>
// @ is an alias to /src
import Finder from '@/components/Finder.vue'

export default {
  name: 'Home',
  components: {
    Finder
  }
}
</script>

<style scoped lang="less">
.home {
  margin-top: 40px;
}
</style>
