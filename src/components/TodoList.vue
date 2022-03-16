<template>
    <HeaderListVue @LocalCLear='LocalCLear' @GoPage='GoAddPage'/>
    <LengthValVue
        :ValuesData='[
            { CallLength },
            { CallLengthRed },
            { CallLengthYellow },
            { CallLengthGreen }
        ]'
        @AllList='AllList'
        @ImportantList='ImportantList'
        @OrdinaryList='OrdinaryList'
        @InsignificantList='InsignificantList'
    />
    <div id='List-Section'>
        <div v-if="this.TodoData.length > 0">
            <div v-for='todo in this.TodoData' :key='todo' id='List-Card'>
                <div :style="{backgroundColor : todo.radios}" id='List-Color' />
                <div id='List-Flex'>
                    <p id='List-Text'>
                        {{todo.label}}
                    </p>  
                    <font-awesome-icon @click='DeleteTheİtem(todo)' id='List-Icon' :icon="['fas', 'xmark']" />
                </div>
            </div>
        </div>
        <div v-else id="Look-Empty">
            <h3>List Is Empty</h3>
        </div>
    </div>
</template>

<script>
import LengthValVue from './LengthValue';
import HeaderListVue from './HeaderTodo';
export default {
    emits : [
        'AllList',
        'ImportantList',
        'OrdinaryList',
        'InsignificantList',
        'GoPage',
        'LocalCLear'
    ],
    components : {
        LengthValVue,
        HeaderListVue
    },
    data() {
        return {
            TodoData : [],
            ValueData : [],
            IsAllList : true,
        }
    },
    mounted() {
        if(localStorage.getItem('todos')) this.GetLocalSt();
    },
    methods : {
        GoAddPage : function() {
            this.$router.push({ name : 'AddPage'});
        },
        LocalCLear : function() {
            const RemoveMessage = confirm('Are You Sure Delete All');
            if(RemoveMessage === true) {
                this.TodoData = [];
                this.ValueData = [];
                localStorage.removeItem('todos');
                localStorage.setItem('todos',JSON.stringify(this.TodoData));
            } else {
                return;
            }
        },
        DeleteTheİtem : function(Todo) {
            const Data = JSON.parse(localStorage.getItem('todos'));
            const NewData = Data.filter(data => data.label !== Todo.label);
            localStorage.setItem('todos',JSON.stringify(NewData));
            this.GetLocalSt();
            if(this.IsAllList === false) {
                this.TodoData = this.TodoData.filter(data => data.radios === Todo.radios)
            }
        },
        GetLocalSt : function() {
            this.TodoData = JSON.parse(localStorage.getItem('todos'));
            this.ValueData = JSON.parse(localStorage.getItem('todos'));
            if(this.TodoData === null) {
               return this.TodoData = [];
            }
        },
        AllList : function() {
            this.IsAllList = true;
            this.GetLocalSt();
        },
        ImportantList : function() {
            this.GetLocalSt();
            this.IsAllList = false;
            this.TodoData = this.TodoData.filter(data => data.radios === '#ef476f');
        },
        OrdinaryList : function() {
            this.GetLocalSt();
            this.IsAllList = false;
            this.TodoData = this.TodoData.filter(data => data.radios === '#ffd166');
        },
        InsignificantList : function() {
            this.GetLocalSt();
            this.IsAllList = false;
            this.TodoData = this.TodoData.filter(data => data.radios === '#06d6a0');
        }
    },
    computed :  {
        CallLength : function() {
            return this.ValueData.length;
        },
        CallLengthRed : function() {
            return this.ValueData.filter(data => data.radios === '#ef476f').length;
        },
        CallLengthYellow : function() {
            return this.ValueData.filter(data => data.radios === '#ffd166').length;
        },
        CallLengthGreen : function() {
            return this.ValueData.filter(data => data.radios === '#06d6a0').length;
        }
    },
}
</script>