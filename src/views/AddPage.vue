<template>
    <HeaderAdd @BackPage='BackListPage' />
    <ThankYouVue/>
    <FormAddVue @SubmitForm='OnSubmit'/>
</template>

<script>
import HeaderAdd from '@/components/HeaderAdd';
import ThankYouVue from '@/components/ThankYou';
import FormAddVue from '@/components/FormAdd';
export default {
    emits : ['BackPage','SubmitForm'],
    data() {
        return { LocalData : [] }
    },
    components : {
        HeaderAdd,
        ThankYouVue,
        FormAddVue
    },
    mounted() {
        if(localStorage.getItem('todos')) this.LocalData = JSON.parse(localStorage.getItem('todos'));
    },
    watch: {
        LocalData: {
            handler() {
                localStorage.setItem('todos',JSON.stringify(this.LocalData))
            },
            deep: true
        }
    },
    methods : {
        BackListPage : function() {
            this.$router.push({ name : 'ListPage'});
        },
        OnSubmit : function(data) {
            if(data.label === '' || data.radios === '') alert('Please Complete The Form')
            else {
                this.LocalData.push({...data})
                data.label = '';
                data.radios = '';   
            }
        }
    }
}
</script>