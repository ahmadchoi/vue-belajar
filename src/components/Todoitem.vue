<template>
    <div>
        <div class="list-group-item text-white" :class="[checkItem?'bg-success':'bg-info']">
            <input type="checkbox" v-model="checkItem" v-if="title.isCheck?'checked':''" @click="$emit('update-checked', !checkItem, title.id)">
            <i class="bi bi-star-fill" v-if="title.isImportant"></i>
            {{ toUpperCase }}
            <!-- <span>{{formatDate}}</span> -->
            <Todoaction v-on:hapusdata="hapussaja()" v-on:editdata="editsaja()"></Todoaction>
            <span style="font-size:9px;float:right;margin-right:15px;margin-top:5px;padding:3px;border-radius:5px" class="bg bg-warning text-dark">
                <i>
                    (<timeago :datetime="title.created_at" :auto-update="5"></timeago>)
                </i>
            </span>
        </div>
    </div>

</template>

<script>
import Todoaction from './Todoaction.vue';
import {format} from 'timeago.js';

export default {
  name: 'Todoitem',
  props: ['title'],
  data() {
      return {
          checkItem: false,
      }
  },
  methods: {
      runCheck: function() {
          this.checkItem('checked');
          console.log('cek');
      },
      hapussaja: function() {
        this.$emit('hapussaja');
      },
      editsaja: function() {
        this.$emit('editsaja');
      },
  },
  components: {
      Todoaction
  },
  computed: {
      toUpperCase: function() {
            const kata = this.title.title;
            var splitStr = kata.toLowerCase().split(' ');

            const capWord = splitStr.map((word) => {
                return word.charAt(0).toUpperCase() + word.substring(1);
            });

            // for (var i = 0; i < splitStr.length; i++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                // splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
            // }
            // Directly return the joined string
            return capWord.join(' '); 

      },
      formatDate: function() {
          return format(this.title.created_at);
      }
  }
}
</script>

<style>

h2 {
  color: #2c3e50;
}
</style>
