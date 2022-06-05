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
    <tr v-for="usuario of usuarios" :key="usuario.id">
      <td>
        {{ usuario.id }}
      </td>
      <td>
        {{ usuario.nome }}
      </td>
      <td>
        {{ usuario.sexo }}
      </td>
      <td>
        {{ usuario.email }}
      </td>
      <td>
        <span v-if="usuario.status == 1" class="tag is-primary">Ativo</span>
        <span v-if="usuario.status == 0" class="tag is-danger">Inativo</span>
      </td>
      <td>

        <button class="button" @click="edit(usuario)">EDITAR</button>
        <button class="button">EXCLUIR</button>

      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import Tasks from "@/services/tasks";


export default defineComponent({
  name: "TaskView",

  data() {
    return {

       task:  {
        id: null,
        nome: null,
        tempo: null,
      },






    }
  },

  methods: {

    listarTask: function () {

      Tasks.listarTask().then(resp => {
        console.log(resp)
      })
    }
  }

})
</script>

<style scoped>

</style>