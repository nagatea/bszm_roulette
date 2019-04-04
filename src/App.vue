<template>
  <div id="app">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">bszm-roulette</h3>
      <h3 v-if="settingData.thema" class="thema">テーマ「{{ settingData.thema }}」</h3>

      <md-button v-if="!importData.length" class="md-raised" disabled>Start</md-button>
      <md-button v-else class="md-raised md-primary" @click="changeState()">{{ buttonState }}</md-button>
      
      <md-menu md-size="auto" md-align-trigger>
        <md-button class="md-icon-button">
          <md-icon md-menu-trigger>more_vert</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item v-if="importData.length" @click="$refs.alreadyList.changeShow()">既出一覧表示</md-menu-item>
          <md-menu-item v-if="importData.length" @click="$refs.jump.changeShow()">ジャンプ</md-menu-item>
          <md-menu-item @click="$refs.setting.changeShow()">設定</md-menu-item>
          <md-menu-item @click="$refs.about.changeShow()">About</md-menu-item>
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
      <Bingo
        :bingoData="importData"
        :dataIndex="dataIndex"
        :state="state" />
      <AlreadyList
        ref="alreadyList"
        :bingoData="importData"
        :dataIndex="dataIndex"
        :state="state" />
      <Jump
        ref="jump"
        :bingoData="importData"
        @changeDataIndex="changeState(0); changeDataIndex($event)" />
    </div>
    <Setting
      ref="setting"
      @changeSettingData="changeSettingData($event)"
      @initializeData="initializeData()"
      @deleteData="deleteData()" />
    <About ref="about" />
  </div>
</template>

<script>
import Bingo from '@/components/Bingo'
import Setting from '@/components/Setting'
import About from '@/components/About'
import AlreadyList from '@/components/AlreadyList'
import Jump from '@/components/Jump'

export default {
  name: 'app',
  components: {
    Bingo,
    Setting,
    About,
    AlreadyList,
    Jump
  },
  localStorage: {
    importData: {
      type: Array
    },
    dataIndex: {
      type: Number
    },
    settingData: {
      type: Object
    }
  },
  data() {
    return {
      importData: [],
      dataIndex: 0,
      state: 0,
      buttonState: 'stop',
      settingData: {}
    }
  },
  created () {
    this.importData = this.$localStorage.get('importData')
    this.dataIndex = this.$localStorage.get('dataIndex')
    this.settingData = this.$localStorage.get('settingData')
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
      this.$localStorage.remove('settingData')
      this.importData = []
      this.dataIndex = 0
    },
    initializeData () {
      this.changeState(0)
      this.changeDataIndex(0)
    },
    changeState (state) {
      if (state === undefined) {
        this.state = (this.state + 1) % 2
      } else {
        this.state = state
      }
      switch (this.state) {
        case 0:
          this.buttonState = 'stop'
          this.changeDataIndex(this.dataIndex + 1)
          break
        case 1:
          this.buttonState = 'start'
          break
      }
    },
    changeDataIndex (indexNumber) {
      this.dataIndex = indexNumber
      this.$localStorage.set('dataIndex', indexNumber)
    },
    changeSettingData (settingData) {
      this.settingData = settingData
      this.$localStorage.set('settingData', settingData)
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
.thema {
  position: absolute;
  margin: 0;
  width: 100%;
  text-align: center;
}
</style>
