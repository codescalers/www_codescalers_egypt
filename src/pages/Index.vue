<template>
  <Layout>
    <Carousel :items="this.$page.markdownPage.carousel" />
    <Description :sections="this.$page.markdownPage.description" />
    <Opening :item="this.$page.markdownPage.opening" />
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        carousel {
          id
          titleInBlue
          title
          img
          btn
          btn_link
          content
        }
        description {
          id
          title
          img
          content
        }
        opening{
          id
          img
          btn
          btn_link
        }
    }  
  }

</page-query>

<script>
import Carousel from "../components/Carousel.vue";
import Description from "../components/Description.vue";
import Opening from "../components/Opening.vue";

export default {
  components: {
    Carousel,
    Description,
    Opening,
  },
};
</script>

