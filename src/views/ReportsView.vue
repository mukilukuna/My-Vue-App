<template>
  <div class="reports">
    <header>
      <h1 class="text-dark">Rapportages</h1>
      <p class="text-dark">Hier vind je de rapportages.</p>
    </header>

    <section aria-labelledby="executed-inspections-label">
      <h2 id="executed-inspections-label" class="text-dark">Uitgevoerde Inspecties</h2>
      <ul>
        <li v-for="(inspection, index) in executedInspections" :key="index">
          <p class="text-dark"><strong>Inspectie Datum:</strong> {{ inspection.date }}</p>
          <p class="text-dark"><strong>Locatie:</strong> {{ inspection.location }}</p>
          <p class="text-dark"><strong>Inspecteur:</strong> {{ inspection.inspector }}</p>
        </li>
      </ul>
    </section>

    <section aria-labelledby="pending-inspections-label">
      <h2 id="pending-inspections-label" class="text-dark">Openstaande Inspecties</h2>
      <ul>
        <li v-for="(inspection, index) in pendingInspections" :key="index">
          <p class="text-dark"><strong>Inspectie Datum:</strong> {{ inspection.date }}</p>
          <p class="text-dark"><strong>Locatie:</strong> {{ inspection.location }}</p>
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
  background-color: rgba(0, 170, 162, 1);
  color: rgba(41, 52, 57, 1);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.reports h1,
.reports h2 {
  color: rgba(71, 94, 108, 1);
}

@media (max-width: 768px) {
  .reports {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
