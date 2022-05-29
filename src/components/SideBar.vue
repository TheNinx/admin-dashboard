<template>

  <header>
    <h1><img alt="Vue logo" src="../assets/logo.png"></h1>


    <article class="panel">
        <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
          bulma
        </a>
        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </a>
        <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
          marksheet
        </a>
        <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
          minireset.css
        </a>
    </article>

  </header>


</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({


  name: "SideBar",
  props: {
    email: String,
    possuiEmail: Boolean,
  },

  data() {
    return {
      emailPrincipal: this.email,
      possui: this.possuiEmail,
    }
  },

  methods: {
    show: function () {
      this.possui = false;
    }
  }

})
</script>

<style scoped>

header {
  /*padding: 1rem;*/
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
  color: white;
}

</style>