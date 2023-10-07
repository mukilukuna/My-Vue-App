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
        // Na een succesvolle authenticatie kun je de gebruiker doorsturen naar de volgende pagina.
        this.$router.push('/'); // Hier wordt de gebruiker doorgestuurd naar '/customer-list'.
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
  /* Adjusted for visibility */
  padding: 20px;
  border: 1px solid rgba(41, 52, 57, 1);
  /* Adjusted color for visibility */
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  color: rgba(41, 52, 57, 1);
  /* Adjusted color for visibility */
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid rgba(71, 94, 108, 1);
  /* Adjusted color for visibility */
  border-radius: 3px;
  background-color: #ffffff;
  /* White background for text boxes */
}

button {
  background-color: rgba(0, 170, 162, 1);
  /* Adjusted for visibility */
  color: rgba(41, 52, 57, 1);
  /* Adjusted color for visibility */
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}</style>
