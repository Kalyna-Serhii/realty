<template>

</template>

<script>
import api from '@/api';
import {deleteFromLocalStorage} from "@/utils/LocalStorage";

export default {
  methods: {
    async submitRequest() {
      const response = await api.auth.logout();
      if (response && response.status === 200) {
        deleteFromLocalStorage();
        this.$router.push('/');
      }
    },
  },
  async mounted() {
    await this.submitRequest()
  },
}
</script>