<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Settings</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="テーマ設定">
          <md-field>
            <label>テーマ</label>
            <md-textarea v-model="settingData.thema" md-autogrow></md-textarea>
          </md-field>
        </md-tab>

        <md-tab md-label="サイズ設定">
          <div class="setting-field">
            <md-field>
              <label>Name Size</label>
              <md-input v-model="settingData.nameSize" type="number"></md-input>
            </md-field>
            <md-field>
              <label>Name Height</label>
              <md-input v-model="settingData.nameHeight" type="number"></md-input>
            </md-field>
            <md-field>
              <label>Memo Size</label>
              <md-input v-model="settingData.memoSize" type="number"></md-input>
            </md-field>
            <md-field>
              <label>Memo Height</label>
              <md-input v-model="settingData.memoHeight" type="number"></md-input>
            </md-field>
            <md-field>
              <label>Image Width</label>
              <md-input v-model="settingData.imageWidth" type="number"></md-input>
            </md-field>
          </div>
        </md-tab>

        <md-tab md-label="データ消去">
          <p>データを初期化して最初から始めます</p>
          <md-button class="md-raised" @click="changeShow(); $emit('initializeData')">データ初期化</md-button>
          <p>現在使用しているデータを消去します</p>
          <md-button class="md-raised md-accent" @click="changeShow(); $emit('deleteData')">データ消去</md-button>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="changeShow()">Close</md-button>
        <md-button class="md-raised md-primary" @click="seveSetting()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
  export default {
    name: 'setting',
    data() {
      return {
        showDialog: false,
        settingData: {}
      }
    },
    created() {
      this.settingData = this.$localStorage.get('settingData')
    },
    methods: {
      changeShow () {
        this.showDialog = !this.showDialog
      },
      seveSetting () {
        this.changeShow()
        this.checkSettingData()
        this.$emit('changeSettingData', this.settingData)
      },
      checkSettingData () {
        this.settingData.nameSize = Number(this.settingData.nameSize)
        this.settingData.nameHeight = Number(this.settingData.nameHeight)
        this.settingData.memoSize = Number(this.settingData.memoSize)
        this.settingData.memoHeight = Number(this.settingData.memoHeight)
        this.settingData.imageWidth = Number(this.settingData.imageWidth)
      }
    }
  }
</script>

<style scoped>
.setting-field {
  width: 30%;
}
</style>