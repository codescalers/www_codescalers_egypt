<template>
  <Layout>
    <section class="py-16 md:py-24 bg-gray-200">
      <div class="container px-4 mx-auto">
        <div class="md:max-w-5xl mx-auto mb-2"></div>
        <div class="md:max-w-6xl mx-auto" v-html="$page.careers.content"></div>
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
