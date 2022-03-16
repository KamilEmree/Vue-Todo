<template>
    <div id='Values-Section'>
        <div v-for='com in this.ValuesData' :key='com' id='App-Values'>
            <div class='App-Value'>
                {{ com.CallLength }}
            </div>
            <div class='App-Value'>
                {{ com.CallLengthRed }}
            </div>
            <div class='App-Value'>
                {{ com.CallLengthYellow }}
            </div>
            <div class='App-Value'>
                {{ com.CallLengthGreen }}
            </div>
        </div>
        <div @click="this.$emit('AllList')" id='App-All' class='App-Texts'>
            All List
        </div>
        <div @click="this.$emit('ImportantList')" id='App-Important' class='App-Texts'>
            Important
        </div>
        <div @click="this.$emit('OrdinaryList')" id='App-Ordinary' class='App-Texts'>
            Ordinary
        </div>
        <div @click="this.$emit('InsignificantList')" id='App-Insignificant' class='App-Texts'>
            Insignificant
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props : ['ValuesData'],
}
</script>