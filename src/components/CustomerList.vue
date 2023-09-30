<template>
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><router-link to="/reports">Toegewezen rapportages</router-link></li>
        <li><router-link to="/documentation">Kennisbase Documentatie</router-link></li>
        <li><router-link to="/settings">Instellingen</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </div>
  </template>
  
<script>
    export default {
        name: 'CustomerList'
    }
</script>
<style>
nav {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

nav a.active {
  font-weight: bold;
}
</style>
