<template>
  <div id="app">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">bszm-roulette</h3>

      <md-button v-if="!importData.length" class="md-raised" disabled>Start</md-button>
      <md-button v-else class="md-raised md-primary" @click="changeState()">{{ buttonState }}</md-button>
      
      <md-menu md-size="auto">
        <md-button class="md-icon-button">
          <md-icon md-menu-trigger>more_vert</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item @click="deleteData()">データ消去</md-menu-item>
          <md-menu-item @click="changeSettingShow()">設定</md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-toolbar>

    <div v-if="!importData.length">
      <md-empty-state
        md-icon="library_books"
        md-label="Import your first project"
        md-description="Importing project, you'll be able to start bingo and have fun bszm with people that major in Information Science and Technology.">
        <md-button class="md-raised md-primary">
          <label for="import">データのインポート</label>
        </md-button>
        <input type="file" accept=".csv" id="import" name="import" ref="importFile" @change="changeData" />
      </md-empty-state>
    </div>
    <div v-else>
      <Bingo :bingoData="importData" :dataIndex="dataIndex" :state="state" />
    </div>
    <Setting :showDialog="showDialog" :settingData="settingData" @changeSettingShow="changeSettingShow()"/>
  </div>
</template>

<script>
import Bingo from '@/components/Bingo'
import Setting from '@/components/Setting'

export default {
  name: 'app',
  components: {
    Bingo,
    Setting
  },
  localStorage: {
    importData: {
      type: Array
    },
    dataIndex: {
      type: Number
    }
  },
  data() {
    return {
      importData: [],
      dataIndex: 0,
      state: 0,
      buttonState: 'stop',
      showDialog: false,
      settingData: {}
    }
  },
  created () {
    this.importData = this.$localStorage.get('importData')
    this.dataIndex = this.$localStorage.get('dataIndex')
    if (location.search) {
      const query = location.search.substring(1).split('=')[1]
      this.dataIndex = query - 1
      this.$localStorage.set('dataIndex', query - 1)
    }
  },
  methods: {
    dataToCSV (data) {
      let tmp = data.split("\n").map(item => item.split(","))
      let res = []
      for (let i = 1; i < tmp.length; i++) { // 先頭行は捨てている
        let object = { name : tmp[i][0], memo : tmp[i][1], image_path : tmp[i][2] }
        res.push(object)
      }
      return res
    },
    changeData () {
      let file = this.$refs.importFile.files[0]
      const reader = new window.FileReader()
      const that = this
      reader.onload = function (e) {
        const res = that.dataToCSV(e.target.result)
        that.importData = res
        that.$localStorage.set('importData', res)
        that.dataIndex = 0
        that.$localStorage.set('dataIndex', 0)
      }
      reader.readAsText(file)
    },
    deleteData () {
      this.$localStorage.remove('importData')
      this.$localStorage.remove('dataIndex')
      this.importData = []
      this.dataIndex = 0
    },
    changeState () {
      this.state = (this.state + 1) % 2
      switch (this.state) {
        case 0:
          this.buttonState = 'stop'
          this.dataIndex++
          this.$localStorage.set('dataIndex', this.dataIndex)
          break
        case 1:
          this.buttonState = 'start'
          break
      }
    },
    changeSettingShow () {
      this.showDialog = !this.showDialog
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input {
  opacity: 0;
}
</style>
