<template>
  <h1>GET TOKEN</h1>
  <button class="button" @click="token()">TOKEN</button>
  <h1>GET TASK</h1>
  <button class="button" @click="listarTask()">GETTAK</button>
  <button class="button is-success"  @click="abrir()">Cadastrar</button>
  <div class="modal" v-bind:class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button @click="fechar()" class="delete" aria-label="close"></button>
      </header>
      <form @submit.prevent="salvar">
        <section class="modal-card-body">
          <div class="field">
            <label for="id" class="label">
              ID
            </label>
            <input type="number" id="id" class="input" v-model="usuario.id">
            <label for="nome" class="label">
              Nome
            </label>
            <input type="text" id="nome" class="input" v-model="usuario.nome">
            <label for="email" class="label">
              E-mail
            </label>

            <input type="email" id="email" class="input" v-model="usuario.email">
            <label for="sexo" class="label">
              Sexo
            </label>
            <div class="select" id="sexo">
              <select v-model="usuario.sexo">
                <option>Sexo</option>
                <option>F</option>
                <option>M</option>
              </select>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" type="submit">Salvar</button>
          <button class="button" @click="fechar()">Cancel</button>
        </footer>
      </form>

    </div>
  </div>
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
import Usuarios from '../services/usuarios'
import Tasks from "@/services/tasks";
import IUsuario from "@/interfaces/IUsuario"

export default defineComponent({
  name: "UsuariosView",

  data() {
    return {
      usuarios: [] as IUsuario[],

      usuario: {
        id: 0,
        nome: '',
        sexo: '',
        email: '',
        status: 1,
      },

      modal: ''
    }
  },
  mounted() {
    this.listar()
  },
  methods: {
    abrir: function () {

      this.modal = 'is-active'

    },
    fechar: function () {
      this.modal = ''
    },
    salvar: function () {
      Usuarios.salvar(this.usuario).then(resp  =>{
        alert("Cadastrado com sucesso")
        this.modal = ''
        this.listar()
      })
    },
    listar: function (){
      Usuarios.listar().then(resp => {
        console.table(resp)
        this.usuarios = resp.data
      })
    },
    edit: function (usuario: IUsuario){
      this.modal = 'is-active'
      this.usuario = usuario
    },


    listarTask: function (){

      Tasks.listarTask().then(resp =>{
        console.log(resp)
      })
    }

  }
})
</script>

<style scoped>

</style>