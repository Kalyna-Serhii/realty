<template>
  <div class="page">
    <h1>Реєстрація</h1>
    <form @submit.prevent="submitForm">
      <div>
        <div>
          <label for="name">Ім’я:</label>
          <input
              type="text"
              id="name"
              name="name"
              v-model="formData.name"
              @input="validateName"
          />
          <div class="error" v-if="formErrors.name">
            {{ formErrors.name }}
          </div>
        </div>

        <div>
          <label for="surName">Прізвище:</label>
          <input
              type="text"
              id="surname"
              name="surname"
              v-model="formData.surName"
              @input="validateSurName"
          />
          <div class="error" v-if="formErrors.surName">
            {{ formErrors.surName }}
          </div>
        </div>

        <div>
          <label for="email">Email:</label>
          <input
              type="email"
              id="email"
              name="email"
              v-model="formData.email"
              @input="validateEmail"
          />
          <div class="error" v-if="formErrors.email">
            {{ formErrors.email }}
          </div>
        </div>

        <div>
          <label for="password">Пароль:</label>
          <input
              id="password"
              type="password"
              name="password"
              v-model="formData.password"
              @input="validatePassword"
          />
          <div class="error" v-if="formErrors.password">
            {{ formErrors.password }}
          </div>
        </div>

        <div>
          <label for="phone">Телефон:</label>
          <input
              type="tel"
              id="phone"
              name="phone"
              v-model.lazy="formData.phone"
              @input="validatePhone"
              @change="validatePhone"
          />
          <div class="error" v-if="formErrors.phone">
            {{ formErrors.phone }}
          </div>
        </div>

        <div>
          <label for="role">Роль:</label>
          <select
              id="role"
              name="role"
              v-model="formData.role">
            <option value="user">Користувач</option>
            <option value="admin">Адміністратор</option>
          </select>
        </div>
      </div>
      <button type="submit">Зареєструватись</button>
    </form>
  </div>

</template>

<script>
import api from "../api";
import inputMask from "../utils/InputMask";
import getFormBody from "../utils/getFormBody";

export default {
  data() {
    return {
      formData: {
        name: "",
        surName: "",
        email: "",
        password: "",
        phone: "",
        role: "",
      },
      formErrors: {
        name: null,
        surName: null,
        email: null,
        password: null,
        phone: null,
        role: null,
      },
    };
  },
  async mounted() {
    const element = document.getElementById("phone");
    inputMask(element);
  },
  methods: {
    async submitForm() {
      const form = document.querySelector("form")
      const formBody = getFormBody(form);
      const response = await api.users.createUser(formBody);
      if (response && response.status === 200) {
        this.$router.push("/");
      }
    },
    validateEmail() {
      if (!/^\S+@\S+\.\S+$/.test(this.formData.email)) {
        this.formErrors.email = "Невірний формат email";
      } else {
        this.formErrors.email = null;
      }
    },
    validatePassword() {
      if (this.formData.password.length < 8) {
        this.formErrors.password =
            "Пароль повинен містити принаймні 8 символів";
      } else if (!this.formData.password.match(/[0-9]/)) {
        this.formErrors.password = "Пароль має містити принаймні одну цифру";
      } else if (!this.formData.password.match(/[A-Z]/)) {
        this.formErrors.password =
            "Пароль має містити принаймні одну заголовну літеру";
      } else {
        this.formErrors.password = null;
      }
    },
    validateSurName() {
      const surName = this.formData.surName;

      if (
          surName.length < 2 ||
          /[0-9]/.test(surName) ||
          surName.indexOf("-") !== surName.lastIndexOf("-")
      ) {
        this.formErrors.surName = "Невірний формат прізвища";
      } else {
        this.formErrors.surName = null;
      }
    },
    validateName() {
      const name = this.formData.name;

      if (
          name.length < 2 ||
          /[0-9]/.test(name) ||
          name.indexOf("-") !== name.lastIndexOf("-")
      ) {
        this.formErrors.name = "Невірний формат імені";
      } else {
        this.formErrors.name = null;
      }
    },
    validatePhone() {
      const phoneRegex = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;

      if (!phoneRegex.test(this.formData.phone)) {
        this.formErrors.phone = "Невірний формат номера телефону";
      } else {
        this.formErrors.phone = null;
      }
    },
  },
};
</script>