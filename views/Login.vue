<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="email" class="input" required v-model="userLogin.email">
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Senha</label>
                <div class="control has-icons-left">
                  <input type="password" class="input" required v-model="userLogin.password">
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div>
              <div class="field">
                <button @click="loginUser" class="button is-success">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {defineComponent} from "vue";
import Login from "@/services/login";

export default defineComponent({
  name: "LoginView.vue",
  data() {
    return {

      userLogin: {
        email: '',
        password: '',
      },

    }
  },
  methods: {
    loginUser: function () {

      Login.login(this.userLogin).then(resp => {
        localStorage.setItem('token', resp.data.token)
        console.log(resp)
      })

    },
  }
})
</script>

<style scoped>

</style>