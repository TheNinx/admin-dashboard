<template>

  <main class="columns is-gapless is-multiline">
    <div>
      <SideBar/>
    </div>
    <div class="column is-three-quarter">
     <Task/>
    </div>

  </main>

</template>

<script>

import {defineComponent} from "vue";
import SideBar from "@/components/SideBar.vue";
import Task    from "@/components/Task.vue";


export default defineComponent({
  name: "TemplateView",
  components: {
    SideBar,
    Task
  }

})

</script>

<style scoped>

</style>