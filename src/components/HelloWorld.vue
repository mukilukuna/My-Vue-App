<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CustomerList />
  </div>
</template>

<script>
import CustomerList from "@/components/CustomerList";
export default {
  name: 'HelloWorld',
  components: {CustomerList},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
