<template>
  <div class="w-full md:w-1/3 p-4 mb-2 md:mb-0">
    <div class="py-4 px-3 border text-center my-4 rounded-md border-blue-400">
      <g-image
        :src="career.img"
        class="mx-auto transform transition duration-500 hover:scale-110 pb-8"
      />
      <!-- <i class="fa-brands fa-ubuntu blue text-5xl pb-2"></i> -->
      <h3 class="md:text-lg lg:text-2xl blue mb-3 font-semibold font-heading">
        {{ career.title }}
      </h3>
      <div
        class="mb-8 text-gray-700 leading-relaxed"
        v-html="career.excerpt"
      ></div>
      <!-- <h3 class="mb-3 font-semibold font-heading">Includes</h3>
            <ul class="mb-8 list-inside list-disc text-gray-700">
              <li class="mb-1">Full time</li>
              <li class="mb-1">Min. 3 Years</li>
              <li class="mb-1">Junior Level</li>
              <li class="mb-1">Knowledge of English (required).</li>
            </ul> -->
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
  <!-- <div class="w-full md:w-1/3 p-4 mb-2 md:mb-0">
          <div class="py-8 px-6 my-4 rounded-md dark_bg">
            <i class="fa-brands fa-ubuntu text-white text-5xl pb-2"></i>
            <h3 class="text-3xl white_blue mb-3 font-semibold font-heading">
              Software Engineer Internship
            </h3>
            <p class="text-white pb-8 leading-relaxed">
              The interns will work with our team on creating new cutting edge
              software systems. Research and prototyping using a variety of
              programming languages...
            </p>
            <h3 class="mb-2 font-semibold text-white font-heading">
              Includes
            </h3>
            <ul class="mb-8 list-inside list-disc text-white">
              <li class="mb-1">Full time</li>
              <li class="mb-1">Min. 3 Years</li>
              <li class="mb-1">Junior Level</li>
              <li class="mb-1">Knowledge of English (required).</li>
            </ul>
            <a class="inline-block w-full py-3 px-5 leading-none text-center text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded shadow"
              href="/internship1">More Details</a>
          </div>
        </div> -->
  <!-- job6 -->
  <!-- <div class="w-full md:w-1/3 p-4 mb-2 md:mb-0">
          <div class="py-8 px-6 my-4 rounded-md dark_bg">
            <i class="fa-brands fa-ubuntu text-white text-5xl pb-2"></i>
            <h3 class="text-3xl white_blue mb-3 font-semibold font-heading">
              QA Engineer Internship
            </h3>
            <p class="pb-8 text-white leading-relaxed">
              The Engineering department is responsible for the development of
              our products in collaboration with our software development
              team.
            </p>
            <h3 class="mb-2 font-semibold text-white font-heading">
              Includes
            </h3>
            <ul class="mb-8 list-inside list-disc text-white">
              <li class="mb-1">Full time</li>
              <li class="mb-1">Min. 3 Years</li>
              <li class="mb-1">Junior Level</li>
              <li class="mb-1">Knowledge of English (required).</li>
            </ul>
            <a class="inline-block w-full py-3 px-5 leading-none text-center text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded shadow"
              href="/internship2">More Details</a>
          </div>
        </div> -->
</template>

<script>
export default {
  props: ["career"],
};
</script>
