<template>
  <div>
    <div v-if="state === 0">
      <Start />
    </div>
    <div v-if="state === 1">
      <Stop />
    </div>
    <Already />

    <ul id="example-1">
      <li v-for="item in bingoData" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import Start from '@/components/Start'
import Stop from '@/components/Stop'
import Already from '@/components/Already'

export default {
  name: 'Bingo',
  props: {
    bingoData: Array,
    state: Number
  },
  components: {
    Start,
    Stop,
    Already
  }
}
</script>

<style scoped>
</style>
