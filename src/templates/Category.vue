<template>
  <Layout>
    <section class="py-12 bg-white">
      <div class="md:max-w-7xl mx-auto flex flex-wrap">
        <div class="md:w-1/3 w-full pr-10">
          <div class="py-2 px-6 my-4">
            <Search />
            <Categories :categories="$page.topics.edges" />
          </div>
        </div>

        <div class="md:w-2/3 flex flex-wrap mx-auto">
          <PostCard v-for="(item, i) in items" :key="i" :post="item" />
          <Pager
            class="pagination"
            :info="$page.blogCategory.belongsTo.pageInfo"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    blogCategory(id: $id) {
      title
      path
      belongsTo{
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Blog {
              path
              title
              excerpt
              image(width:800)
              path
              datetime : created
            }
          }
        }
      }
    }
    topics: allBlogCategory {
    edges{
      node{
        id
				title
        path
        belongsTo {
          edges {
            node{
              id
            }
          }
        }
      }
    }
  }
} 
</page-query>

<script>
import Search from "../components/Search.vue";
import Categories from "../components/Categories.vue";
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    Search,
    Categories,
    PostCard,
  },
  computed: {
    items() {
      let csItems = [];
      this.$page.blogCategory.belongsTo.edges.map((edge) => {
        csItems.push(edge.node);
      });
      return csItems;
    },
  },
};
</script>