<template>
  <div class="page">
    <h1>Створення нерухомості</h1>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div>
        <div>
          <label for="photo">Фото:</label>
          <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              required
          />
        </div>

        <div>
          <label for="type">Тип:</label>
          <select
              id="type"
              name="type"
              required
              v-model="type"
          >
            <option value="Квартира">Квартира</option>
            <option value="Апартаменти">Апартаменти</option>
            <option value="Приватний будинок">Приватний будинок</option>
            <option value="Комерційна нерухомість">Комерційна нерухомість</option>
          </select>
        </div>

        <div>
          <label for="city">Місто:</label>
          <select
              id="city"
              name="city"
              v-model="city"
              required
          >
            <option v-for="(city, index) in cities" :key="index" :value="city">{{ city }}</option>
          </select>
        </div>

        <div>
          <label for="area">Площа:</label>
          <input
              type="number"
              id="area"
              name="area"
              step="0.1"
              min="1"
              required
          />
        </div>

        <div>
          <label for="rooms">Кімнати:</label>
          <input
              type="number"
              id="rooms"
              name="rooms"
              min="1"
              required
          />
        </div>

        <div>
          <label for="price">Ціна:</label>
          <input
              type="number"
              id="price"
              name="price"
              min="1"
              required
          />
        </div>

      </div>
      <button type="submit">Створити</button>
    </form>
  </div>

</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      type: "",
      cities: "",
    }
  },
  methods: {
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = new FormData(form);
      const response = await api.realty.createRealty(formBody);
      if (response && response.status === 200) {
        this.$router.push("/realty");
      }
    },
    async getCities() {
      const cities = await fetch('/UA.txt');
      const citiesInText = await cities.text();
      const citiesInSplit = citiesInText.split('\n').map(city => city.trim());
      this.cities = citiesInSplit;
    },
  },
  async mounted() {
    await this.getCities();
  }
};
</script>