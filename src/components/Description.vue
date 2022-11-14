<template >
  <section class="py-12 px-4 dark_bg">
    <div class="lg:max-w-7xl mx-auto">
      <div
        v-for="(section, i) in sections"
        :key="i"
        class="
          flex flex-wrap
          items-center
          text-center
          lg:text-left
          mx-auto
          py-5
        "
      >
        <div class="lg:w-1/2 px-2" :class="{ 'lg:order-2': i % 2 !== 0 }">
          <g-image
            class="mx-auto transform transition duration-500 hover:scale-110"
            :src="section.img"
            alt=""
          />
        </div>
        <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">
          <h2
            class="
              text-5xl
              white_blue
              mb-6
              leading-tight
              font-semibold font-heading
            "
          >
            {{ section.title }}
          </h2>
          <div
            class="list lg:px-0 px-4 text-left text-lg text-white leading-relaxed"
            v-html="section.content"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["sections"],
};
</script>