<template>
  <div>
    <div class="stop-name">
      {{ stopData.name }}
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item stop-memo">
        {{ stopData.memo }}
      </div>
      <div v-if="stopData.image_path" class="md-layout-item stop-memo">
        <img :src="stopData.image_path">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stop',
  props: {
    stopData: Object
  }
}
</script>

<style scoped>
.stop-name {
  padding: 80px 0 10px 10px;
  font-size: 6vw;
}
.stop-memo {
  padding: 80px 10px;
  font-size: 2vw;
  line-height: 5vh;
}
</style>
