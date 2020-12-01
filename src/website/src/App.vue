<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <p class="versionIndicator">
    <small class="ml-4"><b>App Version: </b>{{ AppVersion }}</small>
  </p>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ConfigProvider from "@/helpers/configprovider";

@Options({})
export default class Application extends Vue {
  get AppVersion() {
    return ConfigProvider.getAppVersion();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.versionIndicator {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 2em;
}
</style>
