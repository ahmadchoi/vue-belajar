<template>
    <div>
        <h1>Todo Complete</h1>

        <Todoitem
        v-for="(t, index) in todo"
        :key="index"
        :title="t"
        ></Todoitem>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
// import Todoitem from '/Todoitem'
import Todoitem from '@/components/Todoitem.vue';
import TodoService from '../service/TodoService';


export default ({
    name: 'Todocomplete',
    data() {
        return {
            todo: [],
        }
    },
    components: {
        Todoitem
    },
    async mounted() {
        try {
            const completeTodo = await TodoService.getCompleteTodo();
            completeTodo.forEach(datanya => {
                this.todo.push(datanya.data());
                // console.log(datanya.data());
            })
        } catch (error) {
            console.log('error load');
            console.log(error);
            
        }
    }
})
</script>
