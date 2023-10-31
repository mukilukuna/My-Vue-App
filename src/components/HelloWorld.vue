<template>
  <div class="login-form">
    <h1>Inloggen</h1>
    <form @submit.prevent="handleFormSubmit">
      <div class="form-group">
        <label for="username">Gebruikersnaam:</label>
        <input type="text" id="username" v-model="username" required aria-label="Gebruikersnaam" />
      </div>
      <div class="form-group">
        <label for="password">Wachtwoord:</label>
        <input type="password" id="password" v-model="password" required aria-label="Wachtwoord" />
      </div>
      <div class="form-group">
        <button type="submit" aria-label="Inloggen">Inloggen</button>
      </div>
    </form>
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    <div v-if="success" class="success-message">
      Inloggen gelukt! Welkom, {{ username }}!
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      error: null,
      success: false,
    };
  },
  methods: {
    async handleFormSubmit() {
      // Voer server-side validatie en authenticatie uit om beveiliging te waarborgen
      const isValid = await this.validateUserInput();
      if (isValid) {
        // Simuleer een succesvolle inlogpoging
        this.success = true;
        this.error = null;
      } else {
        // Toon een foutbericht aan de gebruiker indien nodig
        this.success = false;
        this.error = "Inloggen mislukt. Controleer uw gegevens.";
      }
    },
    async validateUserInput() {
      // Implementeer server-side validatie en retourneer true als gegevens geldig zijn
      // Retourneer false als gegevens ongeldig zijn
      // Hier kun je ook de beveiligingscontroles uitvoeren
      return true; // Voor dit voorbeeld simuleren we altijd een geldige invoer
    },
  },
};
</script>

<style scoped>
/* Voeg hier stijlen toe om de bruikbaarheid en toegankelijkheid te verbeteren */
.form-group {
  margin-bottom: 1rem;
}

.error-message {
  color: red;
  margin-top: 1rem;
}

.success-message {
  color: green;
  margin-top: 1rem;
}
</style>
