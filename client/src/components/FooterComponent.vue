<template>
  <footer>
    <a href="https://t.me/woocle1">
      <font-awesome-icon :icon="['fab', 'telegram']"/>
      Служба підтримки
    </a>
    <router-link to="/contacts">
  <span>
    <font-awesome-icon :icon="['fas', 'phone']"/>
    Контакти
  </span>
    </router-link>
    <router-link to="/faq">
  <span>
    <font-awesome-icon :icon="['fas', 'comments']"/>
    FAQ
  </span>
    </router-link>
  </footer>
</template>

<script>

import {defineComponent} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {FontAwesomeIcon}
})
</script>