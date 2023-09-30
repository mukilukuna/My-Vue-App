<template>
  <div class="home">
    <div class="header">
      <img class="logo" alt="Real Estate Care Logo" src="../assets/logo.png">
      <div class="title">Caring is in our nature</div>
    </div>
    <div class="description">Welkom bij de Real Estate Care Website</div>
    
    <!-- Voeg de CustomerList component hier toe -->
    <CustomerList />
  </div>
</template>

<script>
import CustomerList from '@/components/CustomerList.vue'

export default {
  name: 'HomeView',
  components: {
    CustomerList
  }
}
</script>
<style scoped>
.home {
  background-color: rgba(118, 183, 180, 0); /* Zachte grijze achtergrond */
  text-align: center;
  padding: 40px;
  border: 1px solid #E0E0E0; /* Subtiele rand */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Lichte schaduw */
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: rgba(41, 52, 57, 0.0); /* Tekstkleur gewijzigd naar rgba(41,52,57,0.0) */
}

.description {
  font-size: 18px;
  color: rgba(41, 52, 57, 0.0); /* Tekstkleur gewijzigd naar rgba(41,52,57,0.0) */
}
</style>
