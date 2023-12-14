<template>
  <header-component></header-component>
  <div class="page-b-black">
    <RealtyComponent></RealtyComponent>
    <ServicesComponent></ServicesComponent>
  </div>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import RealtyComponent from "@/components/RealtyComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";

export default {
  components: { HeaderComponent, RealtyComponent, ServicesComponent, FooterComponent },
  mounted() {
    const tables = document.querySelectorAll('.wrapper');
    const tableRealty = tables[0];
    const tableServices = tables[1];
    tableRealty.classList.remove('wrapper');
    tableServices.classList.remove('wrapper');
    const tablesHome = document.querySelector('.page-b-black');
    tablesHome.classList.add('wrapper');
  }
}
</script>