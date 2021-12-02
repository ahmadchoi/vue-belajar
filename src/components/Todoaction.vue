<template>
    <div style="text-align:right;float:right">
        <i class="bi bi-pencil" style="cursor:pointer;padding:2px" @click="edit()"></i>
        <i class="bi bi-trash" style="cursor:pointer;padding:2px" @click="trash()"></i>
    </div>

</template>

<script>

export default {
  name: 'Todoaction',
  props: ['title'],
  data() {
      return {
        //   checkItem: false,
      }
  },
  methods: {
    //   runCheck: function() {
    //       this.checkItem('checked');
    //       console.log('cek');
    //   }
    trash: function() {
        this.$emit('hapusdata');
    },
    edit: function() {
        this.$emit('editdata');
    }
  }
}
</script>

<style>

h2 {
  color: #2c3e50;
}
</style>
