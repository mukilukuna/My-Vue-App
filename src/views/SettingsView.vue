<template>
  <div class="settings">
    <h2>Instellingen</h2>
    <div>
      <h3>Accountgegevens</h3>
      <p><strong>Gebruikersnaam:</strong> KBouter</p>
      <p><strong>Naam:</strong> Karel Bouter</p>
      <p><strong>Email:</strong> KarelBouter@example.com</p>
      <p><strong>Wachtwoord:</strong> <a href="#">Wachtwoord wijzigen</a></p>
    </div>
    <div>
      <h3>Voorkeuren</h3>
      <p><strong>Interface-thema:</strong> Donker</p>
      <p><strong>Meldingen:</strong> Ingeschakeld</p>
      <p><strong>Geluiden:</strong> Ingeschakeld</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsView'
}
</script>

<style scoped>
.settings {
  background-color: rgba(0, 170, 162, 1);
  padding: 20px;
  border: 1px solid rgba(41, 52, 57, 1);
  border-radius: 5px;
}

.settings h2,
.settings h3 {
  color: rgba(71, 94, 108, 1);
}

.settings p {
  color: black;
}

.settings a {
  text-decoration: none;
  color: rgba(0, 170, 162, 1);
}
</style>
