<template>
  <div class="page">
    <h1>Реєстрація</h1>
    <form @submit.prevent="addRow">
      <div>
        <div>
          <label for="email">Email:</label>
          <input
              type="email"
              id="email"
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
              type="password"
              v-model="formData.password"
              @input="validatePassword"
          />
          <div class="error" v-if="formErrors.password">
            {{ formErrors.password }}
          </div>
        </div>

        <div>
          <label for="surName">Прізвище:</label>
          <input
              type="text"
              id="surName"
              v-model="formData.surName"
              @input="validateSurName"
          />
          <div class="error" v-if="formErrors.surName">
            {{ formErrors.surName }}
          </div>
        </div>

        <div>
          <label for="name">Ім’я:</label>
          <input
              type="text"
              id="name"
              v-model="formData.name"
              @input="validateName"
          />
          <div class="error" v-if="formErrors.name">
            {{ formErrors.name }}
          </div>
        </div>

        <div>
          <label for="middleName">По батькові:</label>
          <input
              type="text"
              id="middleName"
              v-model="formData.middleName"
              @input="validateMiddleName"
          />
          <div class="error" v-if="formErrors.middleName">
            {{ formErrors.middleName }}
          </div>
        </div>

        <div>
          <label for="dob">Дата народження:</label>
          <input
              type="date"
              id="dob"
              v-model="formData.dob"
              :max="maxDate"
              @input="validateDob"
          />
          <div class="error" v-if="formErrors.dob">
            {{ formErrors.dob }}
          </div>
        </div>

        <div>
          <label for="group">Вибір групи:</label>
          <select
              id="group"
              v-model="formData.group"
              @change="validateGroup"
          >
            <option value=""></option>
            <option value="IA-21">ІА-21</option>
            <option value="IA-22">ІА-22</option>
            <option value="IA-23">ІА-23</option>
            <option value="IA-24">ІА-24</option>
          </select>
          <div class="error" v-if="formErrors.group">
            {{ formErrors.group }}
          </div>
        </div>

        <div>
          <label for="phone">Телефон:</label>
          <input
              type="text"
              id="phone"
              v-model="formData.phone"
              @input="validatePhone"
          />
          <div class="error" v-if="formErrors.phone">
            {{ formErrors.phone }}
          </div>
        </div>

        <div>
          <div>
            <label for="male">Чоловік</label>
            <input
                type="radio"
                id="male"
                v-model="formData.gender"
                value="male"
                @change="validateGender"
            />
            <label for="female">Жінка</label>
            <input
                type="radio"
                id="female"
                v-model="formData.gender"
                value="female"
                @change="validateGender"
            />
          </div>
          <div class="error" v-if="formErrors.gender">
            {{ formErrors.gender }}
          </div>
        </div>

        <div>
          <label for="file">Завантажити файл:</label>
          <input type="file" id="fileInput"/>
        </div>
      </div>
      <button type="button" @click="addRow">Додати</button>
    </form>
  </div>

</template>

