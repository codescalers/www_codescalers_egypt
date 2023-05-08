<template>
  <section class="pb-12 px-4 text-center bg-white">
    <div class="w-full max-w-2xl mx-auto">
      <g-image
        class="my-4 mx-auto transform transition duration-500 hover:scale-110"
        width="500"
        :src="item.img"
        alt=""
      />
      <!-- <h2 class="text-5xl leading-tight font-semibold font-heading">
        No paper plane can be made without paper
      </h2>
      <p class="mt-6 mb-8 text-gray-400 leading-relaxed">
        Professional, dedicated, local. Dunder Mifflin is on its best patch
        to change the way you think about paper. That’s us - people who sell
        limitless paper in the paperless world.
      </p> -->
      <g-link
        :to="item.btn_link"
        class="inline-block w-1/3 py-3 my-2 px-5 leading-none text-center text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded shadow"
      >
        {{ item.btn }}
      </g-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["item"],
};
</script>
