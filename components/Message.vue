<template>
    <div>
        <p v-if="$store.state.selectedCommand === 0">今日もお疲れ様です(おなかすいたなぁ)</p>
        <Goal v-if="$store.state.selectedCommand === 1"/>
        <Achieve v-if="$store.state.selectedCommand === 2"/>
        <Chara v-if="$store.state.selectedCommand === 3"/>
        <Game v-if="$store.state.selectedCommand === 4"/>
    </div>
</template>

<script>
export default {

}
</script>