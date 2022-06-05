<template>
  <div class="p-3">
    <div class="columns p-3">
      <input class="input p-1" type="text" placeholder="Task">
      <button class="button ml-1">+Add</button>
    </div>

    <table class="table is-fullwidth md-6">

      <tbody>
      <tr v-for="task of tasks" :key="task.id">
        <td>
          <input type="checkbox" @click="finalizaTask(task.id)">
        </td>
        <td>
          {{ task.nome }}
        </td>
        <td>
          {{ task.tempo }}
        </td>

        <td>
          <span class="tag is-primary">Ativo</span>

        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
import Tasks from "@/services/tasks";


export default defineComponent({
  name: "TaskView",

  data() {
    return {

      tasks: [{
        id: null,
        nome: null,
        tempo: null,
      }],


    }
  },

  mounted() {
    this.listarTask()
  },

  methods: {
    finalizaTask:function (id: bigint){
      alert("tarefa a ser finalizada" + id)
    },
    listarTask: function () {

      Tasks.listarTask().then(resp => {
        this.tasks = resp.data
      })

    }
  }

})
</script>

<style scoped>

</style>