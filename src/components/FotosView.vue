<template>
  <progress class="progress is-danger"  v-bind:value="porcent" max="100"></progress>

  <button @click="aumentar">Aumentar</button>

</template>


<script>

import {defineComponent} from "vue";

export default defineComponent({
  name: "FotosView",

  data(){
    return{
      texto: '',
      porcent: 3,
    }
  },
  methods:{
    aumentar: function (){

      if (this.porcent == 100){
        return this.porcent = 0

      }
      this.porcent += 10
    },
  }
})

</script>

<style scoped>

</style>