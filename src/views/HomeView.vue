<template>
  <div class="home">
    <div class="header">
      <img class="logo" alt="Real Estate Care Logo" src="../assets/logo.png">
      <div class="title">Caring is in our nature</div>
    </div>
    <div class="description">Welkom bij de Real Estate Care Website</div>

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
  background-color: rgba(0,170,162,0); /* Blauwe achtergrondkleur */
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,170,162,0); /* Lichte schaduw */
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.title {
  font-size: 36px;
  font-weight: bold;
  color: #666; /* Lichte grijstint voor de tekstkleur */
  margin-top: 20px;
}

.description {
  font-size: 18px;
  color: #666; /* Lichte grijstint voor de tekstkleur */
  margin-top: 10px;
}
</style>
