<template>
  <div id="app">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">bszm-roulette</h3>
      <md-button class="md-raised md-primary">button</md-button>
      <md-menu md-size="auto">
        <md-button class="md-icon-button">
          <md-icon md-menu-trigger>more_vert</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item @click="deleteData()">データ消去</md-menu-item>
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
    <ul id="example-1">
      <li v-for="item in importData" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  localStorage: {
    importData: {
      type: Array
    }
  },
  data() {
    return {
      importData: []
    }
  },
  mounted () {
    this.importData = this.$localStorage.get('importData')
  },
  methods: {
    dataToCSV (data) {
      let tmp = data.split("\n").map(item => item.split(","))
      let res = []
      // TODO: name, memo以外の要素にも対応する
      for (let i = 1; i < tmp.length; i++) {
        let object = { name : tmp[i][0], memo : tmp[i][1] }
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
      }
      reader.readAsText(file)
    },
    deleteData () {
      this.$localStorage.remove('importData')
      this.importData = []
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
