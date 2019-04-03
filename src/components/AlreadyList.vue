<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>既出一覧</md-dialog-title>
        <md-dialog-content>
          <ul>
            <li v-for="item in alreadyData" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'AlreadyList',
    props: {
      bingoData: Array,
      dataIndex: Number,
      state: Number
    },
    data() {
      return {
        showDialog: false
      }
    },
    computed: {
      alreadyData () {
        if (this.state) {
          return this.bingoData.slice(0, this.dataIndex + 1)
        } else {
          return this.bingoData.slice(0, this.dataIndex)
        }
      }
    },
    methods: {
      changeShow () {
        this.showDialog = !this.showDialog
      }
    }
  }
</script>

<style scoped>
  ul li {
    float: left;
    margin: 0 5px;
    width: 30%;
  }
</style>
