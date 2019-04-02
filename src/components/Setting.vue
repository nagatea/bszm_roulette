<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Settings</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="サイズ設定">
          <p>工事中</p>
          <p>name size</p>
          <p>name-hight</p>
          <p>memo-size</p>
          <p>memo-hight</p>
        </md-tab>

        <md-tab md-label="アスペクト比設定">
          <p>工事中</p>
        </md-tab>

        <md-tab md-label="データ消去">
          <p>データを初期化して最初から始めます</p>
          <md-button class="md-raised" @click="init()">データ初期化</md-button>
          <p>現在使用しているデータを消去します</p>
          <md-button class="md-raised md-accent" @click="changeShow(); $emit('deleteData')">データ消去</md-button>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="changeShow()">Close</md-button>
        <md-button class="md-primary" @click="changeShow()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
  export default {
    name: 'setting',
    props: {
      settingData: Object
    },
    data() {
      return {
        showDialog: false
      }
    },
    methods: {
      changeShow () {
        this.showDialog = !this.showDialog
      },
      init () {
        const locationTmp = location.origin
        location.href = locationTmp + "?n=1"
      }
    }
  }
</script>

<style scoped>

</style>