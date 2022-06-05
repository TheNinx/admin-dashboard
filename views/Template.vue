<template>

  <main class="columns is-gapless is-multiline">
    <div>
      <SideBar :email="email" :possui-email="possui"/>

    </div>
    <div class="column is-three-quarter">
     <template-view/>
    </div>

  </main>

</template>

<script>

import {defineComponent} from "vue";
import SideBar from "@/components/SideBar.vue";
import TemplateView from "@/components/Task.vue";


export default defineComponent({
  name: "TemplateView",



  components: {
    SideBar,
    TemplateView
  }

})

</script>

<style scoped>

</style>