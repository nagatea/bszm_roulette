<template>
  <div>
    <div class="stop-name">
      {{ stopData.name }}
    </div>
    <div class="stop-memo">
      {{ stopData.memo }}
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
  padding: 50px 0 10px 10px;
  font-size: 30px;
}
.stop-memo {
  padding: 0px 10px;
}
</style>
