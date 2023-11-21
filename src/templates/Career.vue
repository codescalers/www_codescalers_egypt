<template>
  <Layout>
    <section class="py-16 md:py-24 bg-gray-200">
      <div class="container px-4 md:px-20 mx-auto">
        <div class="md:max-w-5xl mx-auto mb-2"></div>
        <div class="md:max-w-8">
          <div class="grid md:grid-cols-2">
            <div
              class="md:order-12 p-10 mx-auto transform transition duration-500 hover:scale-110"
            >
              <g-image :src="$page.careers.img" class="w-3/4 mx-auto" />
            </div>
            <div
              class="mb-10 mx-auto max-w-max overflow-hidden rounded-lg md:order-1"
              v-html="$page.careers.content"
            ></div>
          </div>
          <JobActions />
        </div>
      </div>
    </section>
  </Layout>
</template>
<page-query>
  query($id: ID!) {
    careers(id: $id) {
      id
      path
      content
      excerpt
      img
      title
      details_btn
      apply_btn
      apply_btnLink
    }    
  }
</page-query>

<script>
import JobActions from "../components/JobActions.vue";
export default {
  components: {
    JobActions,
  },
};
</script>
