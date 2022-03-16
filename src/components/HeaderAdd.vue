<template>
    <div id='Head-Section'>
        <font-awesome-icon @click='this.$emit("BackPage")' class='Title-Icon' :icon="['fas', 'arrow-left']" />        
        <h2 id='App-Title'>Add Page</h2>
        <button id='Theme-Icon' @click='ChangeTheme()'>
            <font-awesome-icon v-if="this.DataTheme === 'darkMode'" class='Title-Icon' :icon="['fas', 'sun']" />        
            <font-awesome-icon v-else class='Title-Icon' :icon="['fas', 'moon']" />        
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return { DataTheme : '' }
    },
    mounted() {
        if(localStorage.getItem('DataTheme')) this.ControlTheme;
        document.documentElement.setAttribute('data-theme',localStorage.getItem('DataTheme'));
    },
    computed : {
        ControlTheme : function() {
            return this.ChangeTheme();
        }
    },
    methods : {
        ChangeTheme : function() {
            this.DataTheme = this.DataTheme == 'darkMode' ? '' : 'darkMode'; 
            document.documentElement.setAttribute('data-theme', this.DataTheme); 
            localStorage.setItem('DataTheme', this.DataTheme);
        },
    }
}
</script>