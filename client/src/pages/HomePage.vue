<template>
  <header-component></header-component>
  <RealtyComponent></RealtyComponent>
  <ServicesComponent></ServicesComponent>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import RealtyComponent from "@/components/RealtyComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";

export default {
  components: { HeaderComponent, RealtyComponent, ServicesComponent, FooterComponent }
}
</script>