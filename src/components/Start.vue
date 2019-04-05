<template>
  <div class="start-name" :style="`font-size: ${settingData.nameSize}vw; line-height: ${settingData.nameHeight}vh;`">
    {{ shuffleData.name }}
  </div>
</template>

<script>
export default {
  name: 'Start',
  props: {
    startData: Array,
    settingData: Object
  },
  data() {
    return {
      shuffleData: {}
    }
  },
  created () {
    const that = this
    that.start()
  },
  methods: {
    shuffle () {
      // TODO: 全部終了時の処理
      let r = Math.floor(Math.random() * (this.startData.length - 1))
      this.shuffleData = this.startData[r]
    },
    start () {
      const that = this
      setInterval((function () {that.shuffle()}), 100)
    }
  }
}
</script>

<style scoped>
.start-name {
  padding: 80px 0 10px 10px;
}
</style>
