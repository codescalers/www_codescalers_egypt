<template>
  <div>
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
