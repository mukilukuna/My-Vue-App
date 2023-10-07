<template>
  <div class="settings">
    <h2>Instellingen</h2>
    <div>
      <h3>Accountgegevens</h3>
      <p><strong>Gebruikersnaam:</strong> KBouter</p>
      <p><strong>Naam:</strong> Karel Bouter</p>
      <p><strong>Email:</strong> KarelBouter@example.com</p>
    </div>
    <div>
      <h3>Voorkeuren</h3>
      <p><strong>Interface-thema:</strong> Donker</p>
      <p><strong>Meldingen:</strong> Ingeschakeld</p>
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
  /* Adjusted color from the PDF with opacity set to 1 */
  padding: 20px;
  border: 1px solid rgba(41, 52, 57, 1);
  /* Adjusted color from the PDF with opacity set to 1 */
  border-radius: 5px;
}
</style>
