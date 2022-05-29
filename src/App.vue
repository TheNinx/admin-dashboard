<template>
  <main class="columns is-gapless is-multiline">
    <div>
      <SideBar :email="email" :possui-email="possui"/>

    </div>
    <div class="column is-three-quarter">
        <fotos-view/>
    </div>

  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import SideBar from "@/components/SideBar.vue";
import FotosView from "@/components/FotosView.vue";

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    FotosView,
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
