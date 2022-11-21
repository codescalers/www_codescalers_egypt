<template>
  <div class="flex flex-col my-3 w-full">
    <p class="my-4 text-lg leading-5 capitalize">Categories</p>
    <div class="flex justify-start flex-col w-full md:w-auto items-start pb-1">
      <g-link
        to="/cs-academy"
        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-blue-500 focus:text-white hover:bg-blue-500 text-gray-600 rounded px-3 py-2 w-full md:w-52"
      >
        All
      </g-link>
      <div v-for="category in categories" :key="category.node.id">
        <g-link
          :to="$url(category.node.path)"
          class="flex justify-start items-center space-x-6 hover:text-white focus:bg-blue-500 focus:text-white hover:bg-blue-500 text-gray-600 rounded px-3 py-2 w-full md:w-52"
        >
          {{ category.node.title }}
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"],
  mounted() {
    console.log(this.categories);
  },
};
</script>
