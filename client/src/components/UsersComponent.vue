<template>
  <div class="wrapper">
    <div id="table-div">
      <button @click="toCreatePage()">Створити</button>
      <table id="table">
        <tr>
          <td>Ім’я</td>
          <td>Прізвище</td>
          <td>Email</td>
          <td>Номер</td>
          <td>Роль</td>
          <td>Керування</td>
        </tr>
        <tr v-for="(item, index) in users" :key="index">
          <td>{{ item.name }}</td>
          <td class="item">{{ item.surname }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.role }}</td>
          <td>
            <button @click="toEditPage(item.id)">Редагувати</button>
            <button @click="deleteUser(item.id)">Видалити</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import api from '@/api';

export default {
  data() {
    return {
      users: [],
    }
  },

  methods: {
    async getUsers() {
      const response = await api.users.getUsers();
      this.users = response;
    },
    async toCreatePage() {
      this.$router.push('/users/new');
    },
    async toEditPage(id) {
      this.$router.push(`/user/${id}`);
    },
    async deleteUser(id) {
      await api.users.deleteUser(id);
      await this.getUsers();
    },
  },

  async mounted() {
    await this.getUsers();
  },
}
</script>