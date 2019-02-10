<template>
  <div class="md-layout">
    <div class="md-layout-item md-medium-size-75 md-small-size-65 md-xsmall-size-100">
      <div v-if="state === 0">
        <Start />
      </div>
      <div v-if="state === 1">
        <Stop :stopData="bingoData[dataIndex]" />
      </div>
    </div>
    <div class="md-layout-item md-medium-size-25 md-small-size-35 md-xsmall-size-100">
      <Already :alreadyData="bingoData.slice(0, dataIndex)" />
    </div>
    {{ dataIndex }}
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
    dataIndex: Number,
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
.bingo {
}
</style>
