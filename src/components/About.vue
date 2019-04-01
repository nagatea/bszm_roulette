<template>
  <div>
    <md-dialog :md-active.sync="showAboutDialog">
      <md-dialog-title>bszm-rouletteについて</md-dialog-title>
        <md-dialog-content>
          <p>情報理工学院バスゼミのビンゴ用ルーレットアプリです。</p>
          <p>時間に余裕があったら加筆します。</p>
        </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('changeAboutShow')">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'About',
    props: {
      showAboutDialog: {
        type: Boolean,
        default: false
      }
    }
  }
</script>