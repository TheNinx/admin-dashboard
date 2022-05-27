<template>
  <header>
  <h1><img alt="Vue logo" src="../assets/logo.png"></h1>
    <h1 v-if="possui">{{ emailPrincipal }}</h1>
    <button @click="show">TESTE</button>

  </header>



</template>

<script lang="ts">

import {defineComponent} from "vue";

export default  defineComponent({



  name: "SideBar",
  props:{
    email: String,
    possuiEmail: Boolean,
  },

  data(){
    return{
      emailPrincipal: this.email,
      possui: this.possuiEmail,
    }
  },

  methods:{
     show: function (){
       this.possui = false;
     }
  }

})
</script>

<style scoped>

header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

</style>