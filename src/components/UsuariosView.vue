<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>
          ID
        </th>
        <th>
          Nome
        </th>
        <th>
          Sexo
        </th>
        <th>
          E-mail
        </th>
        <th>
          Status
        </th>
        <th>
          Ações
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="usuario of usuarios" :key="usuarios.id">
        <td>
          1
        </td>
        <td>
          Wellington Cardoso
        </td>
        <td>
          M
        </td>
        <td>
          w-ingles@hotmail.com
        </td>
        <td>
          <span class="tag is-success">Success</span>
        </td>
        <td>


          <a>EXCLUIR</a>
          <a>EDITAR</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Usuarios from '../services/usuarios'
import IUsuario from "@/interfaces/IUsuario"

export default defineComponent({
  name: "UsuariosView",

  data(){
    return {
      usuarios: [] as IUsuario[]
    }
  },
  mounted() {
    Usuarios.listar().then(resp =>{
      console.table(resp)
      this.usuarios = resp.data
    })
  }
})
</script>

<style scoped>

</style>