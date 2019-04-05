<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>bszm-rouletteについて</md-dialog-title>
        <md-dialog-content>
          <p>情報理工学院バスゼミのビンゴ用ルーレットアプリです。</p>
          <p>CSVを読みこんで好きなワードでルーレットを回すことができます。</p>
          <p>製作者: <a href="https://twitter.com/_nagatech" target="_blank">@_nagatech</a></p>
          <p><a href="https://github.com/nagatea/bszm_roulette" target="_blank">Please your contribution!</a></p>
        </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="changeShow()">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        showDialog: false
      }
    },
    methods: {
      changeShow () {
        this.showDialog = !this.showDialog
      }
    }
  }
</script>