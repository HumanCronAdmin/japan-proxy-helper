const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const activeTab = ref('compare');
    const services = ref([]);
    const troubles = ref([]);
    const openAccordion = ref(null);

    onMounted(async () => {
      const [sRes, tRes] = await Promise.all([
        fetch('data/services.json'),
        fetch('data/troubleshooting.json')
      ]);
      services.value = await sRes.json();
      troubles.value = await tRes.json();
    });

    function toggleAccordion(i) {
      openAccordion.value = openAccordion.value === i ? null : i;
    }

    return { activeTab, services, troubles, openAccordion, toggleAccordion };
  }
}).mount('#app');
