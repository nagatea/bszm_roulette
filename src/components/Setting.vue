<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Settings</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="サイズ設定">
          <p>name size</p>
          <p>name-hight</p>
          <p>memo-size</p>
          <p>memo-hight</p>
        </md-tab>

        <md-tab md-label="アスペクト設定">
          <p>工事中</p>
        </md-tab>

        <md-tab md-label="データ消去">
          <p>データを初期化して最初から始めます</p>
          <md-button class="md-raised">データ初期化</md-button>
          <p>現在使用しているデータを消去します</p>
          <md-button class="md-raised md-accent" @click="$emit('changeSettingShow'); $emit('deleteData')">データ消去</md-button>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('changeSettingShow')">Close</md-button>
        <md-button class="md-primary" @click="$emit('changeSettingShow')">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
  export default {
    name: 'setting',
    props: {
      showDialog: {
        type: Boolean,
        default: false
      },
      settingData: Object
    }
  }
</script>

<style scoped>

</style>