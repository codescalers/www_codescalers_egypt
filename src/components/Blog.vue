<template>
  <section class="py-12 bg-white">
    <div class="md:max-w-7xl mx-auto flex flex-wrap">
      <div class="md:w-1/3 w-full pr-10">
        <div class="py-2 px-6 my-4">
          <Search />
          <Categories :categories="categories" />
        </div>
      </div>

      <div class="md:w-2/3 flex flex-wrap justify-center mx-auto">
        <PostCard v-for="(post, i) in posts" :key="i" :post="post.node" />
        <Pager class="pagination" :info="info" />
      </div>
    </div>
  </section>
</template>

<script>
import Search from "../components/Search.vue";
import Categories from "../components/Categories.vue";
import PostCard from "../components/PostCard.vue";
import { Pager } from "gridsome";

export default {
  components: {
    Search,
    Categories,
    PostCard,
    Pager,
  },
  props: ["posts", "categories", "info"],
  computed: {
    items() {
      let csItems = [];
      this.categories.belongsTo.edges.map((edge) => {
        if (Array.isArray(edge.node.category)) {
          if (edge.node.category.includes("cloud")) csItems.push(edge.node);
        } else {
          csItems.push(edge.node);
        }
      });
      return csItems;
    },
  },
};
</script>