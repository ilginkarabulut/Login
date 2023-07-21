<template>
    <div>
      <h1>Register</h1>
      <div class="row">
        <div class="col-sm-4">
          <h2 align="center">Registration</h2>
          <form @submit.prevent="saveData">
            
            
            <div class="form-group" align="left">
              <label>First Name</label>
              <input type="text" v-model="users.firstname" class="form-control" placeholder="Employee Name">
            </div>
            <!-- Diğer form alanları da burada yer alabilir -->
            <div class="form-group" align="left">
              <label>Last Name</label>
              <input type="text" v-model="users.lastname" class="form-control" placeholder="Last Name">
            </div>

            <div class="form-group" align="left">
              <label>Email</label>
              <input type="email" v-model="users.email" class="form-control" placeholder="Employee Name">
            </div>

            <div class="form-group" align="left">
              <label>Password</label>
              <input type="password" v-model="users.password" class="form-control" placeholder="Employee Name">
            </div>
            <!-- Daha fazla form alanı eklenebilir -->
            <button type="submit" class="btn btn-primary">Save</button>
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
            id: '',
            firstname: '',
            lastname: '',
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
        saveData() {
            axios.post("http://localhost:9000/users/create", this.users)
            .then(
                ({data})=>{
                    alert("savedd");
                }
            )
        }
    }
  }
  </script>
  