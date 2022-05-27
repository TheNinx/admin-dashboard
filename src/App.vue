<template>
  <main class="columns is-gapless is-multiline">
    <div>
      <SideBar :email="email" :possui-email="possui"/>

    </div>
    <div class="column is-three-quarter">
        <p>aa</p>
    </div>

  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import SideBar from "@/components/SideBar.vue";

export default defineComponent({
  name: 'App',
  components: {
    SideBar,

  },

  data(){
    return{
      email: "Wellgow@gmail.com",
      possui: true,
    }
  }
});
</script>

<style scoped>

</style>
