<template>

<div>
      <h1>Login</h1>
      <div class="row">
        <div class="col-sm-4">
          <h2 align="center">Registration</h2>
          <form @submit.prevent="LoginData">

            <div class="form-group" align="left">
              <label>Email</label>
              <input type="email" v-model="users.email" class="form-control" placeholder="Employee Name">
            </div>

            <div class="form-group" align="left">
              <label>Password</label>
              <input type="password" v-model="users.password" class="form-control" placeholder="Employee Name">
            </div>
            <!-- Daha fazla form alanı eklenebilir -->
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>

  import Vue from 'vue';
        import axios from 'axios';
  
    export default {
    name: 'Register',
    data () {
      return {
        result: {},
        users: {
            email: '',
            password: ''
        }
      }
    },
    created(){
    },
    mounted(){
        console.log("mounted()called.......");
    },
    methods: {
        LoginData() {
            axios.post("http://localhost:9000/users/Login", this.users)
            .then(
                ({data})=>{
                    alert("savedd");
                }
            )
        }
    }
  }
  </script>