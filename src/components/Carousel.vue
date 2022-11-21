<template>
  <div>
    <!-- carousel section -->
    <div
      id="indicators-carousel"
      class="relative"
      style="background-color: #ddf4ff;"
    >
      <div class="relative min-h-screen flex overflow-hidden rounded-lg">
        <div
          v-for="(item, i) in items"
          :key="i"
          :id="`carousel-item-${i}`"
          class="carousel-item bg_blue duration-700 ease-in-out inset-0 transition-all transform translate-x-0 z-20"
          :class="`${active === i ? 'active' : 'left-full'}`"
          :data-carousel-item="i"
        >
          <div
            class="absolute w-full lg:w-1/2 max-w-xl my-16 md:my-5 px-2 text-black text-center md:text-left -translate-x-1/2 -translate-y-1/2 md:top-1/4 top-1/3 left-0 md:left-40 sm:text-3xl dark:text-gray-800"
          >
            <h1
              class="text-4xl md:text-6xl mb-6 leading-none text-gray-600 font-semibold font-heading"
            >
              <span class="blue" v-if="item.titleInBlue"
                >{{ item.titleInBlue }} </span
              ><br /><span v-if="item.title">{{ item.title }}</span>
            </h1>
            <div
              class="text-gray-700 text-xl max-w-lg leading-relaxed"
              v-html="item.content"
            ></div>
          </div>
          <div>
            <g-image
              :src="item.img"
              class="absolute block w-full md:w-1/2 h-auto p-16 -translate-x-1/2 -translate-y-1/2 top-0 right-0"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
    <!-- itemr indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 mg-left md:left-1/2"
    >
      <button
        v-for="(item, i) in items"
        :key="i"
        @click="setActive(i)"
        :id="`carousel-indicator-${i + 1}`"
        type="button"
        class="w-3 h-3 rounded-full cs-blue dark:bg-gray-800"
        aria-current="true"
        :aria-label="`item ${i}`"
        :data-carousel-item-to="`${i - 1}`"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    setActive(id) {
      this.active = id;
    },
  },
};
</script>

<style scoped>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
