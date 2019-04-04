<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>指定した番号にジャンプ</md-dialog-title>
        <md-dialog-content>
          <div class="jump-field">
            <md-field>
              <label>Number</label>
              <md-input v-model="value" type="number"></md-input>
            </md-field>
          </div>
          <div v-if="alert" class="jump-alert">
            {{ alert }}
          </div>
        </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="changeShow()">Close</md-button>
        <md-button class="md-raised md-primary" @click="jump()">Jump</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Jump',
    props: {
      bingoData: Array
    },
    data() {
      return {
        showDialog: false,
        value: 0,
        alert: undefined
      }
    },
    methods: {
      jump () {
        if (this.value < 0 || this.value > this.bingoData.length) {
          this.alert = "不正な値です"
        } else {
          this.alert = undefined
          this.changeShow()
          this.$emit('changeDataIndex', Number(this.value))
        }
      },
      changeShow () {
        this.showDialog = !this.showDialog
      }
    }
  }
</script>

<style scoped>
.jump-alert {
  color: red;
}
.jump-field {
  width: 70%;
}
</style>
