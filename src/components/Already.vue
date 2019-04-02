<template>
  <div>
    <ul>
      <li v-for="item in alreadyData.reverse()" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Start',
  props: {
    alreadyData: Array
  }
}
</script>

<style scoped>
</style>
