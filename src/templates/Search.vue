<template>
  <layout>
    
    <section class="py-12 bg-white">
      <div class="md:max-w-7xl mx-auto flex flex-wrap">
        <div class="md:w-1/3 w-full pr-10">
          <div class="py-2 px-6 my-4">
            <Search />
            <Categories :categories="$page.topics.edges" />
          </div>
        </div>

        <div class="md:w-2/3 flex flex-wrap justify-center mx-auto">
          <div class="inline-flex" v-if="searchResults.length > 0">
            <PostCard
              v-for="(post, i) in searchResults"
              :key="i"
              :post="post.node"
            />
          </div>
          <div class="inline-flex" v-else>
            <h1 class="">No results</h1>
            <p>OOPS! Something went wrong here</p>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>
<page-query>

query{
  blogs: allBlog {
    edges {
      node {
        id
        title
        excerpt
        image(width:800)
        path
        humanTime : created(format:"DD MMM YYYY")
        datetime : created
        authors
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
  data: () => ({
    q: "",
  }),
  computed: {
    searchResults() {
      return this.$page.blogs.edges.filter((post) => {
        return post.node.title
          .toLowerCase()
          .includes(this.q.toLowerCase().trim());
      });
    },
  },
  mounted() {
    this.q = new URL(location.href).searchParams.get("query");
  },
};
</script>
