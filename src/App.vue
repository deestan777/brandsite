<template>
  <div id="app">
    <div id="nav">
      <div class="nav__logo">
        <a href="" class="logo__link" >
        <div class="vHeader__logo">
          <img alt="Vue logo" src="./assets/logo.png" class="logo" />
        </div>
        <div class="vHeader__text">
          <h1>
            broker <br />
            advice
          </h1>
        </div>
        </a>
      </div>
      <div class="nav__links">
        <router-link to="/">{{ $t("home") }}</router-link>
        <router-link to="/about">{{ $t("about") }}</router-link>
        <router-link to="/education">{{ $t("education") }}</router-link>
        <router-link to="/room">{{ $t("room") }}</router-link>
      </div>
      <div class="sign-in">
        <router-link to="/sign-up"><button>{{ $t("signUp") }}</button></router-link>
        <router-link to="/sign-in"><button>{{ $t("signIn") }}</button></router-link>
      </div>
      <div class="flag">
        <a @click="setLocale('ru')" href="#">
          <flag class="locale" iso="ru"></flag>
        </a>
        <br />
        <a @click="setLocale('en')" href="#">
          <flag class="locale" iso="gb"></flag>
        </a>
      </div>
    </div>

    <vHeader />
    <router-view />
  </div>
</template>
<script>
import "./less/app.less";
import vHeader from "./components/header.vue";
export default {
  name: "app",
  components: {
    vHeader
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>
