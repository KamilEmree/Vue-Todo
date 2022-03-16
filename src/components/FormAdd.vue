<template>
    <div id='Form-Section'>
        <form  @submit.prevent='this.$emit("SubmitForm",this.Todo)'>
            <input placeholder='Add New Item' v-model.lazy.trim='this.Todo.label' type='text' id='Add-Input'>
            <div id='Radios-Section'>
                <input value='#ef476f' v-model='this.Todo.radios' type='radio' name='Add-Radios' id='Add-Radios-1'>
                <input value='#ffd166' v-model='this.Todo.radios' type='radio' name='Add-Radios' id='Add-Radios-2'>                
                <input value='#06d6a0' v-model='this.Todo.radios' type='radio' name='Add-Radios' id='Add-Radios-3'>
                <label class='Add-Label-1' for='Add-Radios-1'>
                    Important
                </label>
                <label class='Add-Label-2' for='Add-Radios-2'>
                    Ordinary
                </label>
                <label class='Add-Label-3' for='Add-Radios-3'>
                    Insignificant
                </label>
            </div>
            <button type='submit' id='Save-Todo'>Save the Todo</button>    
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Todo : {
                label : '',
                radios : '',
            }
            
        }
    },
}
</script>