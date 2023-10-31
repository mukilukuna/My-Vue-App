<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Gebruikersnaam:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Wachtwoord:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="otp">Verificatiecode (OTP):</label>
        <input type="text" id="otp" v-model="otp" required>
      </div>
      <button type="submit">Inloggen</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      otp: '',
    };
  },
  methods: {
    login() {
      const isAuthenticated = true;

      if (isAuthenticated) {
        this.$router.push('/');
      } else {
        alert('Inloggen mislukt. Controleer uw gegevens.');
      }
    },
  },
};
</script>

<style scoped>
.login {
  background-color: rgba(0, 170, 162, 1);
  color: black;
  padding: 20px;
  border: 1px solid rgba(41, 52, 57, 1);
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  color: black;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid rgba(71, 94, 108, 1);
  border-radius: 3px;
  background-color: #ffffff;
}

button {
  background-color: rgba(0, 170, 162, 1);
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
