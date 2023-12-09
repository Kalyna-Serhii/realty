<template>
  <div id="table-div">
    <button @click="toCreatePage()">Створити</button>
    <table id="table">
      <tr>
        <td>Фото</td>
        <td>Тип</td>
        <td>Місто</td>
        <td>Площа</td>
        <td>Кімнати</td>
        <td>Ціна</td>
        <td>Керування</td>
      </tr>
      <tr v-for="(item, index) in realty" :key="index">
        <td>
          <img v-if="item.photo" :src="serverURL + /uploads/ + item.photo" alt="photo" class="realtyPhoto">
        </td>
        <td>{{ item.type }}</td>
        <td>{{ item.city }}</td>
        <td>{{ item.area }}</td>
        <td>{{ item.rooms }}</td>
        <td>${{ item.price }}</td>
        <td>
          <button @click="toEditPage(item.id)">Редагувати</button>
          <button @click="deleteRealty(item.id)">Видалити</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import api from '@/api';
import {serverURL} from "@/api/axiosInstance";

export default {
  data() {
    return {
      realty: [],
      serverURL: serverURL,
    }
  },

  methods: {
    async getRealty() {

      const response = await api.realty.getRealty();
      this.realty = response;
    },
    async toCreatePage() {
      this.$router.push('/realty/new');
    },
    async toEditPage(id) {
      this.$router.push(`/realty/${id}`);
    },
    async deleteRealty(id) {
      await api.realty.deleteRealty(id);
      await this.getRealty();
    },
  },

  async mounted() {
    await this.getRealty();
  },
}
</script>