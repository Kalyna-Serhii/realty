<template>
  <div class="page">
    <h1>Редагування нерухомості</h1>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div>
        <div>
          <div v-if="!formData.newPhoto">
            <label for="currentPhoto">Поточне фото:</label>
            <img v-if="formData.photo" :src="serverURL + /uploads/ + formData.photo"
                 alt="Current Photo"
                 class="realtyPhoto"
                 id="currentPhoto"
            >
          </div>

          <label for="photo">Нове фото:</label>
          <input
              type="file"
              id="newPhoto"
              name="photo"
              accept="image/*"
              v-on:change="fileAdded()"
          />
        </div>

        <div>
          <label for="type">Тип:</label>
          <input
              type="text"
              id="type"
              name="type"
              required
              v-model="formData.type"
          />
        </div>

        <div>
          <label for="city">Місто:</label>
          <input
              type="text"
              id="city"
              name="city"
              required
              v-model="formData.city"
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
              v-model="formData.area"
          />
        </div>

        <div>
          <label for="rooms">Кімнати:</label>
          <input
              type="number"
              id="rooms"
              name="rooms"
              required
              v-model="formData.rooms"
          />
        </div>

        <div>
          <label for="price">Ціна:</label>
          <input
              type="number"
              id="price"
              name="price"
              required
              v-model="formData.price"
          />
        </div>

      </div>
      <button type="submit">Зберегти</button>
    </form>
  </div>

</template>

<script>
import api from "../api";
import {serverURL} from "@/api/axiosInstance";

export default {
  data() {
    return {
      serverURL: serverURL,
      formData: {
        id: null,
        photo: null,
        newPhoto: null,
        type: null,
        city: null,
        area: null,
        rooms: null,
        price: null,
      },
    }
  },
  methods: {
    fileAdded() {
      this.formData.newPhoto = true;
    },
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = new FormData(form);
      if (this.formData.newPhoto) {
        formBody.photo = this.formData.newPhoto;
      }
      const response = await api.realty.updateRealty(this.formData.id, formBody);
      if (response && response.status === 200) {
        this.$router.push("/realty");
      }
    },
  },
  async mounted() {
    this.formData.id = this.$route.params.id;
    const realty = await api.realty.getRealtyById(this.formData.id);
    this.formData.photo = realty.photo;
    this.formData.type = realty.type;
    this.formData.city = realty.city;
    this.formData.area = realty.area;
    this.formData.rooms = realty.rooms;
    this.formData.price = realty.price;
  },
};
</script>