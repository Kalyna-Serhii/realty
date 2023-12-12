<template>
  <footer>
    <a href="https://t.me/woocle1">
      <font-awesome-icon :icon="['fab', 'telegram']" /> Telegram
    </a>
    <a href="tel:+380989143506">
      <font-awesome-icon :icon="['fas', 'phone']" /> Зателефонувати
    </a>
    <a href="mailto:andriitiuska@gmail.com">
      <font-awesome-icon :icon="['fas', 'envelope']" /> Написати нам
    </a>
    <a href="viber://chat?number=+380687246753">
      <font-awesome-icon :icon="['fab', 'viber']" /> Viber
    </a>
  </footer>

</template>

<script>

import {defineComponent} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {FontAwesomeIcon}
})
</script>