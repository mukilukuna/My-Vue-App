<template>
  <!-- Gebruik een beschrijvend hoofdelement voor de sectie -->
  <div class="reports">
    <header>
      <h1>Rapportages</h1>
      <p>Hier vind je de rapportages.</p>
    </header>

    <!-- Gebruik ARIA-labels voor toegankelijkheid -->
    <section aria-labelledby="executed-inspections-label">
      <h2 id="executed-inspections-label">Uitgevoerde Inspecties</h2>
      <ul>
        <!-- Gebruik een key voor v-for-lussen -->
        <li v-for="(inspection, index) in executedInspections" :key="index">
          <p><strong>Inspectie Datum:</strong> {{ inspection.date }}</p>
          <p><strong>Locatie:</strong> {{ inspection.location }}</p>
          <p><strong>Inspecteur:</strong> {{ inspection.inspector }}</p>
        </li>
      </ul>
    </section>

    <section aria-labelledby="pending-inspections-label">
      <h2 id="pending-inspections-label">Openstaande Inspecties</h2>
      <ul>
        <li v-for="(inspection, index) in pendingInspections" :key="index">
          <p><strong>Inspectie Datum:</strong> {{ inspection.date }}</p>
          <p><strong>Locatie:</strong> {{ inspection.location }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ReportsView',
  data() {
    return {
      executedInspections: [
        {
          date: '2023-10-10',
          location: 'Den Haag',
          inspector: 'Karel Bouter',
        },
        {
          date: '2023-10-12',
          location: 'Amsterdam',
          inspector: 'Jan-Willem de derde',
        },
      ],
      pendingInspections: [
        {
          date: '2023-10-15',
          location: 'Rotterdam',
        },
        {
          date: '2023-10-20',
          location: 'Utrecht',
        },
      ],
    };
  },
};
</script>

<style scoped>
.reports {
  /* Gebruik RGBA-kleurwaarden voor kleuren */
  background-color: rgba(0, 170, 162, 1);
  color: rgba(41, 52, 57, 1);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.reports h1,
.reports h2 {
  /* Gebruik RGBA-kleurwaarden voor kleuren */
  color: rgba(71, 94, 108, 1);
}

@media (max-width: 768px) {
  .reports {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
