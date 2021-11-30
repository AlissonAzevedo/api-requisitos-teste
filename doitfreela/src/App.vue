<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Requisitos</a>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="requisito.nome">
          <label>Descrição</label>
          <input type="text" placeholder="descricao" v-model="requisito.descricao">
          <label>Horas Esperadas</label>
          <input type="number" placeholder="HorasEperadas" v-model="requisito.horaEsperada">

          <button class="waves-effect waves-light btn-small">Adicionar<i class="material-icons left">add</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>Descrição</th>
            <th>Horas Esperadas</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="requisito of requisitos" :key="requisito.id">

            <td>{{ requisito.nome }}</td>
            <td>{{ requisito.descricao }}</td>
            <td>{{ requisito.horaEsperada}}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">edit</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_forever</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
import Requisito from "./services/requisito"
export default {
  data(){
    return{
      requisito:{
        nome: '',
        descricao: '',
        horaEsperada: '',
        horaExecutada: '',
        ativo: '',
      },
      requisitos:[]
    }
  },
  mounted(){
    Requisito.listar().then(response => {
     // console.log(response.data) #print da respota da api no console 
      this.requisitos = response.data
      
    })
  },
  methods:{

    salvar(){
      Requisito.salvar(this.requisito).then(response => {
        alert('Salvo!!')
        this.requisito = response
      })
    }
  }
}
</script>

<style>

</style>
