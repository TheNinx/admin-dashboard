<template>

  <div class="p-3">
    <form @submit.prevent="novaTask">
      <div class="columns p-3">

          <input class="input p-1" type="text" placeholder="Task" v-model="taskForm.nome"  style="text-transform:uppercase"  required>
          <button type="submit" class="button ml-1">+Add</button>



      </div>
    </form>

    <table class="table is-fullwidth md-6">

      <tbody>
      <tr v-for="task of tasks" :key="task.id">
        <td>
          <input type="checkbox" @click="finalizaTask(task.id)">
        </td>
        <td >
          {{ task.nome.toUpperCase() }}
        </td>
        <td>

          {{ formatarData(task.created_at) }}
        </td>

        <td>
          <span class="tag is-primary">TASK</span>

        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="ts">

import {defineComponent} from "vue"
import Tasks from "@/services/tasks"
import Task from "@/interfaces/ITask"
import { toast } from 'bulma-toast'



export default defineComponent({
  name: "TaskView",

  data() {
    const datebr =  new Date()
    var date = datebr.getFullYear()+'-'+(datebr.getMonth()+1)+'-'+datebr.getDate()
    var time = datebr.getHours() + ":" + datebr.getMinutes() + ":" + datebr.getSeconds()

    return {

      taskForm: {
        nome: '',
        tempo: date + ' ' + time,
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
          .then(response => {
           console.log(response.data.sucesso)
            if (response.data.sucesso){
              toast({
                message: 'Sua tarefa foi salva com sucesso',
                type: 'is-success',
                dismissible: true,
                position:  'bottom-right',
                pauseOnHover: true,
              })
            }else{
              toast({
                message: 'Não foi possivel salvar sua tarefa',
                type: 'is-danger',
                dismissible: true,
                position:  'bottom-right',
                pauseOnHover: true,
              })
            }
           this.taskForm.nome = ''
           this.listarTask();

      })
          .catch(error => {
            console.log(error.data.error)
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

    },

    formatarData: function (date:any){
      const formatDate = new Date(date);
      return formatDate.toLocaleString('pt-br', { timeZone: 'UTC' })
    }


  }

})
</script>

<style scoped>

</style>