<template>
  <div class="w-full md:w-1/3 p-4 mb-2 md:mb-0">
    <div class="jobcard flex flex-col py-4 px-3 border text-center my-4 rounded-md border-blue-400">
      <g-image
        :src="career.img"
        class="mx-auto transform transition duration-500 hover:scale-110 pb-8"
      />
      <h3 class="md:text-lg lg:text-2xl blue mb-3 font-semibold font-heading">
        {{ career.title }}
      </h3>
      <div class="mb-8 text-gray-700 leading-relaxed flex-grow" v-html="career.excerpt"></div>

      <!-- Ensure the button container sticks to the bottom -->
      <div class="mt-auto">
        <g-link
          class="inline-block w-full py-3 mb-2 px-5 leading-none text-center text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded shadow"
          :to="career.path"
          >{{ career.details_btn }}</g-link
        >
        <g-link
          class="inline-block w-full py-3 px-5 leading-none text-center text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded shadow"
          :to="career.apply_btnLink"
          target="_blank"
          >{{ career.apply_btn }}</g-link
        >
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["career"],
};
</script>

<style>
.jobcard{
  min-height: 640px !important;
}



@media (max-width: 425px) {
.jobcard{
  min-height: auto !important;
}

}
</style>
