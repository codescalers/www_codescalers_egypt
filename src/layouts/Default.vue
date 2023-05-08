<template>
  <div class="content">
    <Navbar :navigation="$static.navigation" />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  
    navigation(id: "navigation"){
      navLinks{
        name
        link
      }
    }
  }
  </static-query>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
.content {
  min-height: 100%;
}
</style>