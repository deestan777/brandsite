<template>
  <div id="app">
    <vHeader />
    <div id="nav">
      <router-link to="/">{{ $t("home") }}</router-link>

      <router-link to="/about">{{ $t("about") }}</router-link>

      <router-link to="/education">{{ $t("education") }}</router-link>

      <router-link to="/room">{{ $t("room") }}</router-link>

      <router-link to="/sign-in">{{ $t("signIn") }}</router-link>

      <div class="flag">
        <a @click="setLocale('ru')" href="#">
          <flag class="locale" iso="ru"></flag>
        </a>
        <a @click="setLocale('en')" href="#">
          <flag class="locale" iso="gb"></flag>
        </a>
      </div>
    </div>
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
