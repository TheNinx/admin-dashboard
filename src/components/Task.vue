<template>
  <div class="p-3">
    <form @submit.prevent="novaTask">
      <div class="columns p-3">

          <input class="input p-1" type="text" placeholder="Task" v-model="taskForm.nome">
          <button type="submit" class="button ml-1">+Add</button>


      </div>
    </form>

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
import Task from "@/interfaces/ITask"


export default defineComponent({
  name: "TaskView",

  data() {
    return {

      taskForm: {
        nome: '',
        tempo: '2022-03-04'
      },

      tasks: [] as Task[]


    }
  },

  mounted() {
    this.listarTask()
  },

  methods: {
    novaTask: function (){
      Tasks.novaTask(this.taskForm)
      this.listarTask()
    },


    finalizaTask:function (id: bigint){

      Tasks.deletarTask(id).then(resp =>{
        alert("finalizou")
        this.listarTask()
      })

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