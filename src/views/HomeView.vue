<template>
  <div class="home">
    <!-- <calculator /> -->
    <tictac />
  </div>
</template>

<script>
// import calculator from '@/components/calculator.vue'
import tictac from '@/components/tictactoe.vue'
export default {
  name: 'HomeView',
  components: {
    // calculator,
    tictac
  }
}
</script>
