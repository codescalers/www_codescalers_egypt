<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container h-screen sm:pxi-0 px-2 mx-auto overflow-x-hidden pt-20">
      <div class="pt-8">
        <section class="post-header container mx-auto px-0 border-b">
          <h2 class="text-4xl font-medium leading-none mt-0">
            {{ $page.blog.title }}
          </h2>
          <div
            class="text-xl pt-4 pb-2 text-gray-700"
            v-html="$page.blog.excerpt"
          ></div>
        </section>
        <section class="post-author-list mb-2 mx-0">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <!-- <ul class="list-none flex author-list m-0" >
                <li
                  v-for="author in $page.blog.authors"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link :to="author.path" v-tooltip="author.name">
                    <g-image
                      :src="author.image"
                      :alt="author.name"
                      class="
                        h-8
                        w-8
                        sm:h-10 sm:w-10
                        rounded-full
                        bg-gray-200
                        border-2 border-white
                      "
                    />
                  </g-link>
                </li>
              </ul> -->
            </div>

            <div class="flex pb-4 flex-col text-xs leading-none uppercase">
              <p>
                <span
                  v-for="(author, index) in $page.blog.authors"
                  :key="author.id"
                >
                  <g-link
                    :to="author.path"
                    v-tooltip="author.name"
                    class="hover:underline"
                    >{{ author.name }}</g-link
                  >
                  <span v-if="index < $page.blog.authors.length - 1">,</span>
                </span>
              </p>
              <p class="text-gray-700">
                <g-link :to="$page.blog.path">
                  <time :datetime="$page.blog.datetime">{{
                    $page.blog.humanTime
                  }}</time>
                </g-link>
                <!-- &nbsp;&middot;&nbsp; {{ $page.blog.timeToRead }} min read -->
                <!-- &nbsp;&middot;&nbsp; -->
                <g-link :to="$page.blog.path">
                  <time :datetime="$page.blog.datetime">{{
                    $page.blog.startDate
                  }}</time>
                </g-link>
              </p>
            </div>
          </div>
        </section>
      </div>
      <!-- <section class="post-image mx-auto w-full">
        <g-image :src="$page.blog.image"></g-image>
      </section> -->

      <div class="py-4">
        <section
          class="post-content container mx-auto relative font-serif text-gray-700"
        >
          <div
            class="post-content-text text-xl"
            v-html="$page.blog.content"
          ></div>
        </section>

        <section class="post-tags container mx-auto relative py-10">
          <g-link
            v-for="tag in $page.blog.tags"
            :key="tag.id"
            :to="tag.path"
            class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
            >{{ tag.title.replace("_", " ") }}</g-link
          >
        </section>
      </div>
    </div>

    <section
      class="post-related text-gray-700 pt-10 border-b border-b-gray-900"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4"></div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    blog(id: $id) {
      title
      path
      image(width:1600, height:800)
      image_caption
      content
      excerpt
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      timeToRead
      authors
    }

    previous: blog(id: $previousElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      authors
    }

    next: blog(id: $nextElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      authors
    }    
  }
</page-query>

<script>
export default {
  mounted() {
    let parent = document.querySelectorAll(".gridsome-highlight");
    parent.forEach((el) => {
      let button = document.createElement("button");
      button.innerHTML = "Copy";
      button.addEventListener("click", function(e) {
        copy(e);
        button.innerHTML = "Copied!";
      });
      el.append(button);
    });

    function copy(e) {
      let text = e.target.previousElementSibling.firstChild;
      navigator.clipboard.writeText(text.innerText);
    }
  },
};
</script>

<style scoped>
.post-card-excerpt,
.post-content-text {
  font-family: "Roboto", sans-serif !important;
  line-height: 1.2;
}
</style>
