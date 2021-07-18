<template>
  <div class="commands">
      <div class="command" v-bind:class="{active: selectedCursor === 1}">目標達成</div>
      <div class="command" v-bind:class="{active: selectedCursor === 2}">達成入力</div>
      <div class="command" v-bind:class="{active: selectedCursor === 3}">キャラクター管理</div>
      <div class="command" v-bind:class="{active: selectedCursor === 4}">ミニゲーム</div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            selectedCursor: 1,
        }
    },
    created: function() {
        addEventListener('keydown', this.selectCommand)
    },
    methods: {
        selectCommand(e) {
            //下
                if(e.keyCode === 40){
                    if(this.selectedCursor < 4){
                        this.selectedCursor++
                        console.log(this.selectedCursor)
                    }
                }
                // 上
                if(e.keyCode === 38){
                    if(this.selectedCursor > 1){
                        this.selectedCursor--
                        console.log(this.selectedCursor)
                    }
                }
                // スペース　決定
                if(e.keyCode === 32){
                    console.log("あ")
                }
                // バック　戻る
                // if(e.keyCode === 32){
                //     console.log("あ")
                // }
        }

    }
}
</script>