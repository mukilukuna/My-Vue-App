<template>
  <div class="home">
    <div class="header">
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
  background-color: rgba(0, 170, 162, 1);
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(71, 94, 108, 0.5);
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
  color: rgba(41, 52, 57, 1);
  margin-top: 20px;
}

.description {
  font-size: 18px;
  color: rgba(41, 52, 57, 1);
  margin-top: 10px;
}</style>
