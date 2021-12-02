<template>
    <div style="text-align:left;padding-left:20px">      
      <loading :active.sync="isLoading"
          :can-cancel="false"
          :color= "'#921515'"
          :is-full-page="fullPage"
          :loader= "'dots'"
          ></loading>
        <div class="col-md-12">
            <input type="text" class="form-control" v-model="todo.title">
            <input type="checkbox" v-model="todo.checkPenting"> Penting<br>
            <label for="" v-if="con" class="text text-danger">Teks tidak boleh kosong!!</label><br>
            <button class="btn btn-sm btn-primary" v-if="btnTambah" id="btn" @click="tambah()">Tambah</button>
            <button class="btn btn-sm btn-warning text-white" style="margin-left:3px" v-if="btnEdit" @click="actEdit()">Edit</button>
            <hr>
            <!-- <button @click="hitung()">Generate</button> -->
            <Todoitem
            v-for="(item, o) in arrItem"
            :key="o"
            :title="item"
            v-on:hapussaja="hapusdata(item, o)"
            v-on:editsaja="editdata(item, o)"
            @update-checked="updateChecked"
            ></Todoitem>
        </div>
        <h1>{{ $store.state.counter }}</h1>
    </div>

</template>

<script>
import Todoitem from '@/components/Todoitem.vue';
import TodoService from '../service/TodoService';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { documentId } from '@firebase/firestore';

export default {
  name: 'Todo',
  data() {
    return {
      todo: {
        title: '',
        checkPenting: false,
        index: null,
      },
      arrItem: [],
      con: false,
      // checkPenting: false,
      isLoading: false,
      fullPage: true,
      btnEdit: false,
      btnTambah: true,
    }
  },
  async mounted() {
      try {
          const todo = await TodoService.getAllTodo(); //get all data from forebase

          todo.forEach(f => {
              const item = f.data();
              const id = f.id;
              item.id = id;
              this.arrItem.push(item);
          });
      } catch (error) {
          console.log('error load');
          console.log(error);
      }
      
  },
  components: {
    Todoitem, Loading
  },
  methods: {
    tambah: async function() {
        if(this.todo.title=='') {
            this.con = true;
            return;
        }

        this.isLoading = true;

        const data = {'title':this.todo.title, 'isImportant':this.todo.checkPenting};
        data.created_at = Date.now();

        try {
            const inTodo = await TodoService.createTodoList(data);
            if(inTodo) {
                data.id = inTodo.id;
                this.arrItem.push(data);
                this.isLoading = false;
                // console.log(data);
            }
        } catch (errorIn) {
            console.log('error input');
            console.log(errorIn);
            this.isLoading = false;
        }

        this.todo = {
          title: '',
          isImportant: false
        };
        this.con = false;
    },
    hapusdata: async function(item, o) {
      let f = confirm('Yakin hapus '+item.title+'?');
      this.isLoading = true;
      if(f==true) {
        try {
            await TodoService.hapusDoc(item.id);
            this.arrItem.splice(o, 1);          
            this.isLoading = false;
        } catch (error) {
          console.log('error hapus');
          console.log(error);
          this.isLoading = false;
        }
      }
      return;
      // alert('hapus data ini'+ item +' index ke '+o);
    },
    editdata: function(item, o) {
      // console.log(item);
      let stringItem = JSON.stringify(item);
      this.todo = JSON.parse(stringItem);

      this.todo.title = item.title;
      this.todo.checkPenting = item.isImportant;
      this.todo.index = o;
      this.btnEdit = true;
      this.btnTambah = false;
    },
    updateChecked: async function(check, id) {
      const sianu = {id: id, isCheck: check};
      await TodoService.ubahDoc(sianu);
      // console.log(id);
      // console.log(check);
    },
    actEdit: async function() {
      if(this.todo.title == '') {
         return;
      } else {
        this.isLoading = true;
        try {
          await TodoService.ubahDoc(this.todo);

          this.arrItem[this.todo.index].title = this.todo.title;
          this.arrItem[this.todo.index].isImportant = this.todo.checkPenting;

          this.btnEdit = false;
          this.btnTambah = true;

          this.todo = {
            title: '',
            isImportant: false
          }
          this.isLoading = false;
          
        } catch (error) {
          console.log('error edit');
          console.log(error);
          this.isLoading = false;
        }
      }
    }
  }
}
</script>

<style>
h2 {
  color: #2c3e50;
}
</style>
