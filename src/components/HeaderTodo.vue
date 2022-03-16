<template>
    <div id='Head-Section'>
        <font-awesome-icon @click="this.$emit('GoPage')" class="Title-Icon" :icon="['fas', 'plus']" />
        <h2 id='App-Title'>Todo App</h2>
        <font-awesome-icon @click="this.$emit('LocalCLear')" class="Title-Icon" :icon="['fas', 'trash']" />
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>