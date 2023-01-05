<template>
  <div class="w-full md:w-1/3 p-2 mb-2 md:mb-0 text-center">
    <div class="py-2 px-3 border my-4 rounded-md border-blue-400">
      <g-link class="learn" :to="post.path">
        <g-image
          :src="post.image"
          width="200"
          class="mx-auto transform transition duration-500 hover:scale-110 py-8"
        />

        <h3 class="text-xl blue mb-3 font-normal font-heading uppercase">
          {{ post.title }}
        </h3>
        <div
          class="mb-2 text-gray-700 leading-tight"
          v-html="post.excerpt"
        ></div>

        <div class="flex py-5 text-center justify-center">
          <div class="pr-2">
            <!-- <g-image
              :src="post.authors"
              class="rounded-full"
              width="30"
              alt=""
            /> -->
          </div>
          <p
            class="flex items-center pr-1"
            v-for="author in post.authors"
            :key="author"
          >
            {{ author.replace("_", " ") }}
          </p>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
