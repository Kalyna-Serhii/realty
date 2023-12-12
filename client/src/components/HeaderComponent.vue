<template>
  <header>
    <div class="lds-heart">
      <div></div>
    </div>
    <div>
      <router-link to="/" class="title">Real estate agency</router-link>
    </div>
    <ul>
<!--      <li>-->
<!--        <router-link to="/">Головна</router-link>-->
<!--      </li>-->
      <li>
        <router-link to="/realty">Нерухомість</router-link>
      </li>
      <li>
        <router-link to="/services">Сервіси</router-link>
      </li>
      <li>
        <router-link to="/reviews">Відгуки</router-link>
      </li>
      <li>
        <router-link to="/deals">Угоди</router-link>
      </li>
      <li>
        <router-link to="/users">Користувачі</router-link>
      </li>
      <li class="authorization-button">
        <router-link to="/login">Увійти</router-link>
      </li>
      <li class="registration-button">
        <router-link to="/register">Зареєструватись</router-link>
      </li>
      <li class="authorization-button">
        <router-link to="/logout">Вийти</router-link>
      </li>
    </ul>
  </header>
</template>

<script>

</script>