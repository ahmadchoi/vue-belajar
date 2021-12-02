<template>
    <div>
        <h1>Todo Important</h1>

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
    name: 'Todoimportant',
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
            const importantTodo = await TodoService.getImportantTodo();
            importantTodo.forEach(datanya => {
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
