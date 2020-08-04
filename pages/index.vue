<template>
  <v-flex xs5 class="login">
    <v-layout row justify-center>
      <v-flex d-flex justify-center>
        <img
          src="/v.png"
          alt="Vuetify.js"
        >
      </v-flex>
    </v-layout>
    <v-text-field
      v-model.trim="name"
      :rules="nameRules"
      label="Имя"
      outlined
      hide-details="auto"
      class="mt-4"
    />
    <v-text-field
      v-model.trim="password"
      type="password"
      :rules="passRules"
      label="Пароль"
      outlined
      class="mt-4"
    />
    <v-checkbox v-model="rememberMe" label="Запомнить меня"/>
    <v-btn @click="login">Войти</v-btn>
  </v-flex>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      password: '',
      rememberMe: false,
      nameRules: [
        value => !!value || 'Обязательное поле',
        value => (value && value.length >= 5) || 'Минимум 5 символов',
        value => (!value.match("\ ")) || 'Запрещённые символы',
      ],
      passRules: [
        value => !!value || 'Обязательное поле',
        value => (value && value.length >= 6) || 'Минимум 6 символов',
        value => (!value.match("\ ")) || 'Запрещённые символы',
      ],
    }
  },
  methods: {
    login() {
      console.log(this.name, this.password, this.rememberMe)
      this.$router.push({name: 'profile-view'})
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 20vh;
  margin-bottom: 20vh;
}
</style>
