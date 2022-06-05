<template>
  <div class="p-3">
    <form @submit.prevent="novaTask">
      <div class="columns p-3">

          <input class="input p-1" type="text" placeholder="Task" v-model="taskForm.nome">
          <button type="submit" class="button ml-1">+Add</button>



      </div>
    </form>
    {{msm}}
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

      msm: '',

      tasks: [] as Task[]


    }
  },

  mounted() {
    this.listarTask()
  },

  methods: {
    novaTask: function (){
      Tasks.novaTask(this.taskForm)
          .then(response => {
           console.log(response.data.sucesso);
           if (response.data.sucesso){
             this.msm = '<div class="notification is-primary is-light">\n' +
                 '  <button class="delete"></button>\n' +
                 '  Primar lorem ipsum dolor sit amet, consectetur\n' +
                 '  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.\n' +
                 '</div>'
           }

      })
          .catch(error => {
            console.log(error.data.error);
          })
    },


    finalizaTask:function (id: bigint){

      Tasks.deletarTask(id).then(resp =>{

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