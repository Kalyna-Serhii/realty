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
          <input
              type="text"
              id="type"
              name="type"
              required
          />
        </div>

        <div>
          <label for="city">Місто:</label>
          <input
              type="text"
              id="city"
              name="city"
              required
          />
        </div>

        <div>
          <label for="area">Площа:</label>
          <input
              type="number"
              id="area"
              name="area"
              step="0.1"
              required
          />
        </div>

        <div>
          <label for="rooms">Кімнати:</label>
          <input
              type="number"
              id="rooms"
              name="rooms"
              required
          />
        </div>

        <div>
          <label for="price">Ціна:</label>
          <input
              type="number"
              id="price"
              name="price"
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
  methods: {
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = new FormData(form);
      const response = await api.realty.createRealty(formBody);
      if (response && response.status === 200) {
        this.$router.push("/realty");
      }
    },
  },
};
</script>