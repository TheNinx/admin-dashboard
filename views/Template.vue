<template>

  <main class="columns is-gapless is-multiline">
    <div>
      <SideBar :email="email" :possui-email="possui"/>

    </div>
    <div class="column is-three-quarter">
      <UsuariosView/>
    </div>

  </main>

</template>

<script>

import {defineComponent} from "vue";
import SideBar from "@/components/SideBar.vue";
import UsuariosView from "@/components/UsuariosView.vue";
import IUsuario from "@/interfaces/IUsuario";

export default defineComponent({
  name: "TemplateView",



  components: {
    SideBar,
    UsuariosView
  }

})

</script>

<style scoped>

</style>