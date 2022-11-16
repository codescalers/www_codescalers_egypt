<template>
  <Layout>
    <Blog
      :posts="$page.entries.edges"
      :info="$page.entries.pageInfo"
      :categories="$page.topics.edges"
    />
  </Layout>
</template>

<page-query>
query($page: Int){
  entries: allBlog(perPage: 6, page: $page, sortBy: "created", order: DESC) @paginate{
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        excerpt
        category{
          id
          title
        }
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
import Blog from "../components/Blog.vue";
export default {
  components: {
    Blog,
  },
};
</script>