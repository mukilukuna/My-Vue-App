<template>
  <!-- Gebruik duidelijke en beschrijvende HTML-elementen -->
  <div class="contact">
    <h1>Contact</h1>
    <h2>Neem Contact Met Ons Op</h2>
    <p>
      Als u meer wilt weten over RealEstateCare en hoe we u kunnen helpen bij het beheren en onderhouden van uw vastgoed,
      neem dan vandaag nog contact met ons op. We staan klaar om uw vragen te beantwoorden en samen te werken aan een
      duurzame vastgoedstrategie.
    </p>
    <p>Neem contact met ons op:</p>
    <ul>
      <!-- Gebruik semantische HTML-elementen voor lijstitems -->
      <li><strong>Email:</strong> <a href="mailto:contact@RealEstateCare.nl">contact@RealEstateCare.nl</a></li>
      <li><strong>Telefoon:</strong> <a href="tel:+0701234567">+070 - 12 34 567</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.contact {
  /* Gebruik RGB-waarden voor kleuren */
  background-color: rgba(0, 170, 162, 1);
  color: black;
}

h1,
h2 {
  /* Gebruik RGB-waarden voor kleuren */
  color: rgba(71, 94, 108, 1);
}
</style>
