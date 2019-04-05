<template>
  <div>
    <div v-if="stopData.name" class="stop-name" :style="`font-size: ${settingData.nameSize}vw; line-height: ${settingData.nameHeight}vh;`">
      {{ stopData.name }}
    </div>
    <div class="md-layout md-gutter">
      <div v-if="stopData.memo" class="md-layout-item stop-memo" :style="`font-size: ${settingData.memoSize}vw; line-height: ${settingData.memoHeight}vh;`">
        <img
          v-if="stopData.image_path && stopData.image_path.length > 1"
          :src="stopData.image_path"
          :style="`max-width: ${settingData.imageSize}`"
          class="stop-image">
        {{ stopData.memo }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stop',
  props: {
    stopData: Object,
    settingData: Object,
  }
}
</script>

<style scoped>
.stop-name {
  padding: 80px 0 10px 10px;
}
.stop-memo {
  margin-left: 10px;
  padding: 80px 10px;
}
.stop-image {
  padding-left: 10px;
  float: right;
}
</style>
