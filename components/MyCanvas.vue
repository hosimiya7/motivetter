<template>
  <canvas width="750" height="150" class="canvas"></canvas>
</template>

<script>
export default {
    // プロップスの中身をデータに移す
    props: {
        _x: {
            type: Number,
            default: (750 - 150) / 2
        },
        _y: {
            type: Number,
            default: 150 - 75
        },
        /**
         * @property　d 移動距離
         */
        d: {
            type: Number,
            default: 30
        }
    },
    data(){
        return{
            screen_w: 750,
            screen_h: 150,
            chara_w: 150,
            chara_h: 75,
            x: this._x,
            is_left: Math.floor(Math.random() * 2) === 0,
            is_right: !this.is_left
        }
    },
    methods: {
        draw() {
            this.ctx.clearRect(0, 0, this.screen_w, this.screen_h)
            let chara = new Image();
            chara.src = require("@/assets/imgs/moti_1_left.png");  // 画像のURLを指定
            chara.onload = () => {
                this.ctx.drawImage(chara, this.x, this._y, this.chara_w, this.chara_h)
            }
            if(this.x > 0){
                this.x -= this.d
            }else{
                this.x += this.d
            }
        }
    },
    //   htmlに接続されたら
    mounted() {
        // mounted 以降で canvas の DOM にアクセスできる
        // CreateJS などを使うときにも、ここで canvas と紐付ける
        // console.log(this.$el)
        this.ctx = this.$el.getContext('2d')
        setInterval(this.draw, 800)
    }
}
</script>
