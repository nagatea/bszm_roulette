<template>
  <div>
    <div v-if="stopData.name" class="stop-name">
      {{ stopData.name }}
    </div>
    <div class="md-layout md-gutter">
      <div v-if="stopData.memo" class="md-layout-item stop-memo">
        <img
          v-if="stopData.image_path && stopData.image_path.length > 1"
          :src="stopData.image_path"
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
    stopData: Object
  }
}
</script>

<style scoped>
.stop-name {
  padding: 80px 0 10px 10px;
  font-size: 6vw;
  line-height: 7vh;
}
.stop-memo {
  margin-left: 10px;
  padding: 80px 10px;
  font-size: 2vw;
  line-height: 5vh;
}
.stop-image {
  padding-left: 10px;
  max-width: 30vw;
  float: right;
}
</style>