<script>
import InputMask from "inputmask";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        surName: "",
        name: "",
        middleName: "",
        dob: "",
        group: "",
        phone: "",
        gender: "",
        file: "",
      },
      formErrors: {
        email: null,
        password: null,
        surName: null,
        name: null,
        middleName: null,
        dob: null,
        group: null,
        phone: null,
        gender: null,
        file: null,
      },
      tableData: [],
      selectedItems: [],
      rowSelection: {},
      maxDate: new Date().toISOString().split("T")[0],
    };
  },
  mounted() {
    this.applyPhoneMask()
  },
  methods: {
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
    validateMiddleName() {
      const middleName = this.formData.middleName;

      if (
          middleName.length < 2 ||
          /[0-9]/.test(middleName) ||
          middleName.indexOf("-") !== middleName.lastIndexOf("-")
      ) {
        this.formErrors.middleName = "Невірний формат по батькові";
      } else {
        this.formErrors.middleName = null;
      }
    },
    validateDob() {
      const selectedDate = new Date(this.formData.dob);
      const currentDate = new Date();

      if (selectedDate > currentDate) {
        this.formErrors.dob = "Ви не можете вибрати дату в майбутньому";
      } else {
        this.formErrors.dob = null;
      }
    },
    validateGroup() {
      if (!this.formData.group) {
        this.formErrors.group = "Поле Вибір групи не може бути порожнім";
      } else {
        this.formErrors.group = null;
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
    validateGender() {
      if (
          this.formData.gender !== "male" &&
          this.formData.gender !== "female"
      ) {
        this.formErrors.gender =
            "Будь ласка, оберіть стать (чоловік або жінка)";
      } else {
        this.formErrors.gender = null;
      }
    },
    addRow() {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
      this.formData.file = file;
      document.getElementById('fileInput').value = '';

      const email = this.formData.email.trim();
      const password = this.formData.password.trim();
      const surName = this.formData.surName.trim();
      const name = this.formData.name.trim();
      const middleName = this.formData.middleName.trim();
      const dob = this.formData.dob.trim();
      const group = this.formData.group.trim();
      const phone = this.formData.phone.trim();
      const gender = this.formData.gender.trim();

      this.formErrors.email = null;
      this.formErrors.password = null;
      this.formErrors.surName = null;
      this.formErrors.name = null;
      this.formErrors.middleName = null;
      this.formErrors.dob = null;
      this.formErrors.group = null;
      this.formErrors.phone = null;
      this.formErrors.gender = null;

      if (
          email &&
          password &&
          surName &&
          name &&
          middleName &&
          dob &&
          group &&
          phone &&
          gender
      ) {
        this.validateEmail();
        this.validatePassword();
        this.validateSurName();
        this.validateName();
        this.validateMiddleName();
        this.validateDob();
        this.validateGroup();
        this.validatePhone();
        this.validateGender();

        if (
            !this.formErrors.email &&
            !this.formErrors.password &&
            !this.formErrors.surName &&
            !this.formErrors.name &&
            !this.formErrors.middleName &&
            !this.formErrors.dob &&
            !this.formErrors.group &&
            !this.formErrors.phone &&
            !this.formErrors.gender

        ) {
          const newRow = {
            email: email,
            password: password,
            surName: surName,
            name: name,
            middleName: middleName,
            dob: dob,
            group: group,
            phone: phone,
            gender: gender,
            file: file,
          };

          this.tableData.push(newRow);

          this.formData.email = "";
          this.formData.password = "";
          this.formData.surName = "";
          this.formData.name = "";
          this.formData.middleName = "";
          this.formData.dob = "";
          this.formData.group = "";
          this.formData.phone = "";
          this.formData.gender = "";
          this.formData.file = "";

          this.formErrors.email = null;
          this.formErrors.password = null;
          this.formErrors.surName = null;
          this.formErrors.name = null;
          this.formErrors.middleName = null;
          this.formErrors.dob = null;
          this.formErrors.group = null;
          this.formErrors.phone = null;
          this.formErrors.gender = null;
        }
      } else {
        if (!email) {
          this.formErrors.email = "Поле Email не може бути порожнім";
        }
        if (!password) {
          this.formErrors.password = "Поле Пароль не може бути порожнім";
        }
        if (!surName) {
          this.formErrors.surName = "Поле Прізвище не може бути порожнім";
        }
        if (!name) {
          this.formErrors.name = "Поле Ім'я не може бути порожнім";
        }
        if (!middleName) {
          this.formErrors.middleName = "Поле По батькові не може бути порожнім";
        }
        if (!dob) {
          this.formErrors.dob = "Поле Дата не може бути порожнім";
        }
        if (!group) {
          this.formErrors.group = "Поле Вибір групи не може бути порожнім";
        }
        if (!phone) {
          this.formErrors.phone = "Поле Телефон не може бути порожнім";
        }
        if (!gender) {
          this.formErrors.gender = "Поле Стать не може бути порожнім";
        }
      }
    },
    performAction(action) {
      if (action === "delete") {
        const indexesToDelete = Object.keys(this.rowSelection).filter(
            (key) => this.rowSelection[key]
        );
        indexesToDelete.sort((a, b) => b - a).forEach((index) => {
          this.tableData.splice(index, 1);
        });
      } else if (action === "duplicate") {
        const indexesToDuplicate = Object.keys(this.rowSelection).filter((key) => this.rowSelection[key]);

        indexesToDuplicate.forEach((index) => {
          const duplicatedRow = { ...this.tableData[index] };
          this.tableData.push(duplicatedRow);
        });
      }

      this.rowSelection = {};
    },
    applyPhoneMask() {
      const element = document.getElementById("phone");
      const maskOptions = {
        mask: "+38(999)-999-99-99",
        lazy: true,
      };

      const mask = InputMask(maskOptions);
      mask.mask(element);
      element.focus();
    },
  },
};
</script>